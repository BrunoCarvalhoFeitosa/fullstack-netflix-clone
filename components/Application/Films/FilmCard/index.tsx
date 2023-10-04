import Image from "next/image"
import { DataFilmsInterface } from "@/@types/typings"
import { BsStarFill } from "react-icons/bs"
import { useTraillerModal } from "@/contexts/TraillerModalContext"

interface FilmCardProps {
    film: DataFilmsInterface;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
    const { setTraillerData, openTraillerModal } = useTraillerModal()
    
    const handleSelect = () => {
        openTraillerModal()
        setTraillerData(film)
    }

    return (
        <div className="group" onClick={handleSelect}>
            <div className="relative overflow-hidden cursor-grab">
                <Image
                    src={film?.thumbnailUrl}
                    alt={film?.title}
                    width={280}
                    height={180}
                    className="w-[160px] h-[120px] md:w-full md:h-[180px] group-hover:transform group-hover:scale-110 transition-all duration-300 object-cover object-center"
                />
            </div>
            <div className="flex justify-between mt-2 px-1 lg:px-4">
                <div>
                    <div>
                        <h3 className="hidden lg:block text-sm md:text-md text-white font-bold truncate w-[70px] md:w-auto">
                            {film?.title}
                        </h3>
                    </div>
                    <div>
                        <h4 className="text-sm text-gray-600">
                            {film?.year}
                        </h4>
                    </div>
                </div>
                <div className="pr-4">
                    <div className="flex items-center gap-x-1 md:gap-x-2">
                        <div>
                            <BsStarFill className="text-sm lg:text-md text-yellow-600" />
                        </div>
                        <div className="text-sm text-white">
                            {film?.rating}.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmCard