import React from 'react'
import { useReducer } from 'react';
const initialState = {
  count: 0,
};
function reducer(state, action) {
       switch (action.type) {
              case "ADD":
                     return {
                            ...state,
                            count:state.count + action.payload
                     }       
              case "SUBTRACT":
                     return {
                            ...state,
                            count:state.count - action.payload
                     }       
              case "RESET":
                     return {
                            ...state,
                            count:0
                     }       
              default:
                     return state
       }
}
const Example2 = () => {
       const [state, dispatch] = useReducer(reducer, initialState);
       return (
              <div className='text-center m-8'>
                     <h1>Count: {state.count}</h1>

                     <button className='border m-1' onClick={() => dispatch({ type: "ADD", payload: 1 })}>
                            +1
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "SUBTRACT", payload: 1 })}>
                            -1
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "ADD", payload: 5 })}>
                            +5
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "SUBTRACT", payload: 5 })}>
                            -5
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "RESET" })}>
                            Reset
                     </button>
              </div>
       )
}

export default Example2
