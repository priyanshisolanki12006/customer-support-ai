from fastapi import FastAPI
from api.chat import router as chat_router
from api.health import router as health_router

app = FastAPI(
    title="Customer Support AI"
)

app.include_router(
    health_router
)

app.include_router(
    chat_router
)