import { Menu } from "lucide-react";
import { X } from "lucide-react"
import { useState,useEffect, version } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {frontend,backend,extras,versionControl,projects} from './utils'
import { InstagramButton,TwitterButton,LinkedInButton,GithubButton,DownloadButton } from "./components/ui/Buttons";
import devImg from './assets/dev.png';
import me from './assets/me.jpeg'

gsap.registerPlugin(ScrollTrigger);


export function Home(){
    const sections = ['home','about','technos','projects','contacts'];
    const [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
    if(isOpen){
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    },[isOpen])

  
     return <div className={`min-h-screen max-w-screen relative  ${isOpen ? 'overflow-hidden':''}`}>
            <header className="flex border-b-gray-900 shadow lg:border-b justify-between px-1 items-center h-[40px] fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-[20px]">
                <div className="font-bold lg:text-lg  ">jeremie.<span className="text-blue-600 font-medium animate-pulse ">Henri</span></div>

                <nav className="w-1/2 pr-2 hidden lg:block">
                    <ul className="flex justify-between text-sm space-x-2 w-full capitalize">
                        {
                            sections.map((section,index)=>(<li key={index}><a href={`#${section}`} className="duration-200 ease-in-out shadow-lg hover:drop-shadow-[0_0_20px_#00acee] hover:text-[#00acee] hover:tracking-wider font-medium ">{section}</a></li>))
                        }
                    </ul>
                </nav>

                <button className={`size-6 cursor-pointer lg:hidden ${isOpen?'hidden':''}`}  onClick={()=>setIsOpen(!isOpen)} > <Menu /></button>
            </header>

            <div className={`fixed duration-300 ease transition-all lg:hidden  ease-in-out w-full h-full ${isOpen?'translate-y-0 z-50':'-translate-y-[500px] -z-10'}  bg-gray-800/400 backdrop-blur-lg`}>
                <div className="relative ">
                    <button className={`size-6 cursor-pointer lg:hidden ${isOpen?'opacity-100':'opacity-0'}`}  onClick={()=>setIsOpen(!isOpen)} > <X className="absolute right-1 top-2 cursor-pointer"/></button>
                </div>

                <ul className="mt-6 w-1/2  h-1/2 absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center space-y-6 items-center ">
                    {
                        sections.map((section,index)=>(<li key={index}><a href={`#${section}`} onClick={()=>setIsOpen(!isOpen)} className="duration-100 ease-in-out font-medium hover:text-blue-600 capitalize">{section}</a></li>))
                    }
                </ul>
            </div>
            

            <section id="home" className=" space-y-4 flex flex-col-reverse items-center lg:space-y-8 my-[50px] lg:my-[100px] py-8 lg:flex lg:flex-row lg:px-4 lg:items-center lg:justify-center ">
                <div className="flex flex-col items-center lg:bloc space-y-2 lg:space-y-8 px-4 mx-12 ">
                    <div className="">
                        <h2 className="text-lg lg:text-4xl lg:pl-1text-center lg:text-left ">Bonjour,  je suis</h2>
                        
                        <div className="text-2xl text-center lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text ">Jérémie Henri</div>
                        
                        <div className=" font-light text-lg text-center lg:text-left ">Développeur Web fullstack</div>

                        <div className='flex lg:inline-flex gap-2 items-center flex-col md:flex-row py-3'>
                            
                            <div className="flex px-2 gap-3 justify-center items-center">
                                <DownloadButton/>
                                
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
            </section>

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

            <section id="technos" className=" px-4 mb-[50px]  lg:flex  lg:justify-center lg:items-center lg:flex-wrap ">
                <div className="lg:h-[280px] p-2 lg:w-[45%] space-y-4 ">
                    <h3 className=" font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent text-center lg:text-left lg:mt-5 ">SKILLS <br className="hidden lg:block" />& <br className="hidden lg:block" /> TECHNOS</h3>
                    
                    <p className="font-light text-xs lg:text-sm text-center lg:text-justify ">les technologies que j'utilise dans mon quotidien de développeur <br/>
                        pour la conception et l'implémentation de mes diverses projets.
                    </p>
                </div>
                
               
                <div className="flex flex-col pl-4 lg:w-[50%] lg:grid lg:grid-cols-2  md:grid md:grid-cols-4 md:items-baseline lg:justify-center mt-6 space-y-4 lg:space-x-4">
                    <div className="lg:h-[110px] duration-200 ease-in  max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-sm font-light">Frontend</div>
                        
                        <div className="flex list justify-center items-center space-x-2 px-2 ">
                            {
                                frontend.map((element,index)=>(<a href={element.url} key={index} target="blank" className={` w-[20%] max-w-16 relative lg:w-1/4 item text-xs`}>
                                    <img src={element.image} alt={`${element.name}`}  /></a>))
                            }
                            
                        </div>
                    </div>

                    <div className="lg:h-[110px] duration-200 ease-in  w-[95%] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-sm font-light">Backend</div>

                        <div className="flex justify-center items-center space-x-2 px-2 list ">
                            {
                                backend.map((element,index)=>(<a href={element.url} key={index} target="blank" className={` w-[20%] max-w-16 relative lg:w-1/4 item text-xs`}>
                                    <img src={element.image} alt={`${element.name}`}  /></a>))
                            }
                            
                            
                        </div>
                    </div>


                    <div className="lg:h-[110px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-sm font-light">Version control & collabs</div>

                        <div className="flex justify-between items-center space-x-2 px-2 list">
                            {
                                versionControl.map((element,index)=>(<a href={element.url} key={index} target="blank" className={` w-[20%] max-w-16 relative lg:w-1/4 item text-xs`}>
                                    <img src={element.image} alt={`${element.name}`}  /></a>))
                            }
                            
                        </div>
                    </div>


                    <div className=" lg:h-[110px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-sm font-light">Extras</div>

                        <div className="flex justify-center items-between space-x-2 px-2 list">
                            {
                                extras.map((element,index)=>(<a href={element.url} key={index} target="blank" className={` w-[20%] max-w-16 relative lg:w-1/4 item text-xs`}>
                                    <img src={element.image} alt={`${element.name}`}  /></a>))
                            }
                            
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="px-2 space-y-4 mb-[50px] py-5 md:relative ">
                <h3 className="font-bold text-lg text-center lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent mb-12 ">My projects</h3>

                <div className={`grid grid-cols-1 place-items-center md:grid md:mx-6 md:grid-cols-2 md:place-items-center lg:flex lg:justify-center lg:items-center md:gap-4 space-y-4 md:space-y-0 px-2  `}>
                    {
                        projects.map((project,index)=>(
                            <div key={index} className={`bg-slate-900  h-[120px] w-[90%] max-w-sm md:w-[350px] lg:h-[200px] rounded hover:scale-105 break-inside-avoid group relative overflow-hidden cursor-pointer `}>
                                <img src={project.image} alt={project.name} className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 " />

                                <div className="absolute inset-0 p-4 flex items-end opacity-0 bg-black/20 transform-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-sm text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300  ">{project.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section id="contacts" className="p-4  ">
                        <form className=" flex flex-col justify-center space-y-6 shadow-xl h-[300px] relative p-2 md:w-[350px] bg-slate-900/40 backdrop-blur-[10px] mx-auto rounded-lg ">
                            <h3 className="text-xl text-center font-bold">Get in touch</h3>

                            <input type="email" placeholder='Your email' className="border border-gray-500 rounded px-1 pt-[1px]" />
                            <textarea name="contact-area" placeholder="your message" className="border border-gray-500  p-1 h-[100px]"></textarea>
                        
                            <button className="bg-gradient-to-r from-blue-600 to-blue-400 inline-block rounded cursor-pointer font-semibold text-sm py-1
                             transition-scale duration-200 ease-in hover:scale-x-105 w-[95%] mx-auto ">Send</button>
                        </form>
            </section>
    </div>
}