from utils.gemini import answer
from utils.prompts import TECHNICAL_PROMPT


def technical_agent(query, context):

    return answer(
        TECHNICAL_PROMPT,
        query,
        context
    )
