import logging

from fastapi import APIRouter, HTTPException

from agents.intent_classifier import detect_intent
from agents.router import route
from models.chat import ChatRequest
from rag.retriever import retrieve
from utils.chat_history import save_chat

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/chat")
def chat(
    request: ChatRequest
):
    # Defined with `def` rather than `async def`: retrieval, the Gemini call
    # and the Mongo write are all blocking, so FastAPI runs this in a
    # threadpool instead of stalling the event loop.

    try:

        intent = detect_intent(
            request.message
        )

        context = retrieve(
            request.message
        )

        response = route(
            intent,
            request.message,
            context
        )

    except Exception:

        logger.exception(
            "Chat request failed"
        )

        raise HTTPException(
            status_code=502,
            detail="Unable to generate a response right now."
        )

    try:

        save_chat(
            request.session_id,
            request.message,
            response
        )

    except Exception:

        # A history write failure should not cost the customer their answer.
        logger.exception(
            "Failed to persist chat history"
        )

    return {
        "intent": intent,
        "response": response
    }
