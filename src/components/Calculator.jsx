import React, { useState } from 'react'
import {add, divide} from "./calculations"

const Calculator = () => {
   const [value1, setValue1] = useState(0);
   const [value2, setValue2] = useState(0);
   const [result, setResult] = useState();
   const [isResultVisible, setIsResultVisible] = useState(false);

   function addFunction(e) {
    e.preventDefault()
    setResult(add(Number(value1), Number(value2)));
    setIsResultVisible(false);
    console.log(value1)
    console.log(value2)
   }
   function divideFunction(e) {
    e.preventDefault()
    setResult(divide(Number(value1), Number(value2)));
    setIsResultVisible(false);
    console.log(value1)
    console.log(value2)
   }

   function changeValue1(e) {
    e.preventDefault();
    setValue1(e.target.value);
   }

   function changeValue2(e) {
    e.preventDefault();
    setValue2(e.target.value);
   }

   function showResult(e) {
    e.preventDefault()
    if(isResultVisible === false) {
      setIsResultVisible(true);
    } else{
      setIsResultVisible(false);
    }
   }

  return (
    <div>
        <form >
            <input onChange={changeValue1} placeholder='Enter first value'/>
            <input onChange={changeValue2} placeholder='Enter second value'/>
            <button onClick={addFunction}>Add</button>
            <button onClick={divideFunction}>Divide</button>
        </form>
        <button onClick={showResult}>Equals</button>

        <p>The result is: {isResultVisible ? result :null} </p>
    </div>
  )
}

export default Calculator
