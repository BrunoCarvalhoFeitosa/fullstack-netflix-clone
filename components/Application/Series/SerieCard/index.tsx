import Image from "next/image"
import { DataFilmsInterface } from "@/@types/typings"
import { BsStarFill } from "react-icons/bs"
import { useTraillerModal } from "@/contexts/TraillerModalContext"

interface SerieCardProps {
    serie: DataFilmsInterface
}

const SerieCard: React.FC<SerieCardProps> = ({ serie }) => {
    const { setTraillerData, openTraillerModal } = useTraillerModal()
    
    const handleSelect = () => {
        openTraillerModal()
        setTraillerData(serie)
    }

    return (
        <div className="group" onClick={handleSelect}>
            <div className="overflow-hidden cursor-grab">
                <Image
                    src={serie?.thumbnailUrl}
                    alt={serie?.title}
                    width={280}
                    height={180}
                    className="w-[160px] h-[120px] md:w-full md:h-[180px] group-hover:transform group-hover:scale-110 transition-all duration-300 object-cover object-center hover:z-10"
                />
            </div>
            <div className="flex justify-between mt-2 px-1 lg:px-4">
                <div>
                    <div>
                        <h3 className="hidden lg:block text-sm md:text-md text-white font-bold truncate w-[70px] md:w-auto">
                            {serie?.title}
                        </h3>
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-600">
                            {serie?.year}
                        </h4>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-x-1 md:gap-x-2">
                        <div>
                            <BsStarFill className="text-sm lg:text-md text-yellow-600" />
                        </div>
                        <div className="text-sm text-white">
                            {serie?.rating}.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SerieCard