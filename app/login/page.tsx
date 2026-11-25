import Footer from "@/components/footer";
import LoginHeader from "@/components/loginHeader";


export default function login(){
    return(
        <div>
            <LoginHeader/>
            
            <main className="flex justify-center min-h-150 pt-35 pb-10 w-full bg-linear-to-r from-tertiary/13 via-tertiary/11 to-tertiary/13">
                <div className="w-1/3 p-5 flex flex-col justify center">
                    <h2 className="mb-4 font-body text-3xl text-center font-semibold">Masuk akun</h2>

                    <p className="ml-2 mb-1 font-body text-xs text-primary-900/60 font-semibold">Nama:</p>
                    <input className="mb-4 px-3 py-2 rounded-xl w-full focus:outline-none bg-white" placeholder="cnth. John Doe" type="text" />
                    
                    <p className="ml-2 mb-1 font-body text-xs text-primary-900/60 font-semibold">Password:</p>
                    <input className="mb-4 px-3 py-2 rounded-xl w-full focus:outline-none bg-white" placeholder="Password" type="text" />
                    <button type="button" className="col mb-10 px-5 py-2 rounded-xl bg-primary text-tertiary-100 transition-colors hover:bg-primary-900 hover:text-tertiary-200">
                        Login
                    </button>

                    <p className="ml-2 mb-1 font-body text-sm text-primary-900/60 font-semibold text-center">Get Someone Special Somthing Special</p>
                </div>
            </main>

            <Footer/>
        </div>
    )
}