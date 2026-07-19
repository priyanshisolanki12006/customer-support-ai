"""Rebuild the FAISS index from the PDFs in knowledge_base/.

Run from the backend directory whenever the knowledge base changes:

    python -m rag.document_loader

The resulting index is committed to git so deployments do not need to
re-embed at boot.
"""

from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter

from config.settings import settings
from vectorstore.faiss_store import get_embeddings


def create_vector_db():

    loader = PyPDFDirectoryLoader(
        settings.KNOWLEDGE_BASE_DIR
    )

    docs = loader.load()

    if not docs:
        raise RuntimeError(
            f"No PDFs found in {settings.KNOWLEDGE_BASE_DIR}"
        )

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150
    )

    chunks = splitter.split_documents(docs)

    db = FAISS.from_documents(
        chunks,
        get_embeddings()
    )

    db.save_local(
        settings.FAISS_INDEX_DIR
    )

    print(
        f"Indexed {len(chunks)} chunks from {len(docs)} pages "
        f"into {settings.FAISS_INDEX_DIR}"
    )


if __name__ == "__main__":
    create_vector_db()
