from vectorstore.faiss_store import load_vector_store


def retrieve(query):

    db = load_vector_store()

    docs = db.similarity_search(
        query,
        k=1
    )

    context = "\n\n".join(
        [
            doc.page_content
            for doc in docs
        ]
    )

    return context