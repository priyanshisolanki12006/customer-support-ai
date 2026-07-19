import os
from pymongo import MongoClient

print("ENV VALUE:", "MONGO_URI" in os.environ)
print("URI:", os.environ.get("MONGO_URI"))

client = MongoClient(os.environ["MONGO_URI"])

db = client["customer_support_ai"]

chat_collection = db["chat_history"]
user_collection = db["users"]