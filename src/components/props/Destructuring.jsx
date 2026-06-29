import React from 'react'

const Destructuring = ({ props:{name,age} }) => {
       console.log(name)
  return (
    <div>
      destructuring {name} age {age}
    </div>
  )
}

export default Destructuring
