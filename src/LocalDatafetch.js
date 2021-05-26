import React from 'react';
import MyData from './MyData'

const LocalDatafetch = () => {
    return (
        <>
        <div className="container">
            <h1>Locally data fetch</h1>

            {
                MyData.map((i)=>{
                    return <ul key={i.id} >
                            <li>{i.name}</li>
                        </ul>
                })
            }
            </div>
        </>
    )
}

export default LocalDatafetch
