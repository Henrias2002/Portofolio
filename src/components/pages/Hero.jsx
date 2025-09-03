import me from '../assets/me.jpeg'

export function Hero(){
    return 
        <section id="home" className=" space-y-4 lg:space-y-8 my-[100px] py-8 lg:flex lg:px-4 lg:items-center lg:justify-between ">
            <div className="flex flex-col items-center lg:block lg:w-[65%] space-y-2 lg:space-y-8 px-4 mx-12 ">
                <div className="">
                    <h2 className="text-xl lg:text-4xl text-orange-300 text-center lg:text-left ">Bonjour,  je suis</h2>
                    <div className="text-4xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text ">Jérémie Henri</div>
                    <div className=" font-light text-xl ">Développeur Web fullstack</div>
                </div>
    
                <div className="flex justify-center space-x-3  lg:space-x-4 lg:w-[45%]">
                    <a href="#projects" className="bg-gradient-to-r from-blue-600 to-indigo-400 h-[30px] lg:h-[35px]
                         flex items-center px-2  rounded-full text-sm duration-200 ease-in-out scale-105 hover:scale-105">Mes projets</a>
                        
                    <a href="#contacts" className="bg-gradient-to-r  from-blue-600 to-indigo-400 h-[30px] lg:h-[35px]
                                            flex items-center px-2 lg:px-4 rounded text-sm relative after:flex
                                            after:absolute after:inset-[1px] after:rounded after:bg-gray-950
                                            after:text-white after:content-['contactez-moi'] after:justify-center
                                            after:items-center duration-200 hover:scale-105 font-medium">Me contacter</a>
                        
                </div>
            </div>
    
            {/* My Image */}
            <div className=' lg:w-[33%] flex items-center justify-center lg:justify-end py-2 lg:-translate-y-6'>
                <div className=" size-[100px] lg:size-[170px] overflow-hidden rounded-full ">
                    <img src={me} alt="" className="size-[100px]  lg:size-[170px] object-cover " />
                </div>
    
            </div>                
    </section>
}