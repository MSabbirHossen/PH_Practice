import React from 'react';
import { Link } from 'react-router';

const POst = ({post}) => {
    const {id, title} = post;
    return (
        <div style={{
            border: "2px solid white",
            margin: "5px",
            borderRadius: '10px',
        }} >
            {/* <h2>{id}</h2> */}
            <h5>{title}</h5>
            <Link to={`/posts/${id}`} >Details</Link>
        </div>
    );
};

export default POst;