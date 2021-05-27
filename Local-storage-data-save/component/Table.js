import React from 'react'
import {Link} from 'react-router-dom'
const Table = (props) => {

    const {id,name,mob}=props.fulldetails
    return (
        <div>
              <tr key={id}>
        <td><Link to={{pathname:`contact-details/${id}`, state:{contact:props.fulldetails}}}>{name}</Link></td>
        <td>{mob}</td>
        <td><button className="btn btn-sm btn-danger" >Delete</button></td>
        
      </tr>
        </div>
    )
}

export default Table
