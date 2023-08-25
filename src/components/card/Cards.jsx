import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((val, idx) => (
        <Card key={idx}></Card>
      ))}
    </div>
  );
};

export default Cards;
