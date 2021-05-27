import React,{useState,useEffect} from 'react'
import Patients from './Patients';

const Tfv = () => {

    const [patients,setPatients]=useState([]);
    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{

        const res = await fetch('http://thefacevalue.in/api/index.php');
        const res1 = await res.json();
        console.log(res1);
        setPatients(res1.data);
        setLoader(false);
    }

    if(loader) return <p>plz wait ... </p>

    return (
        <>
          <h1>Patient Details</h1>  

          {
              patients.map((item)=>{
                  return <Patients data={item} key={item.id} />
              })
          }
        </>
    )
}

export default Tfv
