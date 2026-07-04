import React from 'react'
import { useReducer } from 'react';


const initialState = {
  count: 0,
};

function reducer(state, action) {
  console.log(action, state);

  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

const Example1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 >count is <span className="border-2 p-1">{state.count} </span></h1>

      <button className="border m-1 p-1" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button className="border m-1 p-1" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button className="border m-1 p-1" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}

export default Example1
