import React from "react";

function HogTile({ hog, onHide }) {
  return (
    <div className="hog-tile" style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h2>{hog.name}</h2>

      {/* Render the image */}
      {hog.image && (
        <img
          src={hog.image}
          alt={hog.name}
          style={{ width: "80%", height: "auto", maxWidth: "300px" }} // Adjust styles as needed
        />
      )}

      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
      <button onClick={() => onHide(hog.name)}>Hide</button>
    </div>
  );
}

export default HogTile;
