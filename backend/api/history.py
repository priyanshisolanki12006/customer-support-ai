from fastapi import APIRouter
from utils.chat_history import (
    get_chat_history
)

router = APIRouter()


@router.get(
    "/history/{session_id}"
)
async def history(
    session_id: str
):

    chats = get_chat_history(
        session_id
    )

    return chats