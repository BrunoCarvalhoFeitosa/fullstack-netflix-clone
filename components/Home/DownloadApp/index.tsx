import Image from "next/image"
import DeviceImage from "@/public/images/stranger-things-device-cover.jpg"
import CoverImage from "@/public/images/stranger-things-device-box.png"
import AnimatedImage from "@/public/images/stranger-things-animated-device-download.gif"

const DownloadApp = () => (
    <div className="pt-6 pb-0 lg:pb-16 bg-black">
        <div className="flex flex-col xl:flex-row justify-center gap-x-8 lg:w-[92%] mx-auto">
            <div className="order-2 xl:order-none relative w-[92%] md:w-[50%] xl:w-auto mx-auto mb-6 lg:mb-0 lg:flex-1">
                <div className="flex justify-center">
                    <Image
                        src={DeviceImage}
                        alt="Imagem smartphone Stranger Things"
                        width={270}
                        height={200}
                    />
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] top-48 py-4 px-4 flex justify-center items-center gap-x-6 w-full rounded-lg bg-black border-2 border-gray-500">
                    <Image
                        src={CoverImage}
                        alt="Imagem capa Stranger Things"
                        width={80}
                        height={40}
                    />
                    <div className="">
                        <h4 className="text-md font-semibold text-white">
                            Stranger Things
                        </h4>
                        <p className="text-[11px] text-blue-400">
                            Download em andamento
                        </p>
                    </div>
                    <div>
                        <Image
                            src={AnimatedImage}
                            alt="Loader"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
            <div className="order-1 xl:order-none mb-6 xl:mb-0 w-[95%] mx-auto px-5 xl:w-[65%]">
                <div>
                    <h4 className="w-full lg:w-[70%] mx-auto mb-6 text-4xl lg:text-6xl text-white text-center">
                        Baixe séries para assistir off-line
                    </h4>
                    <p className="w-full md:w-[80%] mx-auto first-letter:text-4xl first-letter:text-[#FF0000] text-sm text-center text-white mb-3">
                        Na Netflix, você tem milhares de filmes e seriados para assistir. 
                        Levamos a sério a fidelidade, qualidade e acessibilidade do nosso produto, por isso
                        oferecemos um serviço completo, com um bom preço, onde você possa assistir com a melhor qualidade,
                        de qualquer hora, de qualquer lugar e com qualquer pessoa.
                    </p>
                    <p className="w-full md:w-[80%] mx-auto first-letter:text-4xl first-letter:text-[#FF0000] text-sm text-center text-white mb-3">
                        Assista através da sua smart TV, computador, notebook, tablet, smartphone, Xbox e 
                        até no seu carro. Garantimos a qualidade de até 8K, claramente para os dispositivos que
                        suportam a tecnologia e além de tudo isso, dependendo do plano escolhido, você pode assistir
                        off-line, sem a necessidade de internet.
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default DownloadApp