import React,{memo} from 'react'

export const Small = memo(({value}) => {

    console.log("hola de nuevo");
    return (
        <small>
            {value}
        </small>

    )
})
