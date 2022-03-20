import React,{useContext} from 'react'
import { UserContext } from './UserContext';
export const AboutScreen = () => {
    const {user,setUser}=useContext(UserContext);

    console.log(setUser);

    const handleClick = () =>{
        setUser({});
    }
    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user)}
            </pre>

            <button 
                className="btn btn-primary"
                onClick={handleClick}
                >Log out</button>
        </div>
    )
}
