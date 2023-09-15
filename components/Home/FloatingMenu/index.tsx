import { useState, useEffect } from "react"
import Link from "next/link"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"

const FloatingLoginButton = () => {
    const [showFloatingLoginButton, setShowFloatingLoginButton] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 680
                ? setShowFloatingLoginButton(true)
                : setShowFloatingLoginButton(false)
        })
    }, [])

    return (
        <div>
            {showFloatingLoginButton && (
                <div className="fixed top-0 left-0 flex justify-between items-center w-full h-[60px] px-4 lg:px-8 bg-black z-30">
                    <div>
                        <NetflixLogo width={120} height={25} />
                    </div>
                    <div className="flex items-center">
                        <ul className="flex items-center gap-x-3 font-semibold text-white">
                            <li className="group flex items-center gap-x-10 cursor-pointer">
                                <div className="text-sm">
                                    <Link href="/sign-in">
                                        Entre
                                    </Link>
                                    <div className="block h-1 bg-[#FF0000]" />
                                </div>
                            </li>
                            <li className="group flex items-center gap-x-10 cursor-pointer">
                                <div className="text-sm">
                                    <Link href="/sign-up">
                                        Cadastre-se
                                    </Link>
                                    <div className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FF0000]" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FloatingLoginButton