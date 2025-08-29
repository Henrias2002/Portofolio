import { Link } from "react-router-dom"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState,useEffect, version } from "react";
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

export function Home(){
    const sections = ['home','about','technos','projects','contacts'];
    const frontend = [tailwindImg,typescriptImg,reactImg,nextjsImg];
    const backtend = [pythonImg,djangoImg,postgresImg,mysqlImg];
    const extras = [FigmaImg,dockerImg,digitalImg,linuxImg];
    const versionControl = [gitImg,githubImg,gitlabImg]
    const [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
    if(isOpen){
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    },[isOpen])

    return <div className={`min-h-screen  ${isOpen ? 'overflow-hidden':''}`}>

            <header className="flex border-b-gray-900 shadow lg:border-b justify-between px-1 items-center h-[40px] fixed top-0 left-0 right-0 z-50 bg-gray-950  backdrop-blur-[20px]">
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

            <section id="home" className=" space-y-4 lg:space-y-8   my-[100px]  py-8 lg:flex lg:px-4 lg:items-center lg:justify-between ">
                <div className="flex flex-col items-center lg:block lg:w-[65%] space-y-2 lg:space-y-8 px-4 mx-12 ">
                    <div className="">
                        <h2 className="text-xl lg:text-4xl text-orange-300 text-center lg:text-left ">Bonjour,  je suis</h2>
                        <div className="text-4xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text ">Jérémie Henri</div>
                        <div className=" font-light text-xl ">Développeur Web fullstack</div>
                    </div>

                    <div className="flex justify-center space-x-3 lg:space-x-4 lg:w-[45%]">
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
                <div className=' lg:w-[33%] flex items-center justify-center py-2 lg:-translate-y-6'>
                    <div className=" size-[100px] lg:size-[170px] overflow-hidden rounded-full ">
                        <img src={me} alt="" className="size-[100px]  lg:size-[170px] object-cover " />
                    </div>

                </div>                
            </section>

            <section id="about" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">About</h1>
               

            </section>

            <section id="technos" className=" px-2  lg:flex  lg:justify-between lg:items-center lg:flex-wrap ">
                <div className="lg:h-[280px] p-2 lg:w-[45%] space-y-4 ">
                    <h3 className=" font-bold text-lg lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent lg:mt-5 ">SKILLS <br className="hidden lg:block" />& <br className="hidden lg:block" /> TECHNOS</h3>
                    
                    <p className="text-medium text-sm text-justify ">les technologies que j'utilise dans mon quotidien de développeur <br/>
                        pour la conception et l'implémentation de mes diverses projets.
                    </p>
                </div>
                
               
                <div className="flex flex-col items-center lg:w-[50%]  lg:grid lg:grid-cols-2 lg:items-baseline lg:justify-center mt-6 space-y-4 lg:space-x-4">
                    <div className="h-[120px] duration-200 ease-in  max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300">Frontend</div>
                        
                        <div className="flex list justify-center items-center space-x-2 px-2 ">
                            {
                                frontend.map((logo,index)=>(<img src={logo} alt={`${logo}`} className="w-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>

                    <div className=" duration-200 ease-in  max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300">Backend</div>

                        <div className="flex justify-center items-center space-x-2 px-2 list ">
                            {
                                backtend.map((logo,index)=>(<img src={logo} alt={`${logo}`} className="size-16 lg:w-1/4 item" />))
                            }
                            
                        </div>

                    </div>


                    <div className="h-[120px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300 font-bold">Version controllers</div>

                        <div className="flex justify-between items-center space-x-2 px-2 list">
                            {
                                versionControl.map((logo,index)=>(<img src={logo} alt={`${logo}`} className=" size-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>


                    <div className="h-[120px] duration-200 ease-in hover:bg-gray-700 max-w-[95%] lg:w-[500px] p-2 bg-slate-900 shadow rounded space-y-2">
                        <div className="text-left text-orange-300 font-bold">Extras</div>

                        <div className="flex justify-center items-between space-x-2 px-2 list">
                            {
                                extras.map((logo,index)=>(<img src={logo} alt={`${logo}`} className=" size-16 lg:w-1/4 item" />))
                            }
                            
                        </div>
                    </div>
                </div>

            </section>

            <section id="projects" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">Projects</h1>

            </section>

            <section id="contacts" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">Contacts</h1>

            </section>

            
    





    </div>
}