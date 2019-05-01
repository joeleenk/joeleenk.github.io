import React from "react";
import Colors from "../styles/modules/_colors.scss";

const FavoriteColors = () => (
  <ul className="favorite-colors">
    {Object.entries(Colors).map(([color, hex]) => (
      <li key={color} className={color}>
        <h4 className="color-name">{color}</h4>
        <p className="color-hex">{hex}</p>
      </li>
    ))}
  </ul>
);

export default FavoriteColors;
