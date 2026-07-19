from pathlib import Path

from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict
)

BASE_DIR = Path(__file__).resolve().parent.parent

PROJECT_DIR = BASE_DIR.parent


class Settings(BaseSettings):

    GOOGLE_API_KEY: str
    MONGO_URI: str

    DATABASE_NAME: str = "customer_support_ai"
    JWT_SECRET: str = "dev-secret-change-me"

    GEMINI_MODEL: str = "gemini-3.5-flash"
    EMBEDDING_MODEL: str = "models/gemini-embedding-001"

    FAISS_INDEX_DIR: str = str(
        BASE_DIR / "faiss_index"
    )

    KNOWLEDGE_BASE_DIR: str = str(
        PROJECT_DIR / "knowledge_base"
    )

    # Comma separated list of browser origins allowed to call this API.
    ALLOWED_ORIGINS: str = "http://localhost:3000"

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        extra="ignore"
    )

    @property
    def allowed_origins(self) -> list[str]:

        return [
            origin.strip()
            for origin in self.ALLOWED_ORIGINS.split(",")
            if origin.strip()
        ]


settings = Settings()
