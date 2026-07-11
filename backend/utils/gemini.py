import google.generativeai as genai
from config.settings import settings

genai.configure(
    api_key=settings.GOOGLE_API_KEY
)

model = genai.GenerativeModel(
    "gemini-1.5-flash"
)