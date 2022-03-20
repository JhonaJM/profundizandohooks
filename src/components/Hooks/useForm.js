import  { useState } from 'react'

export const useForm = (initialValues={}) => {
   
  const [Values, setValues] = useState(initialValues);

  const reset = () => {
    setValues('');
}
  const handleInputChange=({target})=>{
        
        setValues({
            ...Values,
            [target.name]:target.value
        });
    }

    return [Values,handleInputChange,reset];

}
