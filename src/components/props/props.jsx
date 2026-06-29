import React from 'react'

const Props1 = ({ props }) => {
       console.log(props[0])
       return (
              <div>
                     {
                            props.map((i,idx) => {
                                   return (
                                          <h1 key={idx}>{i}</h1>
                                   )
                            })
                     }
              </div>
       )
}

export default Props1
