import React from 'react';
import MyData from './MyData';
import {Link} from 'react-router-dom'

const LocalDatafetch = () => {
    return (
        <>
        <div className="container">
            <h1>Locally data fetch</h1>

            {
                MyData.map((i)=>{
                    return <ul key={i.id} >
                            <li><Link to={`/user-details/${i.id}`}>{i.name} </Link></li>
                        </ul>
                })
            }
            </div>
        </>
    )
}

export default LocalDatafetch
