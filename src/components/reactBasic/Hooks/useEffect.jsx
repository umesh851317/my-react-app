import React, { useEffect, useState } from 'react'
import ApiCalling from './ApiCalling'

const UseEffect = () => {
       const [count, setCount] = useState(1)
       const [render, setRender] = useState(0)
       // run on first render
       useEffect(() => {
              console.log("run only first render");
       }, [])

       // Runs every render
       useEffect(() => {
              console.log("Runs every render");
       });

       // Runs when count is change
       useEffect(() => {
              console.log("Runs when count is change");
       },[count]);

       
       return (
              <div>
                     <span>this is useEffect update</span>

                     <div>{count}</div>
                     <div>
                            <button onClick={() => { count < 10 ? setCount(count + 1):setCount(count) }}>increment</button>
                     </div>

                     <div>
                            <button onClick={() => { setRender(render + 1) }}>render</button>
                     </div>

                     <div>
                            {/* api calling using UseEffect */}

                            <ApiCalling count={count } />
                     </div>
              </div>
       )
}

export default UseEffect
