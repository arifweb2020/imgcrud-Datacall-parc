import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';


const UserDetails = (props) => {
    const {id} = useParams();
    console.log(props);
   


    
    console.log(id);
    return (
        <>
        <div className="conatiner">
        <h1>{id}</h1>
     
            </div>
        </>
    )
}

export default UserDetails
