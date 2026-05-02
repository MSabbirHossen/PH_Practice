import React from 'react';
import { Link } from 'react-router';

const Header = () => {
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    // backgroundColor: '#f0f0f0',
    gap: '10px',
};

    return (
        <div style={headerStyle}>
            <Link to="/">Home</Link>
             <Link to="/phones/1">Phone 1</Link>
             <Link to="/phones/2">Phone 2</Link>
             <Link to="/phones/3">Phone 3</Link>
        </div>
    );
};

export default Header;