import React from 'react'
import { TuduListItems } from './TuduListItems'

export const TuduList = ({tudus,handleToggle,handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">  
                        {tudus.map((tudu,i)=>(
                            <li key={tudu.id}
                            className="list-group-item"
                             >
                                <TuduListItems
                                        tudu={tudu}
                                        i={i}
                                        handleToggle={handleToggle}
                                        handleDelete={handleDelete}
                                    />
                            </li>
                            
                        ))}
                    </ul>
    )
}
