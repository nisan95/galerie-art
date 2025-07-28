// src/components/ArtForm.js

import React, { useState } from "react";

function ArtForm({ onAddArt }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !author || !price || !image) {
      alert("Tanpri ranpli tout chan yo.");
      return;
    }

    const newArt = {
      title,
      author,
      price: parseFloat(price),
      image,
    };

    // Rele fonksyon ki soti nan App.js pou voye done a
    onAddArt(newArt);

    // Reset fòm lan
    setTitle("");
    setAuthor("");
    setPrice("");
    setImage("");
  }

  return (
    <div className="form-container">
      <h2>Ajoute yon Œuvre</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Auteur:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Prix ($):</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>URL de l’image:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ArtForm;