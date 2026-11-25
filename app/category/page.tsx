import NavigationBar from "@/components/navigationBar"
import Footer from "@/components/footer";;

export default function category(){
    return(
        <div>
            <NavigationBar/>
                <main className="flex flex-col pt-25 pb-10 px-15 w-full bg-linear-to-r from-tertiary/13 via-tertiary/11 to-tertiary/13">
                    <div className="flex flex-col mb-5 gap-1">
                        <p className="font-body text-xs tracking-wider text-primary-900/80">PILIHAN UNTUK SEGALA ACARA</p>
                        <h1 className="font-headline text-3xl font-bold">Kategori</h1>
                    </div>

                    <div className="grid grid-cols-5 grid-rows-2 gap-5">
                        <a href="#" className="col-span-3 row-span-2 flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <div className="h-100 bg-cover bg-center rounded-t-2xl text-center overflow-hidden" style={{backgroundImage: 'url("https://placehold.co/650x400")'}}>
                            </div>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-headline font-bold text-3xl text-black">Buket Bunga</h2>
                                    <p className="font-body text-sm text-primary-950/60">Telusuri katalog buket bunga segar, dan dapatkan bunga yang paling cocok untuk mu</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href="#" className="col-span-2 row flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <div className="h-45 bg-cover bg-center rounded-t-2xl text-center overflow-hidden" style={{backgroundImage: 'url("https://placehold.co/650x400")'}}>
                            </div>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-headline font-bold text-3xl text-black">Hamper</h2>
                                    <p className="font-body text-sm text-primary-950/60">Telusuri berbagai macam hamper kita yang cocok untuk berbagai acara</p>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="col-span-2 row flex flex-col rounded-2xl bg-white group transition hover:scale-102">
                            <div className="h-45 bg-cover bg-center rounded-t-2xl text-center overflow-hidden" style={{backgroundImage: 'url("https://placehold.co/650x400")'}}>
                            </div>
                            <div className="flex mx-5 my-6 justify-between items-center">
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-headline font-bold text-3xl text-black">Buket Uang</h2>
                                    <p className="font-body text-sm text-primary-950/60">Telusuri desain-desain buket uang untuk meryakan acara mu</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}