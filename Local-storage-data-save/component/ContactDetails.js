import React from 'react'

const ContactDetails = (props) => {
    console.log(props);
    const {name,mob}=props.location.state.contact;
    return (
        <>
         <h1>Contact Details</h1>
         <h2>Name - {name}</h2>   
         <h2>Mobile - {mob}</h2>
        </>
    )
}

export default ContactDetails
