import {useState} from 'react'
import '../02-useEffect/Effects.css';
import { useCounter } from '../Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
     const {Counter,increment} = useCounter(10)
    
      const [Show, setShow] = useState(true)
    const handleChange=()=>{
        setShow(!Show);
    }
    return (
        <div>
            <h1>Memo</h1>
            <hr/>

            <h1>Counter <small><Small value={Counter} /> </small></h1>

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
