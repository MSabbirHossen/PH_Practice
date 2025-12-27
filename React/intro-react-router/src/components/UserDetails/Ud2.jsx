import React, { use } from 'react';

const Ud2 = ({userPromise}) => {
    const user = use(userPromise);
    const {email, phone, name, username} = user;
    console.log("🚀 ~ Ud2 ~ email, phone, name, username:", email, phone, name, username)
    return (
        <div>
            {/* <h2>{name}</h2> */}
            <p>User Name: {username}</p>
             <p>Email: {email} </p>
            <p><small>Phone: {phone}</small></p>
        </div>
    );
};

export default Ud2;