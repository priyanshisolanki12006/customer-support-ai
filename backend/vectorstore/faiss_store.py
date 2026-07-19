from functools import lru_cache

from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings

from config.settings import settings


@lru_cache(maxsize=1)
def get_embeddings():

    return GoogleGenerativeAIEmbeddings(
        model=settings.EMBEDDING_MODEL,
        google_api_key=settings.GOOGLE_API_KEY
    )


@lru_cache(maxsize=1)
def load_vector_store():
    """Cached so the index is read from disk once, not on every request."""

    return FAISS.load_local(
        settings.FAISS_INDEX_DIR,
        get_embeddings(),
        allow_dangerous_deserialization=True
    )
