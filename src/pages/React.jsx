import React, { useState } from 'react'
import Event from "../components/eventHandling/parent";
import Props from "../components/props/parent";
import State from "../components/State/State";
import UseEffect from "../components/Hooks/useEffect";
import Form from "../components/forms/form";
const ReactC = () => {
       const [currCompo, setCurrCompo] = useState(<Props />)
       return (
              <div>
                     <div className='bg-green-300 flex gap-5  justify-center border h-15'>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<Props />)}>Props</button>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<Event />)}>Event</button>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<State />)}>State</button>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<UseEffect />)}>UseEfect</button>
                            <button className='border h-12 text-xl bg-gray-300 p-2 m-1' onClick={() => setCurrCompo(<Form />)}>Form</button>
                     </div>
                     <div>{currCompo}</div>
              </div>
       )
}

export default ReactC
