def complaint_agent(query, context):

    return f"""
Complaint Support

Context:
{context}

Query:
{query}

Escalation may be required.
"""