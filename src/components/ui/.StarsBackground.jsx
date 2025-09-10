import { useState,useEffect } from "react";

function StarsBackground(){
    const [stars,setStars] = useState([]);
    const [meteors,setMeteors] = useState([])

    function generateStars(){
        const starsNumber = Math.floor(window.innerWidth*window.innerHeight/10000);

        const newStars = [];
        for(let i=0;i<starsNumber;i++){
            newStars.push(
                {
                    id:i,
                    size:Math.random() * 3 + 1,
                    x:Math.random() * 100,
                    y:Math.random() * 100,
                    opacity:Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2
                }
            )
         }
        
        setStars(newStars)

    }

    function generateMeteors(){
        const meteorNumber = 4;

        const newMeteors = [];
        for(let i=0;i<meteorNumber;i++){
            newMeteors.push(
                {
                    id:i,
                    size:Math.random() * 3 + 1 ,
                    x:Math.random() * 100 ,
                    y:Math.random() * 40 ,
                    delay:Math.random() * 15,
                    animationDuration: Math.random() * 2 + 3
                }
            )
         }
        
        setMeteors(newMeteors)

    }

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize = ()=>{
            generateStars()
        }

        window.addEventListener('resize',handleResize)

        return () => window.removeEventListener('resize',handleResize);
    },[])
    return <div className='fixed inset-0 overflow-hidden pointer-events-none  z-0'>
        {
            stars.map(star=>(
                <div key={star.id}
                     className="star animate-pulse"
                     style={
                        {
                            width: star.size + 'px',
                            height: star.size + 'px',
                            top: star.y + '%',
                            left: star.x + '%',
                            opacity: star.opacity,
                            animationDuration:star.animationDuration + 's',
                        }
                     }
                
                />
            ))
        }

        {
            meteors.map(meteor=>(
                <div key={meteor.id}
                     className="meteor animate-meteorite"
                     style={
                        {
                            width: meteor.size * 25 + 'px',
                            height: meteor.size  + 'px',
                            top: meteor.y + '%',
                            left: meteor.x + '%',
                            animationDelay: meteor.delay,
                            animationDuration:meteor.animationDuration + 's',
                        }
                     }
                
                />
            ))
        }

    </div>
}
export default StarsBackground;