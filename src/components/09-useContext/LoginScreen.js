import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {user,setUser}=useContext(UserContext);

    console.log(setUser);

    const handleClick = () =>{
        setUser(
            {
                id:123,
                name:"Jhona"
            }
        )
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user)}
            </pre>

            <button
             className="btn btn-warning"
             onClick={handleClick}
             >

            </button>
        </div>
    )
}
