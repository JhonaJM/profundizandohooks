import {useState,useMemo} from 'react'
import { ProcesoPesado } from '../../Helpers/ProcesoPesado';
import '../02-useEffect/Effects.css';
import { useCounter } from '../Hooks/useCounter';

export const MemoHook = () => {
     const {Counter,increment} = useCounter(300)
    
      const [Show, setShow] = useState(true)
    const handleChange=()=>{
        setShow(!Show);
    }

    

   const MemoProcesado=useMemo(() =>ProcesoPesado(Counter) ,[Counter]);//memo-solo se ejecutara si cambio el valor de counter
   

    return (
        <div>
            <h1>Memo</h1>
            <hr/>

            <h1>Counter <small>{MemoProcesado}</small></h1>

            <button
                className="btn btn-outline-primary"
                onClick={increment}
            >
                +
            </button>

            <button
                onClick={ handleChange }
                className="btn btn-outline-info"
            >
                show/hide {JSON.stringify(Show)}
            </button>
        </div>
    )
}
