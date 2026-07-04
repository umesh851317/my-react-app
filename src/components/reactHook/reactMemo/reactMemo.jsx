import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
export default function ReactMemo() {
       const [count, setCount] = useState(0)
       const [propNum, setPropNum] = useState(5)
       console.log("perent render");
       useEffect(() => {
              if (count % 5 === 0) {
                     setPropNum(count);
              }
       }, [count]);
       return (
              <div>
                     this is parent component for react memo
                     <hr />
                     <button className='border' onClick={() => setCount(count + 1)}>inc Count</button>
                     <span>={count}</span>

                     <Child propNum={propNum} />
              </div>
       )
}

const Child = React.memo(({ propNum }) => {
       console.log("child render", propNum);
       return (
              <div>dvkn</div>
       )
})

