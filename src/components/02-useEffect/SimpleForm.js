import React ,{useEffect,useState}from 'react'
import './Effects.css';
import { Message } from './Message';

//use effect permite realizar algun efecto secundario cuando algo suceda en los componentes
export const SimpleForm = () => {


    const  [FormState, setFormState] = useState({
        name:"",
        email:""
    });
    
    const {name,email}=FormState;

    useEffect(()=>{
       // console.log('Heya')
    },[]);

    useEffect(()=>{
        //console.log('cambio')
    },[FormState]);

    useEffect(()=>{
        //console.log('email cambio')
    },[email]);

    const handleInputChange=({target})=>{
        
        setFormState({
            ...FormState,
            [target.name]:target.value
        });
    }
    return (
        <>
            <h3>Use Effect</h3>
            <br/>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    value={name}
                    name="name"
                    autoComplete="off"
                    placeholder="tu nombre"
                    onChange={handleInputChange}

                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    value={email}
                    name="email"
                    autoComplete="off"
                    placeholder="email@email.com"
                    onChange={handleInputChange}

                />
            </div>
            {(name==='123') && <Message/>}
        </>
    )
}
