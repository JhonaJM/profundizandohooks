import {useState,useEffect,useRef} from 'react'


export const useFetch = (url) => {
    const IsMounted=useRef(true);
    const [state, setstate] = useState({loading:true,error:null,data:null});
  
    useEffect(() => {            
        return () => {
            IsMounted.current=false;
        }
    }, [])
    useEffect(()=>{
        setstate({loading:true,error:null,data:null});

        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                            
                if(IsMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                    });

                }else{
                  //  console.log("no cargo,se cerro la accion");
                }
                
            })
    },[url])

    return state;
}
