const Hero = () => {
    const scrollToContent = () => {
        const content = document.querySelector('#catalogue')

        if (content) {
            content.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <div className="w-full h-[30vh] md:h-[45vh] xl:h-[100vh] bg-[url('/images/hero-bg.jpeg')] bg-cover bg-no-repeat">
            <div
                className="w-full h-full bg-gradient-to-t from-black from-20% to bg-slate-900/40 cursor-pointer"
                onClick={() => scrollToContent()}
            />
        </div>
    )
}

export default Hero