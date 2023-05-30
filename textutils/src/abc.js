import "./styles.css";
import React from 'react';
import {useState} from 'react';

 function MyButton() {
   const[count,setCount]=useState(0);

   function handleClick(){
     setCount(count+1);
   }
  return (    
    <>
        <button onClick={handleClick}>
    click{count}times
    </button>
    </>
  );
}
