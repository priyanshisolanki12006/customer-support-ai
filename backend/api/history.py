from fastapi import APIRouter

from database.mongodb import get_chat_collection

router = APIRouter()


@router.get("")
def get_history(
    session_id: str | None = None
):
    # Without a session_id this returns every conversation in the database.
    # The frontend always sends one; see the note in README about locking
    # this down properly once real authentication exists.

    query = (
        {"session_id": session_id}
        if session_id
        else {}
    )

    return list(
        get_chat_collection().find(
            query,
            {"_id": 0}
        )
    )


@router.delete("")
def clear_history(
    session_id: str | None = None
):

    query = (
        {"session_id": session_id}
        if session_id
        else {}
    )

    result = get_chat_collection().delete_many(
        query
    )

    return {
        "message": "History Cleared",
        "deleted": result.deleted_count
    }
