import React from 'react'

const Form = () => {
       const handleSubmit = (e) => {
              e.preventDefault();
              console.log("Form Submitted");
       };
       return (
              <form onSubmit={handleSubmit}>
                     <button className='border' type='submit'
                     >form submit btn</button>
              </form>
       )
}

export default Form
