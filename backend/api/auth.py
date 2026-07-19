from fastapi import APIRouter

from database.mongodb import get_user_collection
from models.user import (
    UserRegister,
    UserLogin
)

router = APIRouter()


@router.post("/register")
def register(
    user: UserRegister
):
    # NOTE: passwords are stored as plaintext and no session token is issued.
    # This is demo-grade only — see README before putting real users on it.

    users = get_user_collection()

    existing = users.find_one(
        {
            "email": user.email
        }
    )

    if existing:
        return {
            "message":
            "User already exists"
        }

    users.insert_one(
        user.model_dump()
    )

    return {
        "message":
        "Registered successfully"
    }


@router.post("/login")
def login(
    user: UserLogin
):

    existing = get_user_collection().find_one(
        {
            "email": user.email,
            "password": user.password
        }
    )

    if not existing:
        return {
            "message":
            "Invalid Credentials"
        }

    return {
        "message":
        "Login Successful"
    }
