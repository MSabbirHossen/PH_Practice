import React, { useRef } from 'react';

const Uncontrolledfield = () => {
    const emailRef = useRef('');
    const passwordRef =useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        console.log("🚀 ~ handleSubmit ~ email:", email)
        const password = passwordRef.current.value;
        console.log("🚀 ~ handleSubmit ~ password:", password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="name" id="name" placeholder='Email'/><br />
                <input ref={passwordRef} type="password" name=" pass" id="pass" placeholder='Password'/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontrolledfield;