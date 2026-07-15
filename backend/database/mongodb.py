from pymongo import MongoClient

client = MongoClient(
    "mongodb://localhost:27017"
)

db = client[
    "customer_support_ai"
]

chat_collection = db[
    "chat_history"
]

user_collection = db[
    "users"
]