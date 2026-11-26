'use client'

import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { getRating, numToRupiah } from "@/lib/utils";


interface Products{
    id : number;
    name : string;
    image : string;
    price : number;
    rating : number;
    rating_amount : number;
}

const fakeProducts : Products[] = [
    {id : 1, name : "Buquet Buket", image : "https://placehold.co/500", price : 10000, rating : 500, rating_amount : 100 },
    {id : 2, name : "Buket Mawar", image : "https://placehold.co/500",  price : 150000, rating : 500, rating_amount : 100 },
    {id : 3, name : "Buket Ribuan", image : "https://placehold.co/500",  price : 200000, rating : 500, rating_amount : 100 },
    {id : 4, name : "Hamper Snack 1", image : "https://placehold.co/500",  price : 50000, rating : 0, rating_amount : 0 },
    {id : 5, name : "Hamper Gift 3", image : "https://placehold.co/500",  price : 10000000, rating : 333, rating_amount : 100 },
    {id : 6, name : "Bucket of Flower", image : "https://placehold.co/500", price : 23333, rating : 426, rating_amount : 100 },
]

export default function login(){

    const [products, setProducts] = useState<Products[]>(fakeProducts)

    return(
        <div>
            <NavigationBar/>

            <main className="flex justify-center pt-35 pb-10 w-full bg-linear-to-r from-tertiary/13 via-tertiary/11 to-tertiary/13">
                <div className="">
                    <div className="col-span-4 px-8 grid grid-cols-5 gap-5">
                        {/* Item Card */}
                        {products.map((items)=>(
                            <a href="#" key={items.id} className="col flex flex-col rounded-2xl bg-white transition hover:scale-102 overflow-hidden">
                                <img className="w-full" src={items.image}></img>
                                <div className="mx-5 my-5 flex flex-col">
                                    <h2 className="font-body font-semibold text-black">{items.name}</h2>
                                    <h2 className="mb-1 font-body font-bold text-md text-primary-700">{numToRupiah(items.price)}</h2>
                                    <span className="text-yellow-500 flex items-center">
                                        <FontAwesomeIcon icon={faStar} />
                                        <p className="pl-1 font-semibold">{getRating(items.rating, items.rating_amount)}</p>
                                    </span>
                                </div>
                            </a>
                        ))
                        }
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}