'use client'

import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

interface product{

}

export default function cart(){

    const [n, setN] = useState(0)

    function handleClick(){
        setN(n+1)
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
                            <div className="flex p-7 justify-between items-center">
                                <div className="flex gap-5">
                                    <img src="https://placehold.co/650x400" alt="" width="195" height="120" className="rounded-xl"/>
                                    <span className="flex flex-col justify-center">
                                        <h2 className="mb-3 font-body tracking-wide text-primary-800 font-semibold">Bunga Buket</h2>
                                        <p className="font-body font-semibold">Rp.100.000</p>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 items-end">
                                    <div className="inline-flex rounded-lg -space-x-px border border-secondary/70">
                                        <button type="button" className="px-3 py-1 font-body rounded-l-lg hover:bg-black/20 hover:cursor-pointer">
                                            -
                                        </button>
                                        <span className="px-3 py-1 font-body">0</span>
                                        <button type="button" className="px-3 py-1 font-body rounded-r-lg hover:bg-black/20 hover:cursor-pointer">
                                            +
                                        </button>
                                    </div>
                                    <button type="button" className="px-2 py-1 rounded-lg text-rose-600 transition hover:text-white hover:bg-rose-600 hover:cursor-pointer">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>

                            {/* Item 1 */}
                            <div className="flex p-7 justify-between items-center">
                                <div className="flex gap-5">
                                    <img src="https://placehold.co/650x400" alt="" width="195" height="120" className="rounded-xl"/>
                                    <span className="flex flex-col justify-center">
                                        <h2 className="mb-3 font-body tracking-wide text-primary-800 font-semibold">Bunga Buket</h2>
                                        <p className="font-body font-semibold">Rp.100.000</p>
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3 items-end">
                                    <div className="inline-flex rounded-lg -space-x-px border border-secondary/70">
                                        <button type="button" className="px-3 py-1 font-body rounded-l-lg hover:bg-black/20 hover:cursor-pointer">
                                            -
                                        </button>
                                        <span className="px-3 py-1 font-body">0</span>
                                        <button type="button" className="px-3 py-1 font-body rounded-r-lg hover:bg-black/20 hover:cursor-pointer">
                                            +
                                        </button>
                                    </div>
                                    <button type="button" className="px-2 py-1 rounded-lg text-rose-600 transition hover:text-white hover:bg-rose-600 hover:cursor-pointer">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Total & Checkout Button */}
                    <div className="mb-10 w-3/10">
                        
                        <div className="px-5 py-6 flex flex-col bg-primary-100 rounded-3xl">
                            <h2 className="mb-3 font-body text-lg tracking-wide text-primary-800 font-bold">Total Pembelanjaan</h2>
                            <div className="mb-10 ml-5 mr-10">
                                {/* Item total belanja x-1 ~ placeholder */}
                                <span className="mb-2 flex items-center justify-between">
                                    <p className="font-body text-sm">Bunga Buket</p>
                                    <p className="font-body text-sm font-semibold">Rp.100.000</p>
                                </span>
                                {/* Item total belanja x-2 ~ placeholder */}
                                <span className="flex items-center justify-between">
                                    <p className="font-body text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className="font-body text-sm font-semibold">Rp.999.999.999</p>
                                </span>
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