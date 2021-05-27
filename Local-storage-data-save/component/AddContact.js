import React,{useState} from 'react'

const AddContact = (props) => {

    const [user,setUser]= useState({
        name: "",
        mob:""
    });

    const {name,mob} = user
    

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    const myForm = (e)=>{

        e.preventDefault();

        props.cHandler(user);

        setUser({name:"", mob:""})
       
       console.log(user);

    }

    return (
        <>
           <div className="conatiner">
            <h1 className="mb-3">Add Contact</h1>

            <form className="col-md-4" onSubmit={myForm}>

                <div className="form-group">
                <input type="text" placeholder="enter name" 
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
                required
                />
                    </div>

                    <div className="form-group">
                <input type="text" placeholder="enter mobile number" 
                className="form-control"
                name="mob"
                value={mob}
                onChange={onInputChange}
                required
                />
                </div>

<div className="form-group">
                <button type="submit" className="btn btn-md btn-info">Save</button>
                    </div>   

                </form>


               </div> 
        </>
    )
}

export default AddContact
