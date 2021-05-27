import React from 'react'
import {Link} from 'react-router-dom'
const Table = ({users}) => {
   const {id,name,username,email} = users
    return (
        <div>
            
           <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td><Link to={{pathname:`/user-details/${id}`, state:{myusers:users}}}>View Profile</Link></td>
           </tr>   
        </div>
    )
}

export default Table
