from vectorstore.faiss_store import load_vector_store


def retrieve(query):

    db = load_vector_store()

    docs = db.similarity_search(
        query,
        k=3
    )

    return "\n".join(
        [d.page_content for d in docs]
    )