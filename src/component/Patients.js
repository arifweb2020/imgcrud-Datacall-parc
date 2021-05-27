import React from 'react'
import {Link} from 'react-router-dom';
const Patients = ({data}) => {
    const {id,name}= data;
    return (
        <div>
            <h2>Patients Name : {name} <Link to={{pathname:`/patients-details/${id}`, state:{mydata:data} }}>View </Link></h2>
          
        </div>
    )
}

export default Patients
