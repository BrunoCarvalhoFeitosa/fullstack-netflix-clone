import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Slider from "react-slick"
import CountUp from "react-countup"
import { catalogue, numbers } from "@/data/home"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"
import { BsStarFill } from "react-icons/bs"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"
import EpisodeCard from "@/components/Home/EpisodeCard"
import EpisodeModal from "../EpisodeModal"
import { useEpisodePlayer } from "@/contexts/EpisodePlayerContext"

const Content = () => {
    const slider = useRef()

    const { episodePlayerLightboxOpen } = useEpisodePlayer()
    
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "70px",
        speed: 600,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
        ]
    }

    const handleNext = () => {
        if (slider) slider?.current?.slickNext()
    }

    const handlePrevious = () => {
        if (slider) slider?.current?.slickPrev()
    }

    return (
        <div id="catalogue" className="w-full pb-12">
            <div className="w-[95%] lg:w-[92%] mx-auto px-5">
                <div className="w-[125px]">
                    <Link href="/" className="outline-none">
                        <NetflixLogo width={120} height={60} />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mt-2 lg:mt-4">
                <div className="w-[95%] xl:w-[92%] px-5">
                    <div className="w-[100%]">
                        <div className="relative mb-4">
                            <h2 className="absolute top-3 -left-2 text-3xl lg:text-7xl uppercase font-thin text-[#1E1E1E] lg:text-[#141414]">
                                {catalogue.serie}
                            </h2>
                            <div className="pt-14 lg:pt-24">
                                <strong className="text-sm lg:text-lg font-thin text-white">
                                    {catalogue.data}
                                </strong>
                                <h3 className="text-3xl lg:text-5xl font-bold text-white">
                                    {catalogue.title}
                                </h3>
                                <h3 className="text-3xl lg:text-5xl font-bold text-white">
                                    {catalogue.subtitle}
                                </h3>
                            </div>
                        </div>
                        <div>
                            {catalogue.paragraph.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-sm text-white mb-3"
                                >
                                    {item.description}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 gap-x-16">
                        <div>
                            <div>
                                <h4 className="text-sm lg:text-3xl font-thin text-white">
                                    {catalogue.ratingTitle}
                                </h4>
                            </div>
                            <div className="flex items-center gap-x-1 mb-2">
                                <BsStarFill
                                    className="text-lg text-yellow-600"
                                />
                                <BsStarFill
                                    className="text-lg text-yellow-600"
                                />
                                <BsStarFill
                                    className="text-lg text-yellow-600"
                                />
                                <BsStarFill
                                    className="text-lg text-yellow-600"
                                />
                                <BsStarFill
                                    className="text-lg text-yellow-600"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className="text-sm lg:text-3xl font-thin text-white">
                                    {catalogue.creatorTitle}
                                </h4>
                            </div>
                            <div>
                                <strong className="text-sm font-normal text-white">
                                    {catalogue.creator}
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className="lg:text-3xl font-thin text-white">
                                    {catalogue.yearTitle}
                                </h4>
                            </div>
                            <div>
                                <strong className="text-sm font-normal text-white">
                                    {catalogue.year}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100%] mt-14 lg:mt-28">
                <div className="flex justify-center xl:justify-between items-center flex-wrap gap-1 lg:gap-6 [&>*:nth-child(even)]:xl:translate-y-[80px] [&>*:nth-child(odd)]:animate-wiggle opacity-50">
                    {catalogue.actors.map((actor, index) => (
                        <div key={index}>
                            <div className="casting-card cursor-pointer">
                                <Image
                                    src={actor.actorPicture}
                                    alt={actor.actorSubName}
                                    width={200}
                                    height={100}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col items-end mt-[10px] pr-2">
                                <div>
                                    <h5 className="m-0 text-sm font-bold text-white">
                                        {actor.actorSubName}
                                    </h5>
                                </div>
                                <div>
                                    <strong className="text-sm font-normal text-zinc-600">
                                        {actor.actorEpisodes}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="w-[95%] lg:w-[90%] mx-auto pt-8 xl:pt-48 px-5 mb-8">
                    <div>
                        <div className="text-sm lg:text-lg font-thin text-white ml-8 translate-y-2">
                            Assista ao
                        </div>
                        <h2 className="text-3xl lg:text-6xl font-normal text-white">
                            Trailer de
                        </h2>
                        <h2 className="text-3xl lg:text-6xl font-normal text-white">
                            cada temporada
                        </h2>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="flex absolute top-[30%] left-3 translate-y-[-30%] z-10">
                        <button onClick={handlePrevious}>
                            <GrFormPreviousLink className="text-3xl arrow-carousel" />
                        </button>
                        <button onClick={handleNext}>
                            <GrFormNextLink className="text-3xl arrow-carousel" />
                        </button>
                    </div>
                    <Slider
                        {...settings}
                        ref={(c) => (slider.current = c)}
                        className="flex gap-x-4"
                    >
                        {catalogue && catalogue.season.map((episode, index) => (
                            <EpisodeCard
                                key={index}
                                cover={episode.cover}
                                title={episode.title}
                                description={episode.description}
                                duration={episode.duration}
                                resume={episode.resume}
                                trailerLink={episode.trailerLink}
                                season={episode.season}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="w-[95%] mt-20 mx-auto px-5">
                <div className="text-white">
                    {numbers.map((number, index) => (
                        <div key={index} className="mb-6">
                            <div>
                                <h5 className="mb-2 text-xl md:text-3xl">
                                    {number.title}
                                </h5>
                            </div>
                            <div>
                                <CountUp
                                    start={0}
                                    end={Number(number.number)}
                                    duration={15}
                                    enableScrollSpy
                                    separator="."
                                />
                            </div>
                            <div>
                                <span className="font-bold text-red-600">
                                    {number.subtitle}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {episodePlayerLightboxOpen && (
                <EpisodeModal />
            )}
        </div>
    )
}

export default Content