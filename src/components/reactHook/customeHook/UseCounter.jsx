import React from 'react'
import { useState } from 'react';

const UseCounter = (initialValue) => {
       const [count, setCount] = useState(initialValue);

       const increment = () => setCount(prev => prev + 1);
       const decrement = () => setCount(prev => prev - 1);
       const reset = () => setCount(initialValue);

       return {
              count,       // it like return value to the component so theey used in diffrent component
              increment,
              decrement,
              reset,
       };
}

export default UseCounter
