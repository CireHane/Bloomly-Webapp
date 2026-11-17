import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClockRotateLeft, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavigationBar(){
    return (
    <header className="fixed top-0 left-0 right-0 w-full z-10 bg-primary-100/80 backdrop-blur drop-shadow-md">
        <div className="h-16 mx-0 lg:mx-10 flex items-center justify-between gap-3">
            <a href="#" className='flex items-center justify-between gap-1'>
                <span> <img src="/bloomlyLogo.svg" alt="Logo" width="26" height="26" /> </span>
                <span className="font-headline text-primary-700 tracking-tight font-bold text-2xl">Bloomly</span>
            </a>

            <div className="hidden lg:flex flex-1 mx-5">
                <div className="w-full bg-white rounded-full p-1 flex text-primary-600">
                    <a href="#" className="p-1 mx-1 rounded-full hover:bg-black/10">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <input className="w-full focus:outline-none" placeholder="Cari buket mawar, hamper ulang tahun..." type="text" />
                </div>
            </div>

            <nav>
                <a className="font-body font-medium text-md px-4 py-2 rounded-3xl transition-colors hover:bg-primary hover:text-tertiary-100" href="#">Home</a>
                <a className="font-body font-medium text-md px-4 py-2 rounded-3xl transition-colors hover:bg-primary hover:text-tertiary-100" href="#">Kategori</a>
                <a className="font-body font-medium text-md px-4 py-2 rounded-3xl transition-colors hover:bg-primary hover:text-tertiary-100" href="#">Custom Order</a>
                <a className="font-body font-medium text-md px-4 py-2 rounded-3xl transition-colors hover:bg-primary hover:text-tertiary-100" href="#">Pesanan Saya</a>
            </nav>

            <div className='flex items-center gap-space-xs'>
                <a href="#" className='mx-1 h-10 w-10 grow-0 shrink-0 rounded-full flex items-center justify-center text-primary-600 transition-colors hover:bg-primary-600 hover:text-tertiary-100'>
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                </a>
                <a href="#" className='mx-1 h-10 w-10 grow-0 shrink-0 rounded-full flex items-center justify-center text-primary-600 transition-colors hover:bg-primary-600 hover:text-tertiary-100'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <a href="#" className='ml-1 h-10 w-10 grow-0 shrink-0 rounded-full bg-primary-600 flex items-center justify-center text-tertiary-100 transition-colors hover:bg-primary-800 hover:text-tertiary-200'>
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </div>

        </div>
    </header>
    )
}