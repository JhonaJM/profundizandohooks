import React, { useEffect } from 'react'
import './Effects.css';
import {useForm} from "../Hooks/useForm";

export const FormWithCustomHooks = () => {

    const  [FormValues, handleInputChange] = useForm({
        name:"",
        email:"",
        password:""
    });
      
    const {name,email,password}=FormValues;  
    useEffect(() => {
        console.log("cambio el email");
    }, [email])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(FormValues);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>FormWithCustomHooks</h3>
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

            <div className="form-group">
                <input 
                    type="password"
                    className="form-control"
                    value={password}
                    name="password"
                    placeholder="*******"
                    onChange={handleInputChange}

                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
