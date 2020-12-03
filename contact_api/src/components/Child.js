import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = (props) =>{
    let counterValue=useContext(CounterContext)
    console.log(counterValue)
    return(
        <div>
        <h1>this is child Class</h1>
        <h1> hi {counterValue}  </h1>
        <h1>{document.lastModified}</h1>
   </div>
    )

}
export default Child