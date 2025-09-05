import { Link } from "react-router-dom"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState,useEffect, version } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import me from './assets/me.jpeg'

import reactImg from "./assets/React.png"
import tailwindImg from "./assets/Tailwindcss.png"
import nextjsImg from "./assets/Nextjs.png"
import typescriptImg from "./assets/Typescript.png"
import gitImg from "./assets/Git.png"
import djangoImg from "./assets/Django.png"
import pythonImg from "./assets/Python.png"
import githubImg from "./assets/GitHub.png"
import postgresImg from "./assets/PostgresSQL.png"
import mysqlImg from "./assets/MySQL.png"
import linuxImg from "./assets/Linux.png"
import FigmaImg from './assets/Figma.png';
import dockerImg from './assets/Docker.png';
import gitlabImg from './assets/GitLab.png';
import digitalImg from './assets/DigitalOcean.png';

import devImg from './assets/dev.png';

import dashboardImg from './assets/Dashboard.png'
import marketplaceImg from './assets/Marketplace.png'
import blogImg from './assets/TradingGeek.png'
import restaurantImg from './assets/Restaurant.png'

gsap.registerPlugin(ScrollTrigger);

export function Home(){
    const sections = ['home','about','technos','projects','contacts'];
    const frontend = [tailwindImg,typescriptImg,reactImg,nextjsImg];
    const backtend = [pythonImg,djangoImg,postgresImg,mysqlImg];
    const extras = [FigmaImg,dockerImg,digitalImg,linuxImg];
    const versionControl = [gitImg,githubImg,gitlabImg]

    const projects = [
        {
            name:'An e-commerce marketplace',
            image:marketplaceImg
        },
        {   
            name:'A dashboard for an e-commerce shop ',
            image:dashboardImg
        },
        {
            name:'A trading blog powered by AI',
            image:blogImg
        },
        {
            name:'A modern restaurant website',
            image:restaurantImg
        },
        
    ]
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
                <div className="font-bold lg:text-lg  ">jeremie.<span className="text-blue-600 font-medium animate-pulse ">henri</span></div>

                <nav className="w-1/2 pr-2 hidden lg:block">
                    <ul className="flex justify-between text-sm space-x-2 w-full capitalize">
                        {
                            sections.map((section,index)=>(<li key={index}><a href={`#${section}`} className="hover:drop-shadow-[0px_0px_15px] hover:drop-shadow-indigo-300 duration-100 font-medium ease-in-out">{section}</a></li>))
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
            

            <section id="home" className=" space-y-4 lg:space-y-8 my-[100px] py-8 lg:flex lg:px-4 lg:items-center lg:justify-between ">
                <div className='  flex items-center justify-center lg:hidden py-2'>
                    <div className=" size-[100px] lg:size-[170px] overflow-hidden rounded-full ">
                        <img src={me} alt="" className="size-[100px]  lg:size-[170px] object-cover " />
                    </div>
                </div>     
                
                
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
                <div className=' hidden lg:w-[33%] lg:flex items-center justify-center lg:justify-end py-2 lg:-translate-y-6'>
                    <div className=" size-[100px] lg:size-[170px] overflow-hidden rounded-full ">
                        <img src={me} alt="" className="size-[100px]  lg:size-[170px] object-cover " />
                    </div>

                </div>                
            </section>

            <section id="about" className="px-2 space-y-4 mb-[50px] lg:flex lg:flex-row lg:justify-center lg:space-x-5" >
                <div className=" ">
                    <h3 className=" font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent lg:mt-5 ">À Propos de moi </h3>
                    <p className="text-medium text-xs lg:text-sm text-justify ">Développeur avec plus de 3 ans de d'expérience ainsi qu'une 
                                                                <br className="hidden lg:block" /> maitrise des technologies web frontend et backend modernes
                    </p>
                    
                </div>

                <div className="flex justify-center items-center py-2 lg:-translate-y-6">
                    <div className=" hidden lg:block   lg:size-[250px] rounded-full overflow-hidden"><img src={devImg} alt="a dev image" /></div>
                </div>
            </section>

            <section id="technos" className=" px-2 mb-[50px]  lg:flex  lg:justify-between lg:items-center lg:flex-wrap ">
                <div className="lg:h-[280px] p-2 lg:w-[45%] space-y-4 ">
                    <h3 className=" font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent lg:mt-5 ">SKILLS <br className="hidden lg:block" />& <br className="hidden lg:block" /> TECHNOS</h3>
                    
                    <p className="text-medium text-xs lg:text-sm text-justify ">les technologies que j'utilise dans mon quotidien de développeur <br/>
                        pour la conception et l'implémentation de mes diverses projets.
                    </p>
                </div>
                
               
                <div className="flex flex-col pl-4 lg:w-[50%] lg:grid lg:grid-cols-2  md:grid md:grid-cols-4 md:items-baseline lg:justify-center mt-6 space-y-4 lg:space-x-4">
                    <div className="lg:h-[120px] duration-200 ease-in  max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300">Frontend</div>
                        
                        <div className="flex list justify-center items-center space-x-2 px-2 ">
                            {
                                frontend.map((logo,index)=>(<img src={logo} alt={`${logo}`} className=" w-[20%] max-w-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>

                    <div className="lg:h-[120px] duration-200 ease-in  w-[95%] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300">Backend</div>

                        <div className="flex justify-center items-center space-x-2 px-2 list ">
                            {
                                backtend.map((logo,index)=>(<img src={logo} alt={`${logo}`} className="w-[20%] max-w-16 lg:w-1/4 item" />))
                            }
                            
                        </div>

                    </div>


                    <div className="lg:h-[120px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300 font-bold">Version controllers</div>

                        <div className="flex justify-between items-center space-x-2 px-2 list">
                            {
                                versionControl.map((logo,index)=>(<img src={logo} alt={`${logo}`} className=" w-[20%] max-w-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>


                    <div className=" lg:h-[120px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300 font-bold">Extras</div>

                        <div className="flex justify-center items-between space-x-2 px-2 list">
                            {
                                extras.map((logo,index)=>(<img src={logo} alt={`${logo}`} className=" w-[20%] max-w-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>
                </div>

            </section>

            <section id="projects" className="px-2 space-y-4 mb-[50px] py-5 md:relative ">
                <h3 className="font-bold text-lg text-center lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent mb-12 lg:mb-24">My projects</h3>

                <div className={`grid grid-cols-1 place-items-center md:grid md:mx-6 md:grid-cols-2 md:place-items-center lg:flex lg:justify-center lg:items-center md:gap-4 space-y-4 md:space-y-0 px-2  `}>
                    {
                        projects.map((project,index)=>(
                            <div key={index} className={`bg-slate-900  h-[120px] w-[90%] max-w-sm md:w-[350px] lg:h-[230px] rounded hover:scale-105 break-inside-avoid group relative overflow-hidden cursor-pointer `}>
                                <img src={project.image} alt={project.name} className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 " />

                                <div className="absolute inset-0 p-4 flex items-end opacity-0 bg-black/20 transform-opacity duration-300 group-hover:opacity-100">
                                    <p className="text-sm text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300  ">{project.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            <section id="contacts" className="h-[500px] flex justify-center items-center">
                <h3 className="font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent lg:mt-5">Contacts</h3>

            </section>

            
    





    </div>
}