import React, { useState } from 'react'

const App = () => {

  const [arr, setArr] = useState([10,20,30]);
  const buttonClicked = () => {
    setArr(prev => ([...prev, 99]));
  }

  return (
    <div>
      <h1> {arr.join(" ")}</h1>
      <button onClick={buttonClicked}>Click me</button>
    </div>
  )
}

export default App

