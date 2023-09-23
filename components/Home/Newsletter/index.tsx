import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

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
})

const Newsletter = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = () => {

    }

    return (
        <div className="w-full">
            <div className="w-[60%] mx-auto pt-4 pb-8">
                <h3 className="text-4xl text-center text-white">
                    Cadastre-se na newsletter
                </h3>
            </div>
            <div className="flex flex-col items-center w-[50%] mx-auto">
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
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Nome completo
                            </label>
                            <p className="text-[12px] text-white py-2 pl-2">
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
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                E-mail
                            </label>
                            <p className="text-[12px] text-white py-2 pl-2">
                                {errors.user_email?.message}
                            </p>
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter