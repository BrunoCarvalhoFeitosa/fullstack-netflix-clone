import Image from "next/image"
import { TbPlayerPlayFilled } from "react-icons/tb"
import { CatalogueProps } from "@/@types/typings"
import { useEpisodePlayer } from "@/contexts/EpisodePlayerContext"

const EpisodeCard: React.FC<CatalogueProps> = ({ 
    cover,
    title,
    description,
    resume,
    duration,
    trailerLink,
    season,
 }) => {
    const { openEpisodePlayerOptions, setTrailerLink } = useEpisodePlayer()

    return (
        <div>
            <div className="relative">
                <div className="w-full h-full">
                    <Image
                        src={cover}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 from-25% to bg-black/30">
                    <div className="p-2">
                        <span className="text-xl text-white font-bold">
                            {season}
                        </span>
                    </div>
                    <div className="absolute bottom-0 right-0 lg:-right-5 z-10">
                        <button
                            className="flex justify-center items-center w-[45px] h-[45px] bg-[#E50914]"
                            onClick={() => {
                                openEpisodePlayerOptions()
                                setTrailerLink(trailerLink)
                                document.body.style.overflowY="hidden"
                            }}
                        >
                            <TbPlayerPlayFilled className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-x-8 mt-5">
                <div>
                    <h5 className="text-[11px] lg:text-sm font-thin text-white">
                        {resume}
                    </h5>
                </div>
                <div>
                    <h5 className="text-[11px] lg:text-sm font-bold text-white">
                        {duration}
                    </h5>
                </div>
            </div>
            <div className="w-[90%] mx-auto">
                <div className="mt-3">
                    <h5 className="text-[11px] lg:text-sm text-white font-bold text-center">
                        {title}
                    </h5>
                    <p className="text-[11px] lg:text-sm text-center text-white line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard