import React from 'react'
import Form from './form'

const Event = () => {
       const handleClick = () => {
              alert("Click was clicked")
       }
       const inpChange = (e) => {
              console.log(e.target.value);
       }
       return (
              <div>
                     this is Event handler <hr />
                     <button onClick={handleClick} className='border-2'
                     >click me</button>
                     <hr />

                     <button className='border'
                            onClick={() => alert("inline event handler")}>
                            Clicked me
                     </button>

                     <hr />

                     <input placeholder='Enter text' className='border'
                            type="text" onChange={inpChange} />
                     
                     <hr />

                     <Form/>
              </div>
       )
}

export default Event
