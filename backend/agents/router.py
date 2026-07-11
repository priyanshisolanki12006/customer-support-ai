from agents.billing import billing_agent
from agents.technical import technical_agent
from agents.product import product_agent
from agents.complaint import complaint_agent
from agents.faq import faq_agent


def route(intent, query, context):

    if intent == "billing":
        return billing_agent(query, context)

    if intent == "technical":
        return technical_agent(query, context)

    if intent == "product":
        return product_agent(query, context)

    if intent == "complaint":
        return complaint_agent(query, context)

    return faq_agent(query, context)