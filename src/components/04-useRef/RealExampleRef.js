import React, { useState } from 'react'
import '../02-useEffect/Effects.css';
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
export const RealExampleRef = () => {

     const [show, setshow] = useState(false);

    return (
        <div>
            <h1>Reaf example ref</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}       

            <button
                className="btn btn-secondary mt-3"
                onClick={()=>{
                    setshow(!show);
                }}
            >
                show/hide
            </button>
        </div>
    )
}
