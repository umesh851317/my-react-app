import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiCalling = ({ count }) => {
       // https://jsonplaceholder.typicode.com/users

       const [data, setData] = useState([])
       const [users, setUsers] = useState({})

       useEffect(() => {
              async function fetchUsers() {
                     const response = await fetch(
                            "https://jsonplaceholder.typicode.com/users"
                     );
                     const data = await response.json();
                     console.log(data);
                     setData(data);
              }

              fetchUsers();
       }, []);

       useEffect(() => {
              async function fetchData() {
                     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
                     setUsers(response.data);
                     console.log("response",response);
                     
              }

              fetchData();
       }, [count]);

       return (
              <div>
                     <span>this is api calling using fetch api {count}</span>

                     <div>
                            {data.map((user, index) => {
                                   return (
                                          <h1 key={index}>{user.name}</h1>
                                   )
                            })}
                     </div>

                     <div>
                            <div>user:{users.name}</div>
                            <div>email:{users.email}</div>
                     </div>
              </div>
       )
}

export default ApiCalling
