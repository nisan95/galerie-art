// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "10px 20px",
    backgroundColor: "#282c34",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Akèy
      </Link>
      <Link to="/oeuvre" style={linkStyle}>
        Œuvres
      </Link>
      <Link to="/ajoute" style={linkStyle}>
        Ajouté
      </Link>
    </nav>
  );
}

export default Navbar;