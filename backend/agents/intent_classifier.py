def detect_intent(message: str):

    msg = message.lower()

    if any(
        x in msg
        for x in [
            "payment",
            "refund",
            "invoice",
            "subscription",
            "billing"
        ]
    ):
        return "billing"

    if any(
        x in msg
        for x in [
            "login",
            "password",
            "error",
            "bug",
            "install"
        ]
    ):
        return "technical"

    if any(
        x in msg
        for x in [
            "price",
            "pricing",
            "feature",
            "product"
        ]
    ):
        return "product"

    if any(
        x in msg
        for x in [
            "complaint",
            "angry",
            "bad service"
        ]
    ):
        return "complaint"

    return "faq"