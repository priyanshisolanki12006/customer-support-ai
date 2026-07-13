import google.generativeai as genai
from config.settings import settings

genai.configure(
    api_key=settings.GOOGLE_API_KEY
)

response = genai.GenerativeModel(
    "gemini-2.0-flash"
).generate_content("Hello")

print(response.text)