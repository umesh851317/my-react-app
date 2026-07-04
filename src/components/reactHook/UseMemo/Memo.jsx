import React, { useMemo, useState } from 'react'


const nums = new Array(30_000_000).fill(0).map((_, i) => { // This creates an array with 30 million objects.
       return {
              index: i,
              isMegical: i === 29_000_000
       }
})
const Memo = () => {
       const [number, setNumber] = useState(nums);
       const [count, setCount] = useState(5)

       // const megical = number.find(i => i.isMegical);
       // console.log(megical);

       // Since the magical number is almost at the end, JavaScript checks almost 29 million objects.
       // That takes time.
       // This is called an expensive calculation.

       const megical = useMemo(() => number.find((i) =>
              i.isMegical === true),
              [number]) // avoid expensive calculation and memorize them 

       // here it check only when dependency [number] is changed

       return (
              <main>
                     <button onClick={() => { setCount(count + 1) }}>Add</button>
                     <h1>{count}</h1>

                     <h1>megical number is {megical.index}</h1>
              </main>
       )
}

export default Memo
