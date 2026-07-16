from fastapi import APIRouter
from models.chat import ChatRequest
from agents.intent_classifier import detect_intent
from rag.retriever import retrieve
from utils.chat_history import save_chat

router = APIRouter()


@router.post("/chat")
async def chat(
    request: ChatRequest
):

    try:

        intent = detect_intent(
            request.message
        )

        context = retrieve(
            request.message
        )

        response = (
            context
            .replace(
                "Company Name:",
                "Company Name:\n"
            )
            .replace(
                "Office Hours:",
                "Office Hours:\n"
            )
            .replace(
                "Customer Support:",
                "Customer Support:\n"
            )
            .replace(
                "Email:",
                "Email:\n"
            )
            .replace(
                "Phone:",
                "Phone:\n"
            )
            .replace(
                "Address:",
                "Address:\n"
            )
        )

        response = response.replace(
            "TechMart Electronics Refund Policy",
            "📋 Refund Policy"
        )

        response = response.replace(
            "TechMart Electronics Company Information",
            "🏢 Company Information"
        )

        response = response.replace(
            "TechMart Electronics Shipping Policy",
            "🚚 Shipping Policy"
        )

        response = response.replace(
            "TechMart Electronics Warranty Policy",
            "🛡️ Warranty Policy"
        )

        response = response.replace(
            "TechMart Electronics Product Catalog",
            "💻 Product Catalog"
        )

        response = response.replace(
            "TechMart Electronics Subscription Plans",
            "💳 Subscription Plans"
        )

        save_chat(
            request.session_id,
            request.message,
            response
        )

        return {
            "intent": intent,
            "response": response
        }

    except Exception as e:

        print(
            "ERROR:",
            e
        )

        return {
            "intent": "error",
            "response": "Server Error"
        }