import { Link } from "react-router-dom"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState,useEffect } from "react";


export function Home(){
    const sections = ['home','about','projects','contacts'];
    const [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
    if(isOpen){
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    },[isOpen])

    return <div className={`min-h-screen ${isOpen ? 'overflow-hidden':''}`}>

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

            <section id="home" className="h-[300px] space-y-8 my-[100px]  py-8 items-center">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl lg:text-2xl text-orange-300 ">Bonjour,  je suis</h2>
                    <div className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text ">Jérémie Henri</div>
                    <div className=" font-light text-xl ">Développeur Web fullstack</div>
                </div>

                <div className="flex justify-center space-x-3 lg:space-x-4">
                    <a href="#" className="bg-gradient-to-r from-blue-600 to-indigo-400 h-[30px] lg:h-[35px]
                     flex items-center px-2 lg:px-4 rounded-full text-sm duration-200 ease-in-out hover:scale-105">Voir les projets</a>
                    
                    <a href="#" className="bg-gradient-to-r  from-blue-600 to-indigo-400 h-[30px]lg:h-[35px]
                                        flex items-center px-2 lg:px-4 rounded text-sm relative after:flex
                                        after:absolute after:inset-[1px] after:rounded after:bg-gray-950
                                        after:text-white after:content-['contactez-moi'] after:justify-center
                                        after:items-center duration-200 hover:scale-105 font-medium">Me contacter</a>
                    
                </div>
                
            </section>

            <section id="about" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">About</h1>

            </section>

            <section id="projects" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">Projects</h1>

            </section>

            <section id="contacts" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">Contacts</h1>

            </section>

            
    





    </div>
}