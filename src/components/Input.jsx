import React, { useState } from 'react'
import {add, divide} from "./calculations"

const Input = () => {
   const [value1, setValue1] = useState(0);
   const [value2, setValue2] = useState(0);
   const [result, setResult] = useState()

   function addFunction(e) {
    e.preventDefault()
    setResult(add(Number(value1), Number(value2)))
   }

   function divideFunction(e) {
    e.preventDefault()
    setResult(divide(value1, value2));
   }

   function changeFunc1(e) {
    e.preventDefault();
    setValue1(e.target.value);
   }

   function changeFunc2(e) {
    e.preventDefault();
    setValue2(e.target.value);
   }

  return (
    <div>
        <form >
            <input onChange={changeFunc1}/>
            <input onChange={changeFunc2}/>
            <button onClick={addFunction}>Add</button>
            <button onClick={divideFunction}>Divide</button>
        </form>

      <p>The result is: {result}</p>
    </div>
  )
}

export default Input
