from functools import lru_cache

from pymongo import MongoClient

from config.settings import settings


@lru_cache(maxsize=1)
def get_client() -> MongoClient:
    """Connect lazily so an unreachable database cannot break app startup."""

    return MongoClient(
        settings.MONGO_URI,
        serverSelectionTimeoutMS=5000
    )


def get_db():

    return get_client()[settings.DATABASE_NAME]


def get_chat_collection():

    return get_db()["chat_history"]


def get_user_collection():

    return get_db()["users"]
