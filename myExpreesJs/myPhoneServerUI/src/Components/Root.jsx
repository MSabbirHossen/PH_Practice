import React from 'react';
import { Link, Outlet } from 'react-router';
import Header from './Header';

const Root = () => {
    return (
        <div>
          <Header/>
          <Outlet/>
          <Link to="/phones">Go to Phones</Link>
        </div>
    );
};

export default Root;