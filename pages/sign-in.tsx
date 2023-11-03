import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import "react-toastify/dist/ReactToastify.css"

const schema = yup.object({
    user_email:
      yup
        .string()
        .email("Por favor, insira um e-mail válido.")
        .required("O campo e-mail é obrigatório."),
    user_password:
      yup
        .string()
        .required("O campo senha é obrigatório."),
})

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: "/application",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const SignIn = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = async (data: any) => {
        setIsSubmitted(true)
        
        try {
            await signIn("credentials", {
                email: data.user_email,
                password: data.user_password,
                redirect: true,
                callbackUrl: "/profiles"
            })

            setIsSubmitted(false)

            toast.success(`Acesso liberado.`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } catch (error) {
            console.error("Error while made sign in action.", error)

            toast.error(`Houve um erro ao efetuar o login.`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            setIsSubmitted(true)
            
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        }
    }

    return (
        <div className="sign-in w-full h-full">
            <Head>
                <title>Netflix | Faça login na plataforma</title>
                <meta name="author" content="Bruno Carvalho Feitosa" />
                <meta name="description" content="Netflix | Faça login na plataforma" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/images/fav.png" sizes="any" />
            </Head>
            <main className="w-full h-[100vh]">
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col items-center w-[90%] lg:w-[500px]">
                        <div className="mb-6 cursor-pointer">
                            <Link href="/">
                                <NetflixLogo width={110} height={30} />
                            </Link>
                        </div>
                        <form
                            className="w-full"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="flex flex-col gap-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="user_email"
                                        autoComplete="off"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-100 appearance-none dark:text-white dark:border-zinc-800 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                        {...register("user_email")}
                                    />
                                    <label
                                        htmlFor="user_email"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        E-mail
                                    </label>
                                    <p className="text-[12px] text-white py-2 pl-2">
                                        {errors.user_email?.message}
                                    </p>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="user_password"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-100 appearance-none dark:text-white dark:border-zinc-800 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                        {...register("user_password")}
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-3 right-3"
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? (
                                            <AiFillEyeInvisible className="text-2xl text-red-600" />
                                        ) : (
                                            <AiFillEye className="text-2xl text-red-600" />
                                        )}
                                    </button>
                                    <label
                                        htmlFor="user_password"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        Senha
                                    </label>
                                    <p className="text-[12px] text-white py-2 pl-2">
                                        {errors.user_password?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                {isSubmitted ? (
                                    <button
                                        type="submit"
                                        className="relative flex justify-center items-center w-full h-[50px] py-3 px-16 gap-x-2 bg-red-600 hover:opacity-90 transition-opacity rounded-md outline-none text-black text-sm font-bold uppercase"
                                    >
                                        <div role="status">
                                            <svg
                                                aria-hidden="true" 
                                                className="w-5 h-5 text-black animate-spin dark:text-black fill-white"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        Processando...
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="relative flex justify-center items-center w-full h-[50px] py-3 px-16 bg-red-600 hover:opacity-90 transition-opacity rounded-md outline-none text-black text-md font-bold uppercase"
                                    >
                                        Entrar
                                    </button>
                                )}
                            </div>
                            <div className="flex justify-center items-center gap-x-4 my-6 mx-auto w-[70%]">
                                <div className="flex-1 h-[1px] bg-zinc-600" />
                                <p className="text-sm text-zinc-400">ou</p>
                                <div className="flex-1 h-[1px] bg-zinc-600" />
                            </div>
                            <div className="mt-5">
                                <div className="flex justify-center items-center gap-x-1 mt-4">
                                    <span className="text-[12px] text-zinc-400 text-center">
                                        Ainda não é cadastrado?
                                    </span>
                                    <Link
                                        className="text-[12px] text-zinc-400 font-bold underline"
                                        href="/sign-up"
                                    >
                                        Crie uma conta agora
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </div>
    )
}

export default SignIn