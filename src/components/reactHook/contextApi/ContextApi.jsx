import React, { useContext } from 'react'
import { userContext } from '../../../Context/userData';

const ContextApi = () => {
       const { user } = useContext(userContext);
       console.log(user);
       
       return (
              <div>
                     this is user context 

                     name:{user.name} & age is {user.age}
              </div>
       )
}

export default ContextApi
