from pymongo import MongoClient

import os
from pymongo import MongoClient

client = MongoClient(os.getenv("MONGO_URI"))

db = client["customer_support_ai"]

users_collection = db["users"]