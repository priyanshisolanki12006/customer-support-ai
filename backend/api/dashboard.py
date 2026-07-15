from fastapi import APIRouter

from database.mongodb import (
    chat_collection,
    user_collection
)

router = APIRouter()


@router.get("/stats")
async def stats():

    total_chats = (
        chat_collection
        .count_documents({})
    )

    total_users = (
        user_collection
        .count_documents({})
    )

    total_docs = 6

    return {

        "total_chats":
        total_chats,

        "total_users":
        total_users,

        "total_docs":
        total_docs
    }