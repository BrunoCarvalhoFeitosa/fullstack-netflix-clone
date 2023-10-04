import { useState } from "react"
import useBillboard from "@/hooks/useBillboard"
import { useTraillerModal } from "@/contexts/TraillerModalContext"
import { DataFilmsAndMoviesType } from "@/@types/typings"
import { BsPlay, BsStarFill, BsPlus } from "react-icons/bs"

const Billboard = () => {
    const [play, setPlay] = useState<boolean>(false)
    const { data: film }: { data: DataFilmsAndMoviesType } = useBillboard()
    const { setTraillerData, openTraillerModal } = useTraillerModal()
    
    const handleSelect = () => {
        openTraillerModal()
        setTraillerData(film)
    }

    return (
        <div className="relative h-[100vh]">
            <div>
                <video
                    poster={film?.thumbnailUrl}
                    src={film?.videoUrl}
                    autoPlay={play}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-0 left-0 flex flex-col w-full h-[100vh] bg-gradient-to-r from-black/95 from-35% to bg-slate-900/40">
                <div className="absolute top-[50%] translate-y-[-50%] px-4 lg:px-10 w-[100%] lg:w-[70%]">
                    <div>
                        <h1 className="text-4xl lg:text-7xl leading-snug font-bold text-white">
                            {film?.title}
                        </h1>
                    </div>
                    <div className="my-4 text-sm lg:text-md text-white uppercase font-bold">
                        {film?.genre}
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="flex items-center gap-x-1">
                            <BsStarFill className="text-lg text-yellow-600" />
                            <BsStarFill className="text-lg text-yellow-600" />
                            <BsStarFill className="text-lg text-yellow-600" />
                            <BsStarFill className="text-lg text-yellow-600" />
                            <BsStarFill className="text-lg text-yellow-600" />
                        </div>
                        <div className="text-md text-white uppercase font-bold">
                            {film?.year}
                        </div>
                        <div className="flex justify-center items-center w-10 h-6 rounded-full bg-[#FF0000] text-md text-white uppercase font-extrabold">
                            {film?.classification}
                        </div>
                        <div className="hidden md:block text-md text-white font-extrabold">
                            {film?.duration}
                        </div>
                    </div>
                    <div className="mt-6 md:w-[60%]">
                        <p className="text-gray-400 line-clamp-4 md:line-clamp-6 xl:line-clamp-none">
                            {film?.description}
                        </p>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center gap-x-2">
                            <button
                                className="animate-pulse hover:animate-none flex items-center py-2 px-6 rounded-[42px] bg-[#FF0000]"
                                onClick={() => {
                                    setPlay(!play)
                                    handleSelect()
                                }}
                            >
                                <div className="text-3xl text-white">
                                    <BsPlay />
                                </div>
                                <div className="text-md text-white font-semibold">
                                    Assistir
                                </div>
                            </button>
                            <button className="group flex justify-center items-center py-2 px-6 md:px-12 rounded-[42px] border border-white bg-transparent hover:bg-white transition-all duration-700">
                                <div className="text-3xl text-white outline-none group-hover:text-black">
                                    <BsPlus />
                                </div>
                                <div className="text-md font-semibold text-white outline-none group-hover:text-black">
                                    Favoritar
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard