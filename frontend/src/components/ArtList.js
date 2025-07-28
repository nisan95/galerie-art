// src/components/ArtList.js

import React from "react";

function ArtList({ arts }) {
  if (arts.length === 0) {
    return <p>Aucune œuvre trouvée.</p>;
  }

  return (
    <div className="art-list">
      {arts.map((art) => (
        <div className="art-card" key={art.id}>
          <img src={art.image} alt={art.title} />
          <h3>{art.title}</h3>
          <p><strong>Auteur:</strong> {art.author}</p>
          <p><strong>Prix:</strong> ${art.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtList;