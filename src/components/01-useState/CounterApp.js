import React,{useState} from 'react'
import './CounterApp.css';

export const CounterApp = () => {
  //desetructuracion del objeto
    /*const [{count1,count2}, setCount] = useState({

      count1:10,
      count2:19,
    })*/
    

    const  [state, setCount] = useState({
      count1:10,
      count2:20,
      count3:30,
      count4:40,

    })

    //sacamos el valor que queremos del state mediante desestructuracion porque ahi estan todoso los count
    const {count1,count2}=state;
   
    return (
        <>
          <h1>counter {count1}</h1> 
           <h1>counter {count2}</h1>  
          <hr/>
          <button 
          className="btn btn-primary"
          onClick={()=>{
            setCount({
              ...state,
              count1:count1+1,
            })
          }}
          >+1</button>
        </>
    )
}
