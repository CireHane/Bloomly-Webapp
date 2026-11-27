import os

from dotenv import load_dotenv
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from supabase import create_client

load_dotenv()

# normal client, follows the database rules
db = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_PUBLISHABLE_KEY"))

# admin client, skips the database rules, only use it on the server
admin_db = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_SECRET_KEY"))

# this makes the Authorize button appear in /docs
login = HTTPBearer(auto_error=False)


def get_user(credentials: HTTPAuthorizationCredentials = Depends(login)):
    # reads the token the frontend sends after login
    if credentials is None:
        raise HTTPException(status_code=401, detail="Not logged in")

    token = credentials.credentials.replace("Bearer ", "")
    try:
        result = db.auth.get_user(token)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

    if result is None or result.user is None:
        raise HTTPException(status_code=401, detail="Invalid token")

    return result.user


def get_admin(user=Depends(get_user)):
    # only accounts with role admin can pass
    row = (
        admin_db.table("user_profile")
        .select("role")
        .eq("user_id", user.id)
        .execute()
    )

    if not row.data or row.data[0]["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin only")

    return user
