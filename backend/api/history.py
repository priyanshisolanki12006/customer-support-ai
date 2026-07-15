from fastapi import APIRouter
from database.mongodb import (
    chat_collection
)

router = APIRouter()


@router.get("/")
async def get_history():

    chats = list(
        chat_collection.find(
            {},
            {
                "_id": 0
            }
        )
    )

    return chats


@router.delete("/")
async def clear_history():

    chat_collection.delete_many(
        {}
    )

    return {
        "message":
        "History Cleared"
    }