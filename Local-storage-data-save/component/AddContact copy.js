import React,{useState} from 'react'

const AddContact = (props) => {

    const [name,setName]= useState("");
    const [mob, setMob]=useState("");


    const myForm = (e)=>{

        e.preventDefault();

        props.cHandler(name);
        props.cHandler(mob);


        console.log(name,mob);

    }

    return (
        <>
           <div className="conatiner">
            <h1 className="mb-3">Add Contact</h1>

            <form className="col-md-4" onSubmit={myForm}>

                <div className="form-group">
                <input type="text" placeholder="enter name" 
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                    </div>

                    <div className="form-group">
                <input type="text" placeholder="enter mobile number" 
                className="form-control"
                value={mob}
                onChange={(e)=>setMob(e.target.value)}
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
