import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';


const PostDetails = () => {
    // console.log("🚀 ~ PostDetails ~ params:", params)
    const post = useLoaderData();
    const {title, body} = post;

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate("/")
    }
    return (
        <div style={{
            border: "2px solid white",
            margin: "5px",
            borderRadius: '10px',
            padding:'5px 15px',
        }}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Home</button>
            <button onClick={()=> {navigate(-1)}}>Back</button>
            <button onClick={()=> {navigate("/mobiles")}}>Phones</button>
            <Link to={"/laptops"}>Laptops</Link>
        </div>
    );
};

export default PostDetails;