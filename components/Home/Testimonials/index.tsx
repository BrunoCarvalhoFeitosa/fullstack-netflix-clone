import { useRef } from "react"
import Slider from "react-slick"
import { testimonials } from "@/data/home"
import { BsStarFill } from "react-icons/bs"

const Testimonials = () => {
    const slider = useRef<Slider | null>(null)
    
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        touchMove: true,
        arrows: false,
        vertical: true,
    }

    return (
        <div className="w-full py-14 xl:py-28 bg-black">
            <div className="flex flex-col xl:flex-row items-center w-[95%] px-5 mx-auto">
                <div className="w-[100%] xl:w-[60%]">
                <div className="text-sm lg:text-lg font-thin text-white ml-8 translate-y-2">
                    Veja o que
                </div>
                <h2 className="text-3xl lg:text-6xl font-normal text-white">
                    Os clientes acham
                </h2>
                <h2 className="mb-6 text-3xl lg:text-6xl font-normal text-white">
                    dos serviços <strong className="text-red-600 uppercase text-3xl lg:text-[55px]">Netflix</strong>
                </h2>
                </div>
                <Slider
                    {...settings}
                    ref={slider}
                    className="flex justify-between items-center w-[100%] xl:w-[40%]"
                >
                    {testimonials.map((item, index) => (
                        <div className="mb-4 cursor-grab" key={index}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-x-1">
                                    <BsStarFill className="text-md text-yellow-400" />
                                    <BsStarFill className="text-md text-yellow-400" />
                                    <BsStarFill className="text-md text-yellow-400" />
                                    <BsStarFill className="text-md text-yellow-400" />
                                    <BsStarFill className="text-md text-yellow-400" />
                                </div>
                                <div>
                                    <h5 className="text-white">
                                        {item.userName}
                                    </h5>
                                </div>
                            </div>
                            <div className="pt-6 font-bold text-white">
                                {item.title}
                            </div>
                            <div className="pt-1 text-sm text-white">
                                {item.description}
                            </div>
                            <div className="mt-4 font-bold text-zinc-900">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


export default Testimonials