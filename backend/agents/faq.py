from utils.gemini import answer
from utils.prompts import FAQ_PROMPT


def faq_agent(query, context):

    return answer(
        FAQ_PROMPT,
        query,
        context
    )
