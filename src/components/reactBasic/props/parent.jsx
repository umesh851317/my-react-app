import React from 'react'
import Welcome from './Welcome'
import Destructuring from './Destructuring'
import Props1 from './props'

const Props = () => {
       let arr = ['A', 'B', 'C', 'D']
       let user = {
              name: "Umesh",
              age: "23"
       }
       return (
              <div className='text-2xl'>
                     <Welcome props={user} />
                     <Props1 props={arr} />
                     <Destructuring props={user} />
              </div>
       )
}

export default Props
