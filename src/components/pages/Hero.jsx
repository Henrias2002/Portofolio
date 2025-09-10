import me from '../../assets/me.jpeg'

import { InstagramButton,TwitterButton,LinkedInButton,GithubButton,DownloadButton } from "../ui/Buttons";
function Hero(){
    return ( 
        
        <section id="home" className=" space-y-4 flex flex-col-reverse items-center lg:space-y-8 my-[50px] lg:my-[100px] py-8 lg:flex lg:flex-row lg:px-4 lg:items-center lg:justify-center ">
            <div className="flex flex-col items-center lg:bloc space-y-2 lg:space-y-8 px-4 mx-12 ">
                <div className="">
                    <h2 className="text-lg lg:text-4xl lg:pl-1 text-center lg:text-left ">Bonjour,  je suis</h2>
                                
                    <div className="text-2xl text-center lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text ">Jérémie Henri</div>
                                
                    <div className=" font-light text-lg text-center lg:text-left ">Développeur Web fullstack</div>
        
                    <div className='flex lg:inline-flex gap-2 items-center flex-col md:flex-row py-3'>
                        <DownloadButton/>
                        <div className="flex px-2 gap-3 justify-center items-center">
                                        
        
                            <InstagramButton/>
        
                            <TwitterButton/>
        
                            <LinkedInButton/>
        
                            <GithubButton/>
                        </div>
                    </div>
                </div>
            </div>
        
                        {/* My Image */}
            <div className=' flex border-[.1px] border-gray-950 overflow-hidden items-center size-[100px] lg:size-[170px] p-[3px]  relative
                         justify-center lg:flex lg:justify-end lg:-translate-y-6 rounded-full
                         before:content-[""] before:absolute before:size-[200px] before:rotate-0
                         before:bg-[conic-gradient(transparent,transparent,transparent,#09b1f3)]
                         after:content-[""] after:absolute after:size-[200px] after:rotate-0 loader
                         after:bg-[conic-gradient(transparent,transparent,transparent,#09b1f3)]'>
        
                <div className="relative z-10 size-full flex justify-center items-center overflow-hidden rounded-full ">
                    <img src={me} alt="" className="size-full absolute lg:size-full object-cover " />
                </div>
            </div>                   
        </section>)
}
export default Hero;