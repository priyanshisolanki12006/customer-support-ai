from pathlib import Path

from fastapi import APIRouter

from config.settings import settings
from database.mongodb import (
    get_chat_collection,
    get_user_collection
)

router = APIRouter()


@router.get("/stats")
def stats():

    knowledge_base = Path(
        settings.KNOWLEDGE_BASE_DIR
    )

    total_docs = (
        len(list(knowledge_base.glob("*.pdf")))
        if knowledge_base.is_dir()
        else 0
    )

    return {
        "total_chats":
        get_chat_collection().count_documents({}),

        "total_users":
        get_user_collection().count_documents({}),

        "total_docs":
        total_docs
    }
