import Link from "next/link"
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import { footerFirstItem, footerSecondItem, footerThirdItem, footerLastItem } from "@/data/common"

const Footer = () => (
    <footer className="relative w-full bg-[#070707]">
        <div className="flex justify-center md:justify-end gap-x-2 pt-8 pb-12 px-4 lg:px-12">
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#E50914] hover:opacity-70">
                <Link href="/" className="outline-none">
                    <AiFillFacebook className="text-xl" />
                </Link>
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#E50914] hover:opacity-70">
                <Link href="/" className="outline-none">
                    <AiOutlineTwitter className="text-xl" />
                </Link>
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#E50914] hover:opacity-70">
                <Link href="/" className="outline-none">
                    <AiFillInstagram className="text-xl" />
                </Link>
            </div>
            <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#E50914] hover:opacity-70">
                <Link href="/" className="outline-none">
                    <AiFillFacebook className="text-xl" />
                </Link>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-y-8 md:gap-y-0 justify-between py-4 px-8 xl:px-12">
            <div>
                <NetflixLogo width={120} height={60} />
            </div>
            <div>
                <ul className="text-white">
                    {footerFirstItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="text-white">
                    {footerSecondItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="md:hidden lg:block text-white">
                    {footerThirdItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden xl:flex">
                <ul className="text-white">
                    {footerLastItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer