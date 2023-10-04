import { useRef } from "react"
import Slider from "react-slick"
import FilmCard from "@/components/Application/Films/FilmCard"
import { DataFilmsInterface } from "@/@types/typings"

interface FilmsListProps {
    films: DataFilmsInterface[];
    title: string;
}

const FilmsList: React.FC<FilmsListProps> = ({ films }) => {
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
        <div className="w-full pb-16 xl:pt-0">
            <Slider
                {...settings}
                ref={(c) => (slider.current = c)}
                className="flex gap-x-4"
            >
                {films && films.map((film, index) => (
                    <FilmCard key={index} film={film} />
                ))}
            </Slider>
        </div>
    )
}

export default FilmsList