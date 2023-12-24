import React,{useDebugValue, useState} from "react";

function useFormFields (){
    const [fields,setFields]=useState()
    const handleChange = (e)=>{
        const inpName = e.target.value
        setFields({...fields,[inpName]:e.target.value})
    }
    useDebugValue(fields)
    return [fields,handleChange]
}
export default useFormFields