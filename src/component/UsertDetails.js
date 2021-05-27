import React from 'react'
import {Link} from 'react-router-dom'
const UsertDetails = (props) => {
    //let history = useHistory();
    console.log(props);
    const {name,email,phone,website,address}= props.location.state.myusers
    return (
        <div className="container mt-3">
            <h1>User Details  </h1>
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Mobile : {phone}</h3>
            <h3>Website : {website}</h3>
            <h3>Address : {address.street}</h3>
            <p><Link to={"/"}>Back</Link></p>
        </div>
    )
}

export default UsertDetails
