import React from 'react'
import UseCounter from './UseCounter';
import UseFetch from './UseFetch';

const CustomeHooks = () => {
       const url = "https://jsonplaceholder.typicode.com/users"
       const { count, increment, decrement, reset } = UseCounter(10);
       const { data, err } = UseFetch(url)
       console.log(data,err);
       
       return (
              <main>
                     <div>
                            <h2>{count}</h2>
                            <button className='border m-1 p-1 rounded-xl' onClick={increment}>Add</button>
                            <button className='border m-1 p-1 rounded-xl' onClick={decrement}>sub</button>
                            <button className='border m-1 p-1 rounded-xl' onClick={reset}>Reset</button>
                     </div>

                     <div>custome hook for api fetch</div>
                     <div>

                     </div>
              </main>
       )
}

export default CustomeHooks
