import React, { useState } from "react";

function PlantCard({ name, image, price, inStock: initialStock }) {
  const [inStock, setInStock] = useState(initialStock || true); 

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={inStock ? "primary" : "secondary"}
        onClick={() => setInStock((prevStock) => !prevStock)}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
