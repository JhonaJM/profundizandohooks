//import React from 'react'
import '../02-useEffect/Effects.css';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/usefetch';
export const MultipleCustomHooks = () => {

    const {Counter,increment}= useCounter(1);
    const stateApi= useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`);

    const {loading,data}=stateApi;
    const{author,quote}=!!data && data[0];

    
    console.log(loading,data);
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                    ( 
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote" >
                            <p className="mb-0"> {quote}</p>
                            <br/>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>    
                    )
            }
           <button 
                className="btn btn-outline-info"
                 onClick={increment}>
                Siguiente quote
           </button>

            
        </div>
    )
}
