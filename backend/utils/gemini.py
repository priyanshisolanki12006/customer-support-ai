from functools import lru_cache

from langchain_google_genai import ChatGoogleGenerativeAI

from config.settings import settings


@lru_cache(maxsize=1)
def get_llm():

    return ChatGoogleGenerativeAI(
        model=settings.GEMINI_MODEL,
        google_api_key=settings.GOOGLE_API_KEY,
        temperature=0.2
    )


def answer(system_prompt, query, context):
    """Ask Gemini to answer `query` using only the retrieved `context`."""

    user_prompt = f"""Company information:

{context}

Customer question:

{query}"""

    response = get_llm().invoke(
        [
            ("system", system_prompt),
            ("human", user_prompt)
        ]
    )

    # langchain-core 1.x returns content as a list of typed blocks and exposes
    # the flattened string via `.text`, which is callable on newer versions and
    # a plain property on older ones.
    text = response.text

    if callable(text):
        text = text()

    return str(text).strip()
