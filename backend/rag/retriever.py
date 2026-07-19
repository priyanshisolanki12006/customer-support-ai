from vectorstore.faiss_store import load_vector_store


def retrieve(query, k=4):
    """Return the top-k knowledge base chunks most relevant to `query`."""

    db = load_vector_store()

    docs = db.similarity_search(
        query,
        k=k
    )

    return "\n\n---\n\n".join(
        doc.page_content
        for doc in docs
    )
