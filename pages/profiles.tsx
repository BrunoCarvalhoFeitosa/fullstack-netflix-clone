import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import useCurrentUser from "@/hooks/useCurrentUser"
import { DataUserType } from "@/@types/typings"
import { HiOutlineLockOpen } from "react-icons/hi2"
import AvatarImage from "@/public/images/avatar.jpg"
import { NetflixLogo } from "@/public/svgs/NetflixLogo"

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter()
    const { data: user }: { data: DataUserType } = useCurrentUser()

    return (
        <div className="profiles h-full">
            <Head>
                <title>Netflix | Escolha seu perfil para acessar a plataforma</title>
                <meta name="author" content="Bruno Carvalho Feitosa" />
                <meta name="description" content="Netflix | Seus perfis" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/images/fav.png" sizes="any" />
            </Head>
            <main className="w-full h-[100vh]">
            <div className="fixed top-0 left-0 w-full h-[60px] p-[18px] lg:px-8 bg-black z-30">
                    <Link href="/">
                        <NetflixLogo width={120} height={25} />
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] lg:w-[800px] h-full mx-auto">
                    <div className="mb-10 w-[80%] md:w-[60%]">
                        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
                            Quem está assistindo?
                        </h1>
                    </div>
                    <button className="outline-none" onClick={() => router.push("/application")}>
                        <div className="flex flex-col justify-center items-center gap-x-3 border-4 border-transparent">
                            <div>
                                <Image
                                    src={AvatarImage}
                                    alt="Avatar perfil"
                                    width={90}
                                    height={90}
                                    className="animate-[wiggle_1s_ease-in-out_infinite]"
                                />
                            </div>
                            <div className="mt-2">
                                <h2 className="text-sm text-center capitalize text-white">
                                    {user?.name}
                                </h2>
                            </div>
                            <div className="flex items-center gap-x-2 text-sm text-white">
                                <HiOutlineLockOpen className="text-3xl text-white" />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%] xl:w-[50%] h-16 bg-[#FF0000] rounded-t-2xl text-white">
                    <h4 className="text-4xl uppercase font-black">Perfil</h4>
                </div>
            </main>
        </div>
    )
}

export default Profiles