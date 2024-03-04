import useAuth from "@/hooks/useAuth"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
    email : string,
    password: string
}

function login() {
    const [Login, setLogin] = useState(false);
    const ref = useRef<any>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const { signUp, signIn } = useAuth();
    // register : 원하는 인풋 요소에 전개연산자로 등록해서 값 관리
    // handleSubmit : 해당 훅 전용 전송 이벤트 핸들러
    // formState : register로 등록된 값이 올바르지 않으면 에러 반환

    // 전송 이벤트 발생 시 handleSubmit함수로 실행할 콜백함수 등록
    const join: SubmitHandler<Inputs> = async ({email, password}) => {
        console.log(email, password)
        if(Login) {
            // 만약 클릭한 버튼이 로그인 버튼이면 firebase에 로그인 처리를 해주는 함수 호출
            await signIn(email, password);
        }else {
            // 로그인 버튼이 아니면 회원가입 등록 함수 호출
            await signUp(email, password);
        }
    }

    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>Nextflix Member</title>
                {/* <link rel="stylesheet" href="favicon.ico" type="image/x-icon" /> */}
            </Head>
            {/* https://rb.gy/ulxxee */}
            <Image src='https://rb.gy/p2hphi' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80} className="opacity-60 hidden sm:inline object-cover"  alt="Login" onLoadingComplete={() => ref.current.remove()} />
            {/* image loading bar */}
            <div className="w-[30px] h-[30px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[4px] border-solid border-[orange] rounded-[50%] border-t-[transparent] border-l-[transparent] z-10 animate-ani-rotation" ref={ref}></div>
            <Link href={'/'}><img src="https://rb.gy/ulxxee" alt="logo" width={150} height={150} className="absolute left-5 top-5 cursor-pointer object-contain md:left-10 md:top-6" /></Link>

            <form className="relative z-2 mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14" onSubmit={handleSubmit(join)}>
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    {/* register로 관리할 input 요소 등록 */}
                    <input type="email" placeholder="Email" className="input" {...register('email', {required: true})} />
                    {/* 해당 항목 미 입력시 출력될 에러 구문 */}
                    {errors.email && <span>Please enter a valid email.</span>}
                    <input type="password" placeholder="Password" className="input" {...register('password', {required: true})} />
                    {errors.password && <span>Please enter a valid password.</span>}
                </div>

                <button className="w-full rounded bg-[#e40914] py-3 font-semibold" onClick={() => setLogin(true)}>Sign In</button>
                <div className="text-[gray]">New to Nextflix?
                    <button className="text-white ml-2 hover:underline" onClick={() => setLogin(false)}>Sign Up Now</button>
                </div>
            </form>
        </div>
    )
}

export default login