from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from routers import cart, products, profile
from supadb import db

app = FastAPI(title="Bloomly API")

# lets the Next.js frontend running localhost:3000 call this API from the browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(profile.router)
app.include_router(cart.router)


class Login(BaseModel):
    email: str
    password: str


@app.post("/dev/login")
def dev_login(body: Login):
    # makes a token so /docs tests do not need a script, the real login stays on Supabase
    try:
        res = db.auth.sign_in_with_password({"email": body.email, "password": body.password})
    except Exception:
        raise HTTPException(status_code=401, detail="Wrong email or password")
    return {"token": res.session.access_token}


@app.get("/")
def root():
    return {"message": "Bloomly API is running"}
