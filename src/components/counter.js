
  
import React from 'react';
import { decCounter, incCounter } from '../store/actions';
import { useState } from 'react';
import { AppContext } from '../store/AppContextProv';

export const Counter = () => {
   const [state, setstate] = useState(0);
    const {dispatch,getState}=React.useContext(AppContext);
     const {count}=getState();


    const handleAdd=()=>{
        dispatch(incCounter(1)); 
       
    }

    const handleReduce=()=>{
        dispatch(decCounter(1)); 
      
    }

    return (
        <div>
             <div className='redux'>
    <h1>Count:{count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleReduce}>-</button>
  </div>
        </div>
    )
}
