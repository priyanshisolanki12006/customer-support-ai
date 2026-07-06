from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

class Settings:
    APP_NAME = "Multi-Agent AI Customer Support Assistant"
    APP_VERSION = "1.0.0"

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    MONGODB_URI = os.getenv("MONGODB_URI")

settings = Settings()