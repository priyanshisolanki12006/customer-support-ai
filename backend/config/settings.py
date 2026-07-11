from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    GOOGLE_API_KEY: str
    MONGODB_URI: str
    DATABASE_NAME: str = "customer_support_ai"
    JWT_SECRET: str

    class Config:
        env_file = ".env"


settings = Settings()