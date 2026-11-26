
export function numToRupiah(number : number) : string {
    return Intl.NumberFormat("id-ID", {
        style : "currency",
        currency : "IDR",
        maximumFractionDigits: 0,
    }).format(number);
} 

export function getRating(rating: number, rating_amount: number){
    if(rating_amount == 0)
        return "0.0"
    return (rating/rating_amount).toFixed(1)
}