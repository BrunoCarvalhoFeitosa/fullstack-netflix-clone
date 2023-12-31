import Link from "next/link"
import {
    footerFirstItem,
    footerSecondItem,
    footerThirdItem,
    footerLastItem
} from "@/data/common"

const Footer = () => (
    <footer className="w-full px-8 xl:px-12 pt-16 pb-12 bg-black">
        <div className="pb-8">
            <h6 className="font-semibold text-white">Dúvidas? Ligue <span className="underline">0800 591 2876</span></h6>
        </div>
        <div className="flex flex-col gap-y-12 md:flex-row justify-between h-full">
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
                <ul className="text-white">
                    {footerThirdItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:hidden xl:flex">
                <ul className="text-white">
                    {footerLastItem.map((item, index) => (
                        <li key={index} className="text-sm xl:text-md mb-3 cursor-pointer">
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="pt-12">
            <div className="flex justify-center items-center gap-x-1 text-sm text-center text-white">
                <div>
                    Desenvolvido por
                </div>
                <div>
                    <Link
                        className="author"
                        href="https://br.linkedin.com/in/bruno-carvalho-feitosa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Bruno Carvalho Feitosa
                    </Link>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer