from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from pydantic import BaseModel

from supadb import admin_db, get_user

router = APIRouter()


class ProfileUpdate(BaseModel):
    username: str | None = None
    phone: str | None = None
    address: str | None = None


@router.get("/profile")
def get_profile(user=Depends(get_user)):
    # my profile row, the token decides whose it is
    row = (
        admin_db.table("user_profile")
        .select("*")
        .eq("user_id", user.id)
        .single()
        .execute()
        .data
    )

    return {
        "user_id": user.id,
        "email": user.email,
        "username": row["username"],
        "phone": row["phone_number"],
        "address": row["delivery_address"],
        "role": row["role"],
    }


@router.put("/profile")
def update_profile(body: ProfileUpdate, user=Depends(get_user)):
    # only update the fields the request actually sends
    updates = {}

    if body.username is not None:
        updates["username"] = body.username
    if body.phone is not None:
        updates["phone_number"] = body.phone
    if body.address is not None:
        updates["delivery_address"] = body.address

    if updates:
        updates["updated_at"] = datetime.now(timezone.utc).isoformat()
        admin_db.table("user_profile").update(updates).eq("user_id", user.id).execute()

    return get_profile(user)
