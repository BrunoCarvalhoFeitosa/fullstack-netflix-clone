import { useEffect } from "react"
import { useHeader } from "@/contexts/HeaderContext"
import { signOut } from "next-auth/react"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlinePlayCircle, AiTwotoneCalendar, AiOutlinePlus } from "react-icons/ai"
import { CgMenuGridR } from "react-icons/cg"
import { BiSearch, BiHomeAlt2 } from "react-icons/bi"
import { PiTelevisionSimple, PiFilmSlate } from "react-icons/pi"
import { GoTools } from "react-icons/go"
import { HiLogout } from "react-icons/hi"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"

const HeaderOptions = () => {
    const { closeHeaderOptions, headerOptionsOpen } = useHeader()

    useEffect(() => {
        const handleEsc = (event: any) => {
           if (event.key === 'Escape') {
                closeHeaderOptions()
                document.body.style.overflowY="auto"
           }
        }
        window.addEventListener('keydown', handleEsc)
    
        return () => {
          window.removeEventListener('keydown', handleEsc)
        }
    }, [])
    

    return (
        <div className={`fixed top-0 right-0 w-full h-[100vh] ease-in-out duration-700 ${headerOptionsOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
            <div className="relative">
                <div
                    className="w-full h-[100vh] bg-[url('/images/hero-bg.jpeg')] bg-cover bg-no-repeat"
                />
                <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-r from-black from-30% to bg-zinc-950/80 z-50">
                    <div className="fixed top-5 right-5">
                        <button
                            className="outline-none cursor-pointer"
                            onClick={() => {
                                closeHeaderOptions()
                                document.body.style.overflowY="auto"
                            }
                        }>
                            <AiOutlineClose
                                className="text-2xl text-white"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col justify-center w-[250px] h-[100vh]">
                        <div className="pl-14">
                        <button
                            className="outline-none cursor-pointer"
                            onClick={() => {
                                closeHeaderOptions()
                                document.body.style.overflowY="auto"
                            }
                        }>
                            <NetflixLogo width={120} height={35} />
                        </button>
                        </div>
                        <div className="pl-14 py-12">
                            <ul className="flex flex-col gap-y-4 text-white">
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <BiHomeAlt2 className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Home
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <CgMenuGridR className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Menu
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <BiSearch className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Buscar
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <AiOutlinePlayCircle className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Assista agora
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <AiTwotoneCalendar className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Lançamentos
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <PiTelevisionSimple className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Séries de TV
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <PiFilmSlate className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Filmes
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <AiOutlinePlus className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Minha lista
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <GoTools className="text-2xl" />
                                    </div>
                                    <div className="text-sm">
                                        Configurações
                                        <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-14">
                            <ul className="flex flex-col gap-y-4 text-sm text-white">
                                <li className="group flex items-center gap-x-10 cursor-pointer">
                                    <div>
                                        <HiLogout className="text-2xl text-white" />
                                    </div>
                                    <button
                                        className="flex items-center gap-x-2 outline-none"
                                        onClick={() => signOut({
                                            callbackUrl: "/"
                                        })}
                                    >
                                        <div className="text-sm">
                                            Sair da Netflix
                                            <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderOptions