from fastapi import APIRouter
from models.user import (
    UserRegister,
    UserLogin
)
from database.mongodb import (
    user_collection
)

router = APIRouter()


@router.post("/register")
async def register(
    user: UserRegister
):

    existing = (
        user_collection.find_one(
            {
                "email":
                user.email
            }
        )
    )

    if existing:

        return {
            "message":
            "User already exists"
        }

    user_collection.insert_one(
        user.dict()
    )

    return {
        "message":
        "Registered Successfully"
    }


@router.post("/login")
async def login(
    user: UserLogin
):

    existing = (
        user_collection.find_one(
            {
                "email":
                user.email,
                "password":
                user.password
            }
        )
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