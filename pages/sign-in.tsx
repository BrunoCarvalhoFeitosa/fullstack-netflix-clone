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
import { AiOutlineGoogle, AiOutlineGithub, AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"

type FormType = {
    email: string;
    password: string;
}

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
        try {
            await signIn('credentials', {
                email: data.user_email,
                password: data.user_password,
                redirect: true,
                callbackUrl: "/profiles"
            })

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
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="icon" href="/images/fav.png" sizes="any" />
            </Head>
            <main className="w-full h-full">
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
                                <button
                                    type="submit"
                                    className="relative w-full py-3 px-16 bg-red-600 hover:opacity-90 transition-opacity rounded-md outline-none text-black text-sm font-bold uppercase"
                                >
                                    Entre
                                </button>
                            </div>
                            <div className="flex justify-center items-center gap-x-4 my-4 mx-auto w-[70%]">
                                <div className="flex-1 h-[1px] bg-zinc-600" />
                                <p className="text-sm text-zinc-400">ou</p>
                                <div className="flex-1 h-[1px] bg-zinc-600" />
                            </div>
                            <div className="flex justify-center items-center gap-x-2">
                                <button
                                    className="flex justify-center items-center w-[30px] h-[30px] bg-red-600 rounded-full cursor-pointer"
                                    onClick={() => signIn('google', { callbackUrl: "/profiles" })}
                                >
                                    <AiOutlineGoogle className="text-black" />
                                </button>
                                <button
                                    className="flex justify-center items-center w-[30px] h-[30px] bg-red-600 rounded-full cursor-pointer"
                                    onClick={() => signIn('github', { callbackUrl: "/profiles" })}
                                >
                                    <AiOutlineGithub className="text-black" />
                                </button>
                            </div>
                            <div className="mt-5">
                                <div className="flex justify-center items-center gap-x-1 mt-4">
                                    <span className="text-[12px] text-zinc-400 text-center">
                                        Ainda não é cadastrado?
                                    </span>
                                    <Link
                                        className="text-[12px] text-zinc-400 font-bold hover:underline"
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