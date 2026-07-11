from fastapi import APIRouter
from models.chat import ChatRequest
from agents.intent_classifier import detect_intent
from agents.router import route
from rag.retriever import retrieve
from utils.gemini import model

router = APIRouter()


@router.post("/chat")
async def chat(request: ChatRequest):

    intent = detect_intent(
        request.message
    )

    context = retrieve(
        request.message
    )

    prompt = route(
        intent,
        request.message,
        context
    )

    response = model.generate_content(
        prompt
    )

    return {
        "intent": intent,
        "response": response.text
    }