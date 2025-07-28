// src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArtList from "./components/ArtList";
import ArtForm from "./components/ArtForm";
import NotFound from "./components/NotFound";

function App() {
  const [arts, setArts] = useState([]);

  // Chaje done nan backend sou demaraj app la
  useEffect(() => {
    fetch("http://localhost:5001/arts")
      .then((res) => res.json())
      .then((data) => setArts(data))
      .catch((error) => console.error("Erreur chargement arts:", error));
  }, []);

  // Fonksyon pou ajoute nouvo œuvre apre POST reussi
  function addArt(newArt) {
    setArts([...arts, newArt]);
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oeuvre" element={<ArtList arts={arts} />} />
          <Route path="/ajoute" element={<ArtForm addArt={addArt} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;