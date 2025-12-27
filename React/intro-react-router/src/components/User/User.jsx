import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import Ud2 from '../UserDetails/Ud2';

const userStyle ={
    border: "2px solid yellow",
    borderRadius: "15px",
    padding: "15px",
    margin: "5px",
    // display: "grid",
    
}
const User = ({user}) => {
    const { id, name} = user;

    // this fetch is for the second method
    const userPromise = fetch (`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
           
            {/* <button> </button> */}
            <Link to={`/users/${id}`}>Details</Link> 

            {/* second method for displaying the details in the same page */}
            <button onClick={() => setShowInfo(!showInfo)}> {showInfo? "Hide": "Show"} Info</button>
            {
                showInfo && <Suspense fallback="Loading">
                        <Ud2 userPromise={userPromise}></Ud2>
                </Suspense>
            }
        </div>
    );
};

export default User;