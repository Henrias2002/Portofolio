import { useState,useEffect } from "react";

import { X } from "lucide-react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NavBar } from "./components/ui/Navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Technos from "./components/pages/Technos";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";


gsap.registerPlugin(ScrollTrigger);


export function Home(){
    const sections = ['home','about','technos','projects','contacts'];
    const [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
        if(isOpen){
            document.body.classList.add('overflow-hidden');
        } 
        else {
            document.body.classList.remove('overflow-hidden');
        }
    },[isOpen])

  
     return <div className={`min-h-screen max-w-screen relative  ${isOpen ? 'overflow-hidden':''}`}>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>

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
            
            <section id='home'>
                <Hero/>
            </section>

            <section id="about">
                <About/>
            </section>

            <section id="technos">
                <Technos/>
            </section>

            <section id="projects">
                <Projects/>
            </section>

            <section id='contact'>
                <Contact/>
            </section>
    </div>
}