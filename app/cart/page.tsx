'use client'

import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { numToRupiah } from "@/lib/utils";
import { Span } from "next/dist/trace";

interface Products{
    id : number;
    amount : number;
    name : string;
    image : string;
    price : number;
}

const fakeProducts : Products[] = [
    {id : 1, amount : 1, name : "Buket Mawar", image : "https://placehold.co/500", price : 150000},
    {id : 2, amount : 1, name : "Buket Ribuan", image : "https://placehold.co/500",  price : 200000}
]

export default function cart(){

    const [products, setProducts] = useState<Products[]>(fakeProducts)

    function changeProductAmount(adds: boolean, id: number){
        let index = products.map((item)=>{return item.id}).indexOf(id)
        console.log(index)
        let data : Products[] = Object.assign([],products)
        if(index <= -1)
            return
        
        if(adds)
            data[index].amount += 1
        else
            data[index].amount -= 1

        if(data[index].amount <= 0){
            deleteProduct(id)
            return
        }

        setProducts(data)
    }

    function deleteProduct(id: number){
        let index = products.map((item)=>{return item.id}).indexOf(id)
        if(index <= -1)
            return

        let data : Products[] = Object.assign([],products)
        data.splice(index, 1)

        setProducts(data)
    }
    
    return(
        <div>
            <NavigationBar />

            <main className="pt-25 px-20 min-h-150 w-full bg-linear-to-r from-tertiary/13 via-tertiary/11 to-tertiary/13">
                <h1 className="mb-5 font-headline text-3xl tracking-tight text-primary-800 font-bold">Keranjang</h1>
                <div className="flex gap-5">
                    <div className="flex flex-col w-7/10">
                        {/* Cart */}
                        <div className="mb-10 p-7 bg-white rounded-3xl">
                            {/* Item 1 */}
                            
                            {products.map((item)=>(
                                <div key={item.id} className="flex p-7 justify-between items-center">
                                    <div className="flex gap-5">
                                        <img src={item.image} alt="" width="125" height="120" className="rounded-xl"/>
                                        <span className="flex flex-col justify-center">
                                            <h2 className="mb-3 font-body tracking-wide text-primary-800 font-semibold">{item.name}</h2>
                                            <p className="font-body font-semibold">{numToRupiah(item.price)}</p>
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3 items-end">
                                        <div className="inline-flex rounded-lg -space-x-px border border-secondary/70">
                                            <button type="button" className="px-3 py-1 font-body rounded-l-lg hover:bg-black/20 hover:cursor-pointer" onClick={(_) => changeProductAmount(false, item.id)}>
                                                -
                                            </button>
                                            <span className="px-3 py-1 font-body">{item.amount}</span>
                                            <button type="button" className="px-3 py-1 font-body rounded-r-lg hover:bg-black/20 hover:cursor-pointer" onClick={(_) => changeProductAmount(true, item.id)}>
                                                +
                                            </button>
                                        </div>
                                        <button type="button" className="px-2 py-1 rounded-lg text-rose-600 transition hover:text-white hover:bg-rose-600 hover:cursor-pointer" onClick={(_) => deleteProduct(item.id)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    {/* Total & Checkout Button */}
                    <div className="mb-10 w-3/10">
                        
                        <div className="px-5 py-6 flex flex-col bg-primary-100 rounded-3xl">
                            <h2 className="mb-3 font-body text-lg tracking-wide text-primary-800 font-bold">Total Pembelanjaan</h2>
                            <div className="mb-10 ml-5 mr-10">
                                {/* Item total belanja */}
                                {products.map((item)=>(
                                    <span key={item.id} className="mb-2 flex items-center justify-between">
                                        <p className="font-body text-sm">{item.name} ({item.amount})</p>
                                        <p className="font-body text-sm font-semibold">{numToRupiah(item.price * item.amount)}</p>
                                    </span>
                                ))}
                            </div>
                            <a href="#" className="w-full font-body font-medium text-md text-center px-4 py-2 rounded-3xl bg-primary text-tertiary-100 transition-colors hover:bg-primary-700 hover:text-tertiary-200">
                                Checkout
                            </a>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}