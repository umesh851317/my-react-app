import React, { useState } from 'react'
import Props from '../components/props/parent'

const ReactHook = () => {
       const [currCompo, setCurrCompo] = useState(<Props />)
       return (
              <div>
                     <div className='bg-green-300 flex gap-5  justify-center border h-15'>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<Props />)}>Props</button>
                            this is changes
                     </div>
                     <div>{currCompo}</div>
              </div>
       )
}

export default ReactHook
