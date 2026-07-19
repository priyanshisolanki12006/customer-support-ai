from utils.gemini import answer
from utils.prompts import PRODUCT_PROMPT


def product_agent(query, context):

    return answer(
        PRODUCT_PROMPT,
        query,
        context
    )
