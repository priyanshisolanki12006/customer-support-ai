import os
from pymongo import MongoClient

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["customer_support_ai"]

chat_collection = db["chat_history"]
user_collection = db["users"]