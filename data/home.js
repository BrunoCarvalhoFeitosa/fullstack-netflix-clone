import { BsCheck, BsChevronRight } from "react-icons/bs"
import MikeImage from "@/public/images/actors/mike.jpg"
import WillByersImage from "@/public/images/actors/will-byers.jpg"
import DustinImage from "@/public/images/actors/dustin.jpg"
import ElevenImage from "@/public/images/actors/eleven.jpg"
import MaxImage from "@/public/images/actors/max.jpg"
import JimImage from "@/public/images/actors/jim.jpg"
import Cover from "@/public/images/actors/dustin.jpg"

export const catalogue = {
    serie: "Stranger Things",
    title: "As coisas estão",
    subtitle: "ficando estranhas",
    data: "Novembro 6, 1983",
    paragraph: [
        { description: "Situada no início dos anos 1980, Stranger Things se passa na cidade rural fictícia de Hawkins, Indiana. Como fachada, o laboratório da região realizava experimentos científicos para o Departamento de Energia Americano, quando na realidade, os pesquisadores ali investiram em experimentos com o paranormal e o sobrenatural, incluindo o uso de cobaias humanas." },
        { description: "Não intencionalmente, eles criaram um portal para uma dimensão alternativa conhecida como Mundo Invertido, o que iria impactar a vida dos residentes da pequena cidade. Em 1983, quando Will Byers (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo." },
        { description: "Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo em direção aos experimentos secretos do governo e a Eleven (Millie Bobby Brown), uma peculiar menina perdida na floresta. Assim como as crianças, a mãe Joyce Byers (Winona Ryder) está determinada e fará o impossível para rever o filho." },
    ],
    ratingTitle: "Avaliação geral",
    creatorTitle: "Criação",
    creator: "The Duffer Brothers",
    yearTitle: "Estréia",
    year: "2016",
    classification: "15+",
    gender: "Ficção científica | Drama | Terror",
    actors: [
        {
          actorRealName: "Finn Wolfhard",
          actorSubName: "Mike Wheeler",
          actorPicture: MikeImage,
          actorEpisodes: "33 episódios"
        },
        {
          actorRealName: "Sadie Sink",
          actorSubName: "Max",
          actorPicture: MaxImage,
          actorEpisodes: "32 episódios"
        },
        {
          actorRealName: "Gaten Matarazzo",
          actorSubName: "Dustin",
          actorPicture: DustinImage,
          actorEpisodes: "34 episódios"
        },
        {
          actorRealName: "Millie Bobby Brown",
          actorSubName: "Eleven",
          actorPicture: ElevenImage,
          actorEpisodes: "31 episódios"
        },
        {
          actorRealName: "Noah Schnapp",
          actorSubName: "Will Byers",
          actorPicture: WillByersImage,
          actorEpisodes: "29 episódios"
        },
        {
          actorRealName: "David Harbour",
          actorSubName: "Jim Hopper",
          actorPicture: JimImage,
          actorEpisodes: "27 episódios"
        },
    ],
    season: [
      {
        cover: Cover,
        resume: "Resumo da temporada 1",
        duration: "15/07/2016",
        title: "O começo de tudo",
        description: "Em 6 de Novembro, 1983 na pequena cidade de Hawkins, Indiana, o garoto de 12 anos, Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will enquanto o chefe de polícia Jim Hopper começa a investigar, e assim fazem também os amigos de Will: Dustin, Mike e Lucas.",
        trailerLink: "czgku_aEGoc",
        season: 1
      },
      {
        cover: Cover,
        resume: "Resumo da temporada 2",
        duration: "27/10/2017",
        title: "De volta ao mundo normal",
        description: "A segunda temporada se passa em 1984, Will está de volta ao mundo normal, Nancy e Jonathan estão juntos tentando sobreviver, e todos os amigos sentem falta de Onze, que se sacrificou para salvá-los. Estão todos seguindo em frente, porém Will ainda está de alguma forma conectado ao mundo invertido.",
        trailerLink: "8iZVBwz8XTA",
        season: 2
      },
      {
        cover: Cover,
        resume: "Resumo da temporada 3",
        duration: "04/07/2019",
        title: "O Devorador de Mentes",
        description: "Will (Noah Scnapp) voltou a sentir a presença do Devorador de Mentes nas proximidades e depois descobrimos que ele começou a possuir cidadãos de Hawkins e o primeiro foi Billy. Desconfiadas, as meninas chamam Lucas (Caleb McLaughlin) e Mike para ajudarem na investigação.",
        trailerLink: "T1FYNYnqBgU",
        season: 3
      },
      {
        cover: Cover,
        resume: "Resumo da temporada 4 Vol.1",
        duration: "27/05/2022",
        title: "Prisioneiro em outra dimensão",
        description: "Billy (Drake Montgomery) morre ao se sacrificar para salvar a irmã e os amigos na temporada anterior. Como resultado, Max (Sadie Sink) se fecha e para tentar superar tudo. Para fechar a máquina que daria passagem ao Mundo Invertido, Hopper (David Harbour) aparentemente explode ou fica preso do outro lado da dimensão.",
        trailerLink: "3tOqfModfL0",
        season: 4.1
      },
      {
        cover: Cover,
        resume: "Resumo da temporada 4 Vol.2",
        duration: "2024",
        title: "O fim de tudo",
        description: "Brenner, está tentando recuperar seus poderes. Seus amigos e ele precisam de todas as formas possíveis tentar escapar do Vecna, proteger aqueles deste ser cuja identidade está ligada à origem de Eleven e a assassinatos cometidos na cidade no passado, e tentar derrotá-lo.",
        trailerLink: "otutSrxYpa4",
        season: 4.2
      },
    ]
}

