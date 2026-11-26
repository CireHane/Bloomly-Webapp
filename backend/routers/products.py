from fastapi import APIRouter
from supadb import db

router = APIRouter()


@router.get("/products")
def list_products(search: str = ""):
    # all products, best selling first, or search by name
    query = db.table("products").select("*").order("popularity", desc=True)

    if search:
        query = query.ilike("product_name", f"%{search}%")

    return query.execute().data


@router.get("/products/{product_id}")
def get_product(product_id: str):
    return db.table("products").select("*").eq("product_id", product_id).execute().data
