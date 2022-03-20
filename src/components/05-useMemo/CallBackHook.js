import {useCallback,useState} from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const  [state, setstate] = useState(10)
    const increment=useCallback(
        () => {
            setstate(c=>c+1);
        },
        [setstate],
    )

    return (
        <div>
            <h1>CAllbackhook {state}</h1>
            <br/>

            <ShowIncrement increment={increment} />
        </div>
    )
}
