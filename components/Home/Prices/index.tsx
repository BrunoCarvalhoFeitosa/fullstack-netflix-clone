import React, { useState } from "react"
import { pricing } from "@/data/home"

const Prices = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className="bg-black lg:py-2 lg:px-12">
      <div className="">
        <div className="w-[95%] md:w-full mx-auto px-5 lg:px-0 mb-8">
          <div className="text-sm lg:text-lg font-thin text-white ml-8 translate-y-2">
            Agora
          </div>
          <h2 className="text-3xl lg:text-6xl font-normal text-white">
            Escolha o
          </h2>
          <h2 className="mb-6 text-3xl lg:text-6xl font-normal text-white">
            melhor plano para você
          </h2>
          <p className="w-full lg:w-[60%] text-white">
            Assista aos seus filmes e séries favoritas em <strong>8K</strong>, <strong>off-line</strong>, <strong>crie até 5 perfis</strong> e o melhor de tudo é que você pode pagar mensalmente, sem nenhum tipo de compromisso ou pode pagar 1 vez a cada ano.
          </p>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center gap-y-12 lg:flex-row lg:gap-x-[33px] w-[95%] md:w-full px-5 lg:px-0 mb-8">
          {pricing.map(({ title, price, list, buttonIcon, buttonText }, currentIndex) => (
            <div
              key={currentIndex}
              className="bg-white w-full lg:max-w-[388px] border h-full relative cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="700"
              onClick={() => setIndex(currentIndex)}
            >
              <div className={`
                ${index === currentIndex
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-[#000] text-white text-heading'
                } text-center py-[20px] border-b border-stroke-3 transition
              `}>
                <div className="text-[17px] font-medium">
                  {title}
                </div>
                <div className="text-[25px] font-semibold">
                  {price}
                </div>
              </div>
              <div className="px-[30px] pt-[18px] pb-[30px]">
                <div>
                  <p className="text-center mb-6 text-sm">
                    Descubra o plano ideal
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col gap-3 mb-10">
                    {list.map(({ icon, name }, index) => (
                      <li
                        key={index}
                        className="border border-r-green border-stroke-3 p-2 rounded-md flex items-center gap-4 hover:bg-stroke-3 transition"
                      >
                        <div className="flex justify-center items-center bg-black w-7 h-70 text-2xl text-white rounded-full">
                          {icon}  
                        </div>
                        <div className="text-sm">
                          {name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <button className={`
                    ${index === currentIndex
                      ? "bg-white"
                      : "border-orange"
                    } w-full h-[50px] rounded border font-medium transition relative text-left pl-5
                  `}>
                    {buttonText}
                    <div className={`
                      ${index === currentIndex
                      ? "bg-[#FF0000] text-white"
                      : "bg-black text-white"
                    } w-[50px] h-[50px] flex justify-center items-center absolute top-[-1px] right-[-1px] rounded
                    `}>
                      {buttonIcon}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prices