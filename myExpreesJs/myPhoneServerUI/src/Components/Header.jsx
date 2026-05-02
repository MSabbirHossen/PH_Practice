import React from "react";
import { Link } from "react-router";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    // backgroundColor: '#f0f0f0',
    gap: "10px",
  };

  return (
    <div style={headerStyle}>
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>
    </div>
  );
};

export default Header;
