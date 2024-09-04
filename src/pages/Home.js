import React, { useEffect, useState } from 'react'
import axios from  'axios'
export default function Home() {

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);  // assuming result.data is the array of users
      }
      
  return (
    <div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index) => (
                <tr>
                <th scope="row" key={index}>{index +1 }</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>

                </td>
                </tr>
            ))}
           
        </tbody>
        </table>
    </div>
  )
}
