import React, { useReducer, useState } from 'react'
import CounterReduce from './CounterReducer'

const Child2 =()=>{
    let [state,dispatch] = useReducer(CounterReduce, 10)
    console.log(state)
    return(
    <div>
<h1>Value of Reducer state is = {state}</h1>
<button onClick={()=>{dispatch('INCREMENT')}}>Increment in reducer Value by Click</button>
    </div>
    )

}

export default Child2