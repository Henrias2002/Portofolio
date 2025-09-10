import devImg from '../../assets/dev.png';
function About(){
    return (
        <section id="about" className="px-2 space-y-4 mb-[50px] lg:flex lg:flex-row lg:justify-center lg:space-x-12" >
            <div className="space-y-4">
                <h3 className=" font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent text-center lg:text-left lg:mt-5 ">ABOUT ME </h3>
                <p className=" font-light text-xs lg:text-sm text-center lg:text-justify "> Je suis développeur web, avec plus de 3 ans d'expérience ainsi qu'une 
                                                                    <br className="hidden lg:block" /> maitrise des technologies web (frontend et backend) modernes.
                </p>
            </div>

            <div className="flex justify-center items-center py-2 lg:-translate-y-6">
                <div className=" hidden lg:block   lg:size-[180px] rounded-full overflow-hidden"><img src={devImg} alt="a dev image" /></div>
            </div>
        </section>
    )

}
export default About;