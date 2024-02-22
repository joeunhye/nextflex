import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
    email : string,
    password: string
}

function login() {
    const [Login, setLogin] = useState(false);
    
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>Nextflix Member</title>
                <link rel="stylesheet" href="favicon.ico" type="image/x-icon" />
            </Head>
            {/* https://rb.gy/ulxxee */}
            <Image src='https://rb.gy/p2hphi' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80} className="opacity-60 hidden sm:inline object-cover" priority alt="Login" />
            <img src="https://rb.gy/ulxxee" alt="logo" width={150} height={150} className="absolute left-5 top-5 cursor-pointer object-contain md:left-10 md:top-6" />

            <form className="relative z-2 mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password"placeholder="password" className="input" />
                </div>

                <button className="w-full rounded bg-[#e40914] py-3 font-semibold">Sign In</button>
                <div className="text-[gray]">New to Nextflix?
                    <button className="text-white ml-2 hover:underline">Sign Up Now</button>
                </div>
            </form>
        </div>
    )
}

export default login