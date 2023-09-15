import { useEffect, useState } from "react"
import Link from "next/link"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"

const Header = () => {
    const [showHeader, setShowHeader] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 140 ? setShowHeader(true) : setShowHeader(false)
        })
    }, [])

    return (
        <header>
            {showHeader && (
                <div className="hidden fixed left-0 w-full bg-black/90 z-10">
                    <div className="flex justify-between items-center py-3 px-6">
                        <div className="flex items-center gap-x-2 lg:gap-x-4">
                            <div className="md:hidden">
                                <Link href="/">
                                    <NetflixLogo width={70} height={20} />
                                </Link>
                            </div>
                            <div className="hidden md:flex text-white">
                                <Link href="/">
                                    <NetflixLogo width={110} height={40} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <ul className="flex items-center gap-x-3 text-sm text-white">
                                <li>Filmes</li>
                                <li>Séries</li>
                                <li>Documentários</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header