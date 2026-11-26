"use client"

import NavigationBar from "@/components/navigationBar"
import Footer from "@/components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faChevronRight, faCartArrowDown, faSeedling, faEnvelope, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { numToRupiah } from "@/lib/utils"

interface Products{
    id : number;
    name : string;
    image : string;
    desc : string;
    price : number;
}

const fakeProducts : Products[] = [
    {id : 1, name : "Buket Mawar", image : "https://placehold.co/500", desc : "Buket Mawar Merah Biru...", price : 150000},
    {id : 2, name : "Buket Ribuan", image : "https://placehold.co/500", desc : "Buket Uang berisi...", price : 200000},
    {id : 3, name : "Hamper Snack 1", image : "https://placehold.co/500", desc : "Hamper Snack manisan", price : 50000},
    {id : 4, name : "Hamper Gift 3", image : "https://placehold.co/500", desc : "Lorem Ipsum ...", price : 10000000},
]

export default function home(){

    const [popularProducts, setPopularProducts] = useState<Products[]>(fakeProducts)

    return(
        <div className="text-body">
            <NavigationBar />

            <main className="flex flex-col pt-25 pb-10 w-full bg-linear-to-r from-tertiary/13 via-tertiary/11 to-tertiary/13 ">
                {/* Greeting */}
                <div className="mx-15 mb-5">
                    <h1 className="my-3 font-headline text-3xl tracking-tight text-primary-900 font-semibold">
                        Hai, John! {/* TO-DO Ganti ke nama profile */}
                    </h1>
                    <p className="text-body text-primary-900/60 tracking-wide">
                        Siap membuat hari seseorang lebih spesial?
                    </p>
                </div>

                {/* Opening card */}
                <div className="grid grid-cols-5 my-5 mx-10 rounded-2xl bg-linear-to-r from-primary-900 to-primary-500">
                    <div className="flex flex-col col col-span-5 md:col-span-3 mx-10 text-white justify-center h-90">
                        <h1 className="mb-4 font-headline text-4xl tracking-tight font-semibold">Special Gift For Special People</h1>
                        <p className="mb-5 font-body leading-5 tracking-wide text-primary-100/90">Rangkaian buket bunga segar pilihan dengan perpanduan warna <br /> lembut, dirancang dengan penuh kasih untuk setiap momen <br /> bahagiamu.</p>
                        <span className="flex items-center">
                            <a href="/products" className="font-body font-medium px-7 py-2 mr-5 rounded-3xl transition-colors text-primary-900 bg-white hover:bg-white/90">Lihat Koleksi &#10132;</a>
                            <span className="text-primary-100/90 mr-1"><FontAwesomeIcon icon={faTruck} /></span>
                            <p className="font-body text-sm text-primary-100/90">Tersedia Same-day Delivery</p>
                        </span>
                    </div>
                
                    <div className="hidden md:flex col col-span-0 md:col-span-2 h-auto bg-cover bg-center rounded-r-2xl text-center overflow-hidden" style={{backgroundImage: 'url("https://placehold.co/1000x600")'}}>
                    </div>
                </div>

                {/* Categories */}
                <div className="mx-10 mb-10">
                    <div className="flex mb-3 justify-between items-center">
                        <div className="flex flex-col">
                            <p className="font-body text-xs tracking-wider text-primary-900/80">PILIHAN SPESIAL</p>
                            <h1 className="font-headline text-2xl font-semibold">Kategori Utama</h1>
                        </div>
                        <p className="font-body text-xs tracking-wider text-primary-950/80">Kurasi Terbaik untuk hadiah penuh arti</p>
                    </div>

                    <div className="grid grid-cols-0 md:grid-cols-3 gap-5">
                        {/* Card 1 */}
                        <a href="#" className="col flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <img className="w-full rounded-t-2xl" src="https://placehold.co/650x400"></img>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-body font-bold text-xl text-black">Buket Bunga</h2>
                                    <p className="font-body text-sm text-primary-950/80">Segar mawar, tulip, & aster pilihan</p>
                                </div>
                                <span className="transition group-hover:scale-150"><FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </a>

                        {/* Card 2 */}
                        <a href="#" className="col flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <img className="w-full rounded-t-2xl" src="https://placehold.co/650x400"></img>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-body font-bold text-xl text-black">Buket Uang</h2>
                                    <p className="font-body text-sm text-primary-950/80">Rangkaian Rapi bernilai estetis tinggi</p>
                                </div>
                                <span className="transition group-hover:scale-150"><FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </a>

                        {/* Card 3 */}
                        <a href="#" className="col flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <img className="w-full rounded-t-2xl" src="https://placehold.co/650x400"></img>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-body font-bold text-xl text-black">Hampers</h2>
                                    <p className="font-body text-sm text-primary-950/80">Box kado terkurasi lengkap pita</p>
                                </div>
                                <span className="transition group-hover:scale-150"><FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Popular Items */}
                <div className="mx-10">
                    <div className="flex mb-3 justify-between items-center">
                        <div className="flex flex-col">
                            <p className="font-body text-xs tracking-wider text-primary-900/80">PALING BANYAK DIPESAN</p>
                            <h1 className="font-headline text-2xl font-semibold">Produk Terlaris</h1>
                        </div>
                        <a href="#" className="font-body font-medium text-sm tracking-wider text-primary-800/80 transition hover:text-primary-950 hover:scale-105">Lihat Semua &#10132;</a>
                    </div>

                    <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        { popularProducts.map((item) => (
                            <div key={item.id} className="col flex flex-col rounded-2xl bg-white">
                                <img className="w-full rounded-t-2xl" src={item.image}></img>
                                
                                <div className="mx-5 my-5 flex flex-col">
                                    <p className="font-body text-sm text-primary-950/80">{item.desc}</p>
                                    <h2 className="font-body font-semibold text-black">{item.name}</h2>
                                    <h2 className="mb-3 font-body font-semibold text-md text-primary-700">{numToRupiah(item.price)}</h2>
                                    <a href="#" className="w-full p-2 font-body font-semibold text-sm text-center rounded-full text-primary-700 bg-tertiary/20 transition hover:text-primary-900 hover:bg-tertiary/50">
                                        <span className="mr-1"><FontAwesomeIcon icon={faCartArrowDown} /></span>
                                        <span>Pesan</span>
                                    </a>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>

                {/* Information Card */}
                <div className="mx-10 mt-10 grid grid-cols-0 md:grid-cols-2 lg:grid-cols-4 rounded-lg bg-white">
                    <div className="col flex mx-4 my-4">
                        <span className="p-4 mr-4 text-primary-700 rounded-full bg-tertiary/20"><FontAwesomeIcon icon={faTruck} /></span>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-body font-semibold text-md text-black">Same-day Delivery</h2>
                            <p className="font-body text-xs text-primary-950/60">Kirim dihari yang sama</p>
                        </div>
                    </div>

                    <div className="col flex mx-4 my-4">
                        <span className="p-4 mr-4 text-primary-700 rounded-full bg-tertiary/20"><FontAwesomeIcon icon={faSeedling} /></span>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-body font-semibold text-md text-black">100% Bunga Segar</h2>
                            <p className="font-body text-xs text-primary-950/60">Dipetik langsung dari kebun</p>
                        </div>
                    </div>

                    <div className="col flex mx-4 my-4">
                        <span className="p-4 mr-4 text-primary-700 rounded-full bg-tertiary/20"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-body font-semibold text-md text-black">Kartu Ucapan Gratis</h2>
                            <p className="font-body text-xs text-primary-950/60">Pesan personal estetik</p>
                        </div>
                    </div>

                    <div className="col flex mx-4 my-4">
                        <span className="p-4 mr-4 text-primary-700 rounded-full bg-tertiary/20"><FontAwesomeIcon icon={faCertificate} /></span>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-body font-semibold text-md text-black">Foto Sebelum Dikirim</h2>
                            <p className="font-body text-xs text-primary-950/60">Pasti sesuai pesananmu</p>
                        </div>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    )
}