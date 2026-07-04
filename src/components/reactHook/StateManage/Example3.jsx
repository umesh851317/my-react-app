import React from 'react'
import { useReducer } from 'react';
const initialState = {
       step: 1,
       count: 0
}
function reducer(state, action) {
       switch (action.type) {
              case "INC_COUNT":
                     return {
                            ...state,
                            count : state.count + state.step
                     }
              case "DEC_COUNT":
                     return {
                            ...state,
                            count : state.count - state.step
                     }
              case "INC_STEP":
                     return {      
                            ...state,
                            step : state.step + 1
                     }
              case "DEC_STEP":
                     return {
                            ...state,
                            step : state.step > 1 ? state.step - 1 : 1
                     }
              default:
       }
}
const Example3 = () => {
       const [state, dispatch] = useReducer(reducer, initialState);
       return (
              <div className='text-center m-8'>
                     <h1>Count: {state.count}</h1>
                     <h1>Step: {state.step}</h1>

                     <button className='border m-1' onClick={() => dispatch({ type: "INC_COUNT" })}>
                            INC_COUNT
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "DEC_COUNT" })}>
                            DEC_COUNT
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "INC_STEP" })}>
                            INC_STEP
                     </button>

                     <button className='border m-1' onClick={() => dispatch({ type: "DEC_STEP" })}>
                            DEC_STEP
                     </button>
              </div>
       )
}

export default Example3
