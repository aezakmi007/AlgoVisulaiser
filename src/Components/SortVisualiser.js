import React, { useEffect, useState } from "react";
import "./sortingVisualiser.css";

const rnadomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const SortVisualiser = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 300; i++) {
      arr.push(rnadomIntFromInterval(5, 600));
    }
    setArray(arr);
  };
  useEffect(() => {
    resetArray();
  }, []);

  const bubbleSort = () => {
    const arr = document.getElementsByClassName("array-bar");
    let i = 0;
    // const height = [];
    // for (let k = 0; k < arr.length; k++) {
    //   height[k] = arr[k].style.height;
    // }
    // height.sort((a, b) => a - b);

    for (i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setTimeout(() => {
          if (
            parseInt(arr[j].style.height) >= parseInt(arr[j + 1].style.height)
          ) {
            let temp1 = arr[j].style.height;
            let temp2 = arr[j + 1].style.height;
            // console.log(temp1, temp2);
            temp1 = temp1.substring(0, temp1.length - 2);
            temp2 = temp2.substring(0, temp2.length - 2);
            // console.log(temp1, temp2);
            arr[j + 1].style.height = `${parseInt(temp1)}px`;
            arr[j].style.height = `${parseInt(temp2)}px`;
            // console.log(arr[j + 1].style.height, arr[j].style.height);
            // arr[j].style.height = arr[j + 1].style.height;
            // arr[j + 1].style.height = temp;
          }
        }, i * 1000);
      }
    }
    for (let k = 0; k < arr.length; k++) {
      console.log(arr[k].style.height);
    }
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
            style={{ backgroundColor: "black", height: `${value}px` }}
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
