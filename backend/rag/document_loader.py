from pathlib import Path

from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS

from vectorstore.faiss_store import embeddings


def create_vector_db():

    BASE_DIR = Path(__file__).resolve().parent.parent.parent

    loader = PyPDFDirectoryLoader(
        str(BASE_DIR / "knowledge_base")
    )

    docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )

    chunks = splitter.split_documents(docs)

    db = FAISS.from_documents(
        chunks,
        embeddings
    )

    db.save_local("faiss_index")

    print("FAISS index created successfully!")