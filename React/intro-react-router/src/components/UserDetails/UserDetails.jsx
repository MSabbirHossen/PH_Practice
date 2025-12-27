import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';

const cardStyle={
    border: "2px solid yellow",
    padding: "2px 8px",
    borderRadius: "10px",

}

const UserDetails = () => {
    const userData = useLoaderData();
    console.log("🚀 ~ UserDetails ~ userData:", userData)
    const params = useParams();
    console.log("🚀 ~ UserDetails ~ params:", params)

    const navigate = useNavigate();

    const {id, name, email, phone, website} = userData;
    return (
        <div style={cardStyle}>
            <p>ID: {id}</p>
            <h3>{name}</h3>
            <h5>Email: {email}</h5>
            <p>Phone: {phone}</p>
            {/* <p>{address}</p> */}
            <Link>{website}</Link>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </div>
    );
};

export default UserDetails;