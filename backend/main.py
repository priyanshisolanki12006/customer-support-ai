from fastapi import FastAPI
from config.settings import settings
from api.health import router as health_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

# Register API routes
app.include_router(health_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Multi-Agent AI Customer Support Assistant",
        "version": settings.APP_VERSION
    }