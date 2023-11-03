import React, { useRef, useState, useEffect } from "react"
import YouTube from "react-youtube"
import { GrClose } from "react-icons/gr"
import { GoScreenFull } from "react-icons/go"
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2"
import { useEpisodePlayer } from "@/contexts/EpisodePlayerContext"

const EpisodeModal = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const playerRef = useRef<any>(null)

    const { closeEpisodePlayerOptions, trailerLink } = useEpisodePlayer()

    const handleFullscreen = () => {
        const player = playerRef.current

        if (player) {
            player.getIframe().requestFullscreen()
        }
    }

    const handlePlayPause = () => {
        const player = playerRef.current

        if (player) {
            if (isPlaying) {
                player.pauseVideo()
            } else {
                player.playVideo()
            }
        }
        setIsPlaying(!isPlaying)
    }

    const handleSpaceKey = (e: any) => {
        if (e.code === "Space") {
            e.preventDefault()
            handlePlayPause()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleSpaceKey)

        return () => {
            document.removeEventListener("keydown", handleSpaceKey)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 0,
            rel: 0,
        },
    }

    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-black/95 z-40">
            <div className="flex justify-end gap-x-2 py-2 px-4">
                <button
                    title={`${isPlaying ? "Pause" : "Play"}`}
                    className="flex justify-center items-center"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <HiOutlinePause className="flex text-white text-[28px] [&>path]:stroke-white" />
                    ) : (
                        <HiOutlinePlay className="flex text-white text-[28px] [&>path]:stroke-white" />
                    )}
                </button>
                <button title="Tela cheia" onClick={handleFullscreen}>
                    <GoScreenFull className="text-white text-2xl [&>path]:stroke-white" />
                </button>
                <button
                    title="Fechar"
                    onClick={() => {
                        closeEpisodePlayerOptions()
                        document.body.style.overflowY="auto"
                    }
                }>
                    <GrClose className="text-white text-2xl [&>path]:stroke-white" />
                </button>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[80%]">
                <YouTube
                    videoId={trailerLink}
                    opts={opts} 
                    onReady={(e) => (playerRef.current = e.target)}
                />
            </div>
        </div>
    )
}

export default EpisodeModal
