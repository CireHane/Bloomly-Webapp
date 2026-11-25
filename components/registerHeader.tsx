

export default function LoginHeader(){
    return(
        <header className="fixed top-0 left-0 right-0 w-full z-10 bg-primary-100 drop-shadow-md">
            <div className="h-20 mx-0 flex items-center justify-around">
                <a href="#" className='flex items-center justify-center gap-1'>
                    <span> <img src="/bloomlyLogo.svg" alt="Logo" width="36" height="36" /> </span>
                    <span className="font-headline text-primary-700 tracking-tight font-bold text-3xl">Bloomly</span>
                </a>
                <h1 className="font-headline text-3xl">Register</h1>
                <a href="/login" className="px-5 py-2 rounded-xl bg-primary text-tertiary-100 transition-colors hover:bg-primary-900 hover:text-tertiary-200">
                    Login
                </a>
            </div>
        </header>
    )
}