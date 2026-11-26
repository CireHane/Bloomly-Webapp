from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import products

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


@app.get("/")
def root():
    return {"message": "Bloomly API is running"}
