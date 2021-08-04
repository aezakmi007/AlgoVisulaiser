import React, { useEffect, useState } from "react";
import "./sortingVisualiser.css";

const rnadomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SortVisualiser = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 310; i++) {
      arr.push(rnadomIntFromInterval(5, 600));
    }
    setArray(arr);
  };
  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className="array-container">
      {array.map((value, idx) => {
        return (
          <div
            className="array-bar"
            style={{ backgroundColor: "black", height: `${value}px` }}
            key={idx}
          ></div>
        );
      })}
      <button onClick={() => resetArray()}>Generate New Array</button>
    </div>
  );
};

export default SortVisualiser;
