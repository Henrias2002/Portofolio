import { Menu } from "lucide-react";
export function NavBar({isOpen,setIsOpen}){
    const sections = ['home','about','technos','projects','contacts'];
    return  <header className="flex border-b-gray-900 shadow lg:border-b justify-between px-1 items-center h-[40px] fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-[20px]">
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
}