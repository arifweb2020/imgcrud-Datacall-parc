import React from 'react'
import {Link} from 'react-router-dom'
const PatientsDetails = (props) => {
    console.log(props);

    const {name,email,drname,labjobnumber,material}= props.location.state.mydata
    return (
        <div className="container">
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
            <h3>Dr Name : {drname}</h3>
            <h3>Lab No : {labjobnumber}</h3>
            <h3>Material : {material}</h3>
            <Link className="btn btn-sm btn-info" to={"/"}>Back</Link>
        </div>
    )
}

export default PatientsDetails
