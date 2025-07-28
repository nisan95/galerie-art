// src/components/NotFound.js

import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>404 - Paj non jwenn</h1>
      <p>Paj ou t ap chèche a pa egziste.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Retounen lakay
      </Link>
    </div>
  );
}

export default NotFound;