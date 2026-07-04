import React, { useEffect, useRef, useState } from 'react'
import UnctrlCompo from './unctrlCompo'

const Form = () => {
       const [form, setForm] = useState({
              name: "Umesh",
              email: "Umesh@email.com"
       })

       const handleChange = (e) => {
              // console.log(e.target.name);
              setForm({
                     ...form,      
                     [e.target.name]: e.target.value
              })
       }

       const handleSubmit = (e) => {
              e.preventDefault();
              console.log(form);
       };


       return (
              <>
                     <form onSubmit={handleSubmit}>
                            <div>
                                   <span>Name:</span>
                                   <input type="text"
                                          name='name'   // used for access name key in form 
                                          value={form.name}
                                          onChange={handleChange}
                                   />
                            </div>
                            <div>
                                   <span>Email:</span>
                                   <input type="email"
                                          name='email'  // used for access email key in form 
                                          value={form.email}
                                          onChange={handleChange}
                                   />
                            </div>
                            <button type='submit'>submit</button>
                     </form>
                     <UnctrlCompo />
              </>
       )
}

export default Form