export const pricing = [
  {
    title: "Plano Mensal",
    price: "R$18.90",
    list: [
      {
        icon: <BsCheck />,
        name: "Pague conforme você usar",
      },
      {
        icon: <BsCheck />,
        name: "Acesso a toda plataforma",
      },
      {
        icon: <BsCheck />,
        name: "Crie seu perfil",
      },
    ],
    buttonText: "Assinar este plano",
    buttonIcon: <BsChevronRight />,
    delay: "600",
  },
  {
    title: "Plano Semestral",
    price: "R$109.90",
    list: [
      {
        icon: <BsCheck />,
        name: "Acesso a toda plataforma",
      },
      {
        icon: <BsCheck />,
        name: "Assista em 4K",
      },
      {
        icon: <BsCheck />,
        name: "Crie até 3 perfis",
      },
    ],
    buttonText: "Assinar este plano",
    buttonIcon: <BsChevronRight />,
    delay: "800",
  },
  {
    title: "Plano Anual",
    price: "R$219.90",
    list: [
      {
        icon: <BsCheck />,
        name: "Acesso a toda plataforma",
      },
      {
        icon: <BsCheck />,
        name: "Assista em 8K",
      },
      {
        icon: <BsCheck />,
        name: "Assista off-line",
      },
      {
        icon: <BsCheck />,
        name: "Crie até 5 perfis",
      },
    ],
    buttonText: "Assinar este plano",
    buttonIcon: <BsChevronRight />,
    delay: "900",
  },
]

export const numbers = [
  {
    title: "Temporadas",
    subtitle: "produzidas",
    number: "4"
  },
  {
    title: "Episódios",
    subtitle: "filmados",
    number: "42"
  },
  {
    title: "Elenco",
    subtitle: "atores",
    number: "50"
  },
  {
    title: "Minutos assistidos",
    subtitle: "bilhões",
    number: "52000000000"
  },
  {
    title: "Média de idade do público",
    subtitle: "anos",
    number: "37"
  },
  {
    title: "Indicações à prêmios",
    subtitle: "prêmios",
    number: "304"
  },
  {
    title: "Prêmios vencidos",
    subtitle: "vitórias",
    number: "107"
  },
]