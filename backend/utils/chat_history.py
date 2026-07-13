from database.mongodb import chat_collection


def save_chat(
    session_id,
    user_message,
    bot_response
):

    chat_collection.insert_one(
        {
            "session_id": session_id,
            "user_message": user_message,
            "bot_response": bot_response
        }
    )


def get_chat_history(
    session_id
):

    chats = list(
        chat_collection.find(
            {
                "session_id": session_id
            },
            {
                "_id": 0
            }
        )
    )

    return chats