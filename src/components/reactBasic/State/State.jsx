import React, { useState } from 'react'

const State = () => {
       const [count, setCount] = useState(0)
       const users = [
              { id: 1, name: "Umesh" },
              { id: 2, name: "Rahul" },
              { id: 3, name: "Amit" }
       ];
       
       const [isLoggedIn, setLogin] = useState(false)

       return (
              <>
                     {/* react state */}
                     <div>
                            <h1>count is {count}</h1>
                            <button onClick={() => setCount(count + 1)}>increment</button>
                     </div>


                     {/* list rendering */}
                     <section>
                            <div>
                            {
                                   users.map((u, idx) => (
                                          <h1 key={idx}>
                                                 {u.name}
                                          </h1>
                                   ))
                            }
                     </div>
                     <div>
                            {users.map((u, idx) => {
                                   console.log(u.id, u.name)
                                   return (
                                          <div key={idx}>
                                                 <h1>{u.id}</h1>
                                                 <span>{u.name}</span>
                                          </div>
                                   )
                            })}
                     </div>
                     </section>

                     {/* conditional rendring */}
                     <div>
                            {isLoggedIn ? <Home setLogin={ setLogin} /> : <Login setLogin={ setLogin} />}
                     </div>
              </>
       )
}

export default State

const Home = ({setLogin}) => {
       return (
              <h1>
                     <span>this is umesh </span>
                     <button className='border' onClick={()=> setLogin(false)}>logout</button>
              </h1>
       )
}

const Login = ({setLogin}) => {
       return (
              <h1>Please login first
                     <button className='border' onClick={()=> setLogin(true)}>login</button>
              </h1>
       )
}


