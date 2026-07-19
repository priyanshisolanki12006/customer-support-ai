from utils.gemini import answer
from utils.prompts import COMPLAINT_PROMPT


def complaint_agent(query, context):

    return answer(
        COMPLAINT_PROMPT,
        query,
        context
    )
