import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <footer className='px-5 md:px-20 pt-10 pb-6 flex flex-col bg-primary-100'>
            <div className='mb-10 grid grid-cols-0 md:grid-cols-3  gap-6'>
                <div className='col flex flex-col'>
                    <a href="#" className='mb-2 flex items-center gap-1'>
                        <span> <img src="/bloomlyLogo.svg" alt="Logo" width="26" height="26" /> </span>
                        <span className="font-headline text-primary-700 tracking-tight font-bold text-2xl">Bloomly</span>
                    </a>
                    <p className='mb-2 text-body text-primary-950/50 text-sm'>
                        Setiap momen punya cerita. Bloomly hadir <br />
                        merangkai bunga segar dan hampers kurasi <br />
                        spesial dengan cinta untuk mempererat setiap <br />
                        hubungan Anda.
                    </p>
                    <div className='flex items-end'>
                        <span className='text-primary-950/50'><FontAwesomeIcon icon={faLocationDot} /></span>
                        <p className='text-body text-primary-950/50 text-sm'> Jakarta</p>
                    </div>
                </div>

                <div className='col flex flex-col'>
                    <h2 className="mb-2 font-body font-bold text-md text-black">Kategori Pilihan</h2>
                    <a href=""  className='mb-1 text-body text-primary-950/50 text-sm hover:text-primary-950/90'>Buket Bunga</a>
                    <a href=""  className='mb-1 text-body text-primary-950/50 text-sm hover:text-primary-950/90'>Buket Uang</a>
                    <a href=""  className='mb-1 text-body text-primary-950/50 text-sm hover:text-primary-950/90'>Hamper</a>
                </div>

                <div className='col flex flex-col'>
                    <h2 className="mb-2 font-body font-bold text-md text-black">Jam Operational</h2>
                    <p className='text-body text-primary-950/50 text-sm'>Setiap Hari: 08:00-20:00 WIB </p>
                    <p className='text-body text-primary-950/50 text-sm'>Pengiriman Bunga Segar mulai jam 09.00 WIB </p>
                    
                </div>
            </div>

            <p className='text-body text-primary-900/40 text-xs tracking-wide'>&#169; 2026 Bloomly Floristry &amp; Hampers. All rights reserved.</p>

        </footer>
    )
}