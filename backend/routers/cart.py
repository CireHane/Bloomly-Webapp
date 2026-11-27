from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from supadb import admin_db, get_user

router = APIRouter()


class CartItem(BaseModel):
    product_id: str
    qty: int


class CartUpdate(BaseModel):
    items: list[CartItem]


@router.get("/cart")
def get_cart(user=Depends(get_user)):
    # my cart with the full product data filled in
    row = (
        admin_db.table("user_profile")
        .select("shopping_cart")
        .eq("user_id", user.id)
        .single()
        .execute()
        .data
    )

    cart = row["shopping_cart"] or []

    items = []
    for entry in cart:
        product = (
            admin_db.table("products")
            .select("product_id, product_name, product_image, price, stock_qty, status")
            .eq("product_id", entry["product_id"])
            .single()
            .execute()
            .data
        )
        items.append({**product, "qty": entry["qty"]})

    return items


@router.put("/cart")
def update_cart(body: CartUpdate, user=Depends(get_user)):
    # check every product before saving
    for item in body.items:
        found = (
            admin_db.table("products")
            .select("product_id")
            .eq("product_id", item.product_id)
            .execute()
            .data
        )
        if not found:
            raise HTTPException(status_code=400, detail=f"Product not found: {item.product_id}")
        if item.qty < 1:
            raise HTTPException(status_code=400, detail="Qty must be 1 or more")

    admin_db.table("user_profile").update(
        {"shopping_cart": [i.model_dump() for i in body.items]}
    ).eq("user_id", user.id).execute()

    return get_cart(user)
