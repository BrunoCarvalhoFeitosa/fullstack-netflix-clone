import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import { BiCommentError } from "react-icons/bi"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import "react-toastify/dist/ReactToastify.css"

const schema = yup.object({
    user_completeName:
        yup
            .string()
            .matches(/^[^\d]*$/, "Por favor, insira um nome válido.")
            .max(70)
            .min(12, "Por favor, insira corretamente seu nome completo.")
            .required("O campo nome completo é obrigatório."),
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

const SignUp = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = async (data: any) => {
        try {
            await axios.post("/api/register", {
                name: data.user_completeName,
                email: data.user_email,
                password: data.user_password,
            })

            toast.success(`${getValues("user_completeName")} seu cadastro foi efetuado com sucesso.`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            reset()
        } catch (error) {
            toast.error(`${getValues("user_completeName")} houve um erro, tente novamente.`, {
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
        <div className="sign-up w-full h-full">
            <Head>
                <title>Netflix | Cadastre-se na plataforma</title>
                <meta name="author" content="Bruno Carvalho Feitosa" />
                <meta name="description" content="Netflix | Cadastre-se na plataforma" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/images/fav.png" sizes="any" />
            </Head>
            <main className="w-full h-[100vh] overflow-hidden">
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
                                        id="user_completeName"
                                        autoComplete="off"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-100 appearance-none dark:text-white dark:border-zinc-800 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                        {...register("user_completeName")}
                                    />
                                    <label
                                        htmlFor="user_completeName"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        Nome Completo
                                    </label>
                                    <p className="flex items-center gap-x-[5px] text-[12px] text-white py-2">
                                        {errors.user_completeName?.message && (
                                            <BiCommentError className="text-xl text-red-600" />
                                        )}
                                        {errors.user_completeName?.message}
                                    </p>
                                </div>
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
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        E-mail
                                    </label>
                                    <p className="flex items-center gap-x-[5px] text-[12px] text-white py-2">
                                        {errors.user_email?.message && (
                                            <BiCommentError className="text-xl text-red-600" />
                                        )}
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
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        Senha
                                    </label>
                                    <p className="flex items-center gap-x-[5px] text-[12px] text-white py-2">
                                        {errors.user_password?.message && (
                                            <BiCommentError className="text-xl text-red-600" />
                                        )}
                                        {errors.user_password?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="relative w-full py-3 px-16 bg-red-600 hover:opacity-90 transition-opacity rounded-md outline-none text-black text-sm font-bold uppercase"
                                >
                                    Cadastre-se
                                </button>
                            </div>
                            <div className="mt-5">
                                <div className="flex justify-center items-center gap-x-[5px] mt-4">
                                    <span className="text-[12px] text-zinc-400 text-center">
                                        Já é cadastrado?
                                    </span>
                                    <Link
                                        className="text-[12px] text-zinc-400 font-bold hover:underline"
                                        href="/sign-in"
                                    >
                                        Faça login agora
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

export default SignUp