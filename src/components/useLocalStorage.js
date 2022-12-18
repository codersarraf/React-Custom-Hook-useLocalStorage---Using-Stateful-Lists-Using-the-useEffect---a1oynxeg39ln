import { useEffect } from "react";
import { useState } from "react";

function getSavedValue (stateVar, value){
    const savedValue = JSON.parse(localStorage.getItem(stateVar))
    
    if(savedValue){
        return savedValue;
    }

    if(value instanceof Function){
        return value();
    }
    return value;
}

const useLocalStorage = (stateVar, value) => {
    const [values, setValues] = useState(()=>
    {
        return getSavedValue(stateVar, value)
    });

    useEffect(()=>{
        localStorage.setItem(stateVar, JSON.stringify(values))
    })
    return [values, setValues]
  
};

export default useLocalStorage;
