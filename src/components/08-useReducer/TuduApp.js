import React,{useReducer,useEffect} from 'react';
import { useForm } from '../Hooks/useForm';
import { TuduList } from './TuduList';
import {tuduReducer} from './tuduReducer';



const init=()=>{
   return JSON.parse(localStorage.getItem('tudus')) || [];
   
    /* return [{
        id:new Date().getTime(),
        desc:'Aprender React',
        donde:false,
    }]; */
}
export const TuduApp = () => {

   const [tudus,dispatch] = useReducer(tuduReducer, [],init);
   const [{description},handleInputChange,reset]= useForm({
        description:'',
    });

    useEffect(() => {
       localStorage.setItem('tudus',JSON.stringify(tudus));
    }, [tudus]);

    //console.log(description);

    const handleSubmit = (e)=>{
        e.preventDefault();
      
        if(description.length > 1)
        {
            const newTudu={
                id:new Date().getTime(),
                desc:description,
                done:false,
            }
    
            const Action={
                type:"Add",
                payload:newTudu,
            }
    
            dispatch(Action);
            reset();
        }
        
    }
    const handleDelete = (tuduId) =>{
        console.log(tuduId);
        const Action={
            type:"Delete",
            payload:tuduId,
        }
        dispatch(Action);
    }

    const handleToggle=(tuduId)=>{        
        const Action={
            type:"Toggle",
            payload:tuduId,
        }
        dispatch(Action);
    }

    return (
        <div>
            <h1>Tudu App ({tudus.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TuduList 
                        tudus={tudus}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                   <h4>Agregar Tudu</h4>
                   <hr/>
                   <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            onChange={handleInputChange}
                            />
                            <br/>
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-1 btn-block "
                               
                                >
                                Agregar
                            </button>
                   </form>
                </div>
            </div>
        </div>
    )
}
