import React, { useEffect, useState } from 'react'


const rnadomIntFromInterval = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1) + min);
}



const  SortVisualiser = () => {

  const [array, setArray] = useState([]);

  const resetArray = () => {
    const arr = [];
    for(let i = 0; i<100; i++){
      arr.push(rnadomIntFromInterval(5, 1000));
    }
    setArray(arr);
  
  }
  useEffect(() => {
    resetArray();
  }, []);


  return (
   <>
   {array.map((value, idx) => {
     return (
     <div  key = {idx}>
     {value}
     </div>
   )
   })}
   </>
  )
}

export default SortVisualiser;
