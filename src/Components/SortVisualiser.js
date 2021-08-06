import React, { useEffect, useState } from "react";
import "./sortingVisualiser.css";

const rnadomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

const SortVisualiser = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(rnadomIntFromInterval(5, 600));
    }
    setArray(arr);
  };
  useEffect(() => {
    resetArray();
  }, []);

  const bubbleSort = async () => {
    const arr = document.getElementsByClassName("array-bar");
    let i = 0;

    for (i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        arr[j].style.background = "blue";
        arr[j + 1].style.background = "blue";

        if (
          parseInt(arr[j].style.height) >= parseInt(arr[j + 1].style.height)
        ) {
          await waitforme(1000);
          let temp1 = arr[j].style.height;
          let temp2 = arr[j + 1].style.height;
          temp1 = temp1.substring(0, temp1.length - 2);
          temp2 = temp2.substring(0, temp2.length - 2);
          arr[j + 1].style.height = `${parseInt(temp1)}px`;
          arr[j].style.height = `${parseInt(temp2)}px`;
        }
        arr[j].style.background = "cyan";
        arr[j + 1].style.background = "cyan";
      }
      arr[arr.length - 1 - i].style.background = "green";
    }
    arr[0].style.background = "green";
  };
  const mergeSort = () => {};

  const heapSort = () => {};

  const insertionSort = () => {};

  return (
    <div className="array-container">
      {array.map((value, idx) => {
        return (
          <div
            className="array-bar"
            style={{ backgroundColor: "cnyan", height: `${value}px` }}
            key={idx}
          ></div>
        );
      })}
      <button onClick={() => resetArray()}>Generate New Array</button>
      <button onClick={() => bubbleSort()}>Bubble Sort</button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button onClick={() => insertionSort()}>Insertion Sort</button>
      <button onClick={() => heapSort()}>Heap Sort</button>
    </div>
  );
};

export default SortVisualiser;
