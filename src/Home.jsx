import { Link } from "react-router-dom"

export function Home(){
    const sections = ['home','about','projects','contacts'];

    return <div className="min-h-screen">

            <header className="flex border-b-gray-900 shadow border-b justify-between p-2 fixed top-0 left-0 right-0 z-50  backdrop-blur-[20px]">
                <div>Jérémie Henri</div>

                <nav className="w-2/3 ">
                    <ul className="flex justify-around w-full">
                        {
                            sections.map((section,index)=>(<li key={index}><a href={`#${section}`}>{section}</a></li>))
                        }
                      
                    </ul>
                </nav>
            </header>


            <section id="home" className="h-[500px] flex justify-center items-center">
                <h1 className="text-center ">Home</h1>

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