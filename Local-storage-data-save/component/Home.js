import React,{useState,useEffect} from 'react'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {uuid} from 'uuidv4'

const Home = () => {

    const [list,setContacts]= useState([]);

    const cHandler = (contact)=>{
        console.log(contact);
        setContacts([...list, {id: uuid(), ...contact}]);
    }

    const del = (id)=>{
        const newList = list.filter((contact)=>{
            return contact.id !== id
        });
        setContacts(newList);
    }

    useEffect (()=>{
      const mystore= JSON.parse(localStorage.getItem("contact-list"));

      if (mystore) setContacts (mystore);
},[]);

    useEffect (()=>{
            localStorage.setItem("contact-list", JSON.stringify(list));
    },[list]);



    // const list = [
    //     {
    //         id:"1",
    //         name:"arif",
    //         mob:"9876543210"
    //     },
    //     {
    //         id:"1",
    //         name:"haifa",
    //         mob:"9876543999"
    //     }

    // ]
    return (
        <>
        <div className="container">
          <h1>My Contact List</h1> 
          <AddContact cHandler = {cHandler}/> 
          <ContactList clist={list} remove={del}/>
          </div>
        </>
    )
}

export default Home
