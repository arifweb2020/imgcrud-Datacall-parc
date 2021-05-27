import React from 'react'
import Table from './Table'
const ContactList = ({clist}) => {
    return (
        <>
          <h1>Contact List</h1> 
          <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Action</th>
       
      </tr>
    </thead>
    <tbody>

        {
            clist.map((item)=>{
                return  <Table fulldetails={item}/>
 
            })
        }
      
      </tbody>
      </table>

        </>
    )
}

export default ContactList
