import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log(increment);
    return (
        <button
        onClick={()=>{increment()}}
        className="btn btn-primary"
        >
           boton 
        </button>
    )
})
