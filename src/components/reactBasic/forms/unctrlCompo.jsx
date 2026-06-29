import React, { useRef } from 'react'

const UnctrlCompo = () => {
       const nameRef = useRef()
       const handlesubmit = (e) => {
              e.preventDefault()
              console.log("1",nameRef);
              console.log("2",nameRef.current);
              console.log("3",nameRef.current.value);
              nameRef.current.focus()
       }

       return (
              <form onSubmit={handlesubmit}>
                     <span>unCotrolled componet start from here</span><hr />
                     <input className='border' placeholder='uncotrolled components'
                            type="text"
                            name="name"
                            ref={nameRef}
                     />
                     <button type='submit'>check unctrl</button>
              </form>
       )
}

export default UnctrlCompo
