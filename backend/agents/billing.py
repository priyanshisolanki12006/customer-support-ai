from utils.gemini import answer
from utils.prompts import BILLING_PROMPT


def billing_agent(query, context):

    return answer(
        BILLING_PROMPT,
        query,
        context
    )
