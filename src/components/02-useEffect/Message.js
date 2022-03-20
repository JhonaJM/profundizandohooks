import React,{useEffect,useState} from 'react'

export const Message = () => {

     const [coords, setcoords] = useState( {x:0 , y:0});
     const {x,y}=coords;
    useEffect(() => {
      // console.log("compoenente momntado")
        const MouseMove=(e)=>{
            const coors={
                 x:e.x,
                  y:e.y
                };
            setcoords(coors);

        }
      window.addEventListener('mousemove',MouseMove);
        return () => {
            //eliminamos el mousemove 
           window.removeEventListener('mousemove',MouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres GEnial!</h3>
            <p>
                x:{x},y:{y}
            </p>
        </div>
    )
}
