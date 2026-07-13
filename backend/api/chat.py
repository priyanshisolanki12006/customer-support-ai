from fastapi import APIRouter
from models.chat import ChatRequest
from agents.intent_classifier import detect_intent
from rag.retriever import retrieve
from utils.chat_history import (
    save_chat
)

router = APIRouter()


@router.post("/chat")
async def chat(
    request: ChatRequest
):

    intent = detect_intent(
        request.message
    )

    context = retrieve(
        request.message
    )

    response = context[:500]

    save_chat(
        request.session_id,
        request.message,
        response
    )

    return {
        "intent": intent,
        "response": response
    }