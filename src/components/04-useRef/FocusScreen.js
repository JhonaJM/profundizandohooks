import React, { useRef } from 'react'
import '../02-useEffect/Effects.css';

export const FocusScreen = () => {

    const InputRef = useRef();

   // console.log(ref);
    const handleClick=()=>{

        InputRef.current.select();
     //   document.querySelector('input').select();

    }

    return (
        <>
          <h1>FocusScreen</h1>  
          <hr/>
          <input 
                ref={InputRef}
                type="text"
                className="form-control"
                placeholder="Nombre"

            />
            
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    )
}
