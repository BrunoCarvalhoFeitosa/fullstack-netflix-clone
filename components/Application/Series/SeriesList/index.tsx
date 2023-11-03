import { useRef } from "react"
import Slider from "react-slick"
import SerieCard from "@/components/Application/Series/SerieCard"
import { DataFilmsInterface } from "@/@types/typings"

interface SeriesListProps {
    series: DataFilmsInterface[]
    title: string
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
    const slider = useRef<Slider | null>(null)
    
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3800,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        touchMove: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="w-full -translate-y-16">
            <div className="mt-5 xl:mt-0">
                <Slider
                    {...settings}
                    ref={(c) => (slider.current = c)}
                    className="flex justify-between gap-x-2"
                >
                    {series && series.map((serie, index) => (
                        <SerieCard
                            key={index}
                            serie={serie}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SeriesList