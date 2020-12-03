import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = (props) =>{
    let counterValue=useContext(CounterContext)
    // console.log(counterValue)
    return(
        <div>
        <h1>this is child Class</h1>
        <h1> Counter value is : {counterValue[0]}  </h1>
        <h1>{document.lastModified}</h1>
        <button onClick={() => {counterValue[1](++counterValue[0])}}>Press Button</button>
   </div>
    )

}
export default Child