import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(100)
  const changeA = () => {
    console.log("Value of A has Changed");
  }
  const changeB = () => {
    console.log("Value of B has Changed");
  }
  useEffect(() => {
    changeA();
  }, [a])
  useEffect(() => {
    changeB();
  }, [b]);
  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b} </h1>
      <button onClick={() => {
        setA(a+1);
      }}>Change A</button>
      <button onClick={() => {
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
 