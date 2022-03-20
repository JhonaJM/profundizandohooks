import React from 'react'

export const TuduListItems = ({tudu,i,handleToggle,handleDelete}) => {
    return (
        <>
            <p
                onClick={()=>handleToggle(tudu.id)}
                className={ `${ tudu.done && 'complete'}` }
                
                >
                {i+1}.{tudu.desc}</p>
            <button 
                className="btn btn-danger"
                onClick={()=>handleDelete(tudu.id)  }
                >
                    Borrar
            </button>
        </>
    )
}
