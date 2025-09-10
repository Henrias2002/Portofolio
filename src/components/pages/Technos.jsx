import {frontend,backend,extras,versionControl,projects} from '../../utils'

function Technos(){
    return (
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
    )
}
export default Technos;