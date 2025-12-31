import React, { useState } from 'react';
import useInputField from '../../hooks/useInputField';

const ControlledField = () => {
    //custom hook
    const [hname, hNameChange] = useInputField('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    
    const handleNameChange = e =>{
        setName(e.target.value)
        console.log("🚀 ~ handleNameChange ~ e.target.value:", e.target.value)
    }
    
    const handleEmailOnChange = e =>{
        setEmail(e.target.value)
        console.log("🚀 ~ handleEmailOnChange ~ e.target.value:", e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
        console.log("🚀 ~ handlePasswordOnChange ~ e.target.value:", e.target.value)

        if(password.length <6){
            setError("Password must be six character or more.")
        }else{
            setError('')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* // this input field is used the custom hook; to make the code DRY. */}
                <input type="text"  defaultValue={hname} onChange={hNameChange} placeholder='The Custom Hook is implemented:Name'/> <br />

                {/* useState is implemented, code need to repeat */}
                <input type="text"  defaultValue={name} onChange={handleNameChange} placeholder='Name'/> <br />
                <input type="email" defaultValue={email} onChange={handleEmailOnChange} name="email" id="email" placeholder='Email' required/> <br />
                <input type="password" name="pass" id="pass" placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;