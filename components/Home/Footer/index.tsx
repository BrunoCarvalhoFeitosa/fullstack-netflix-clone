import Image from "next/image"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import { footerFirstItem, footerSecondItem, footerThirdItem, footerLastItem } from "@/data/common"
import CloudImage01 from "@/public/images/cloud1.png"
import CloudImage02 from "@/public/images/cloud2.png"
import CloudImage03 from "@/public/images/cloud3.png"
import CloudImage04 from "@/public/images/cloud4.png"
import CloudImage05 from "@/public/images/cloud5.png"

const Footer = () => (
    <footer className="relative w-full py-20 bg-black">
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