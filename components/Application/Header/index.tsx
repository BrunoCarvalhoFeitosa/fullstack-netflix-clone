import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { DataUserProps } from "@/@types/typings"
import { useHeader } from "@/contexts/HeaderContext"
import { RiArrowDropDownFill } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import AvatarImage from "@/public/images/avatar.jpg"

const Header = ({ data: user }: { data: DataUserProps }) => {
    const [changeBackground, setChangeBackground] = useState<boolean>(false)
    const { openHeaderOptions } = useHeader()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setChangeBackground(true) : setChangeBackground(false)
        })
    }, [])

    return (
        <div className={`fixed w-full py-4 px-2 md:px-6 ${changeBackground ? "bg-black" : "bg-transparent"} z-10`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2 lg:gap-x-4">
                    <div className="md:hidden">
                        <Link href="/application">
                            <NetflixLogo width={70} height={20} />
                        </Link>
                    </div>
                    <div className="hidden md:flex text-white">
                        <Link href="/application">
                            <NetflixLogo width={110} height={40} />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="flex items-center">
                            <button
                                className="flex items-center outline-none cursor-pointer"
                                onClick={() => {
                                    openHeaderOptions()
                                    document.body.style.overflowY="hidden"
                                }}
                            >
                                <div className="text-white">
                                    Buscar
                                </div>
                                <div className="text-white text-2xl">
                                    <RiArrowDropDownFill />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-4">
                    <div className="hidden md:flex">
                        <button
                            className="outline-none"
                            onClick={() => {
                                openHeaderOptions()
                                document.body.style.overflowY="hidden"
                            }}
                        >
                            <IoMdNotificationsOutline className="header-icons" />
                        </button>
                    </div>
                    <div className="relative">
                        <button
                            className="flex items-center gap-x-2 outline-none cursor-pointer"
                            onClick={() => {
                                openHeaderOptions()
                                document.body.style.overflowY="hidden"
                            }
                        }>
                            <div>
                                <Image
                                    src={AvatarImage}
                                    alt={user?.name}
                                    width={60}
                                    height={60}
                                    className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] rounded-full"
                                />
                            </div>
                            <div className="w-[65px] md:w-auto">
                                <p className="text-white truncate block">
                                    {user?.name ?? user?.email}
                                </p>
                            </div>
                            <div className="text-white text-2xl">
                                <RiArrowDropDownFill />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header