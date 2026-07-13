from pymongo import MongoClient
from config.settings import settings

client = MongoClient(
    settings.MONGODB_URI
)

db = client[
    settings.DATABASE_NAME
]

chat_collection = db["chat_history"]

user_collection = db["users"]