import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("From submitted by " + title);

    setTitle('')
  }

  return (
    <div>
      
      <div className='form'>
     <form onSubmit={(elem) => {
      submitHandler(elem)
     }} >
      <label >Name :</label>
      <input type="text" placeholder='Enter Your Name' value = {title} onChange={(elem) => {
        setTitle(elem.target.value);
      }} />
      <button>Submit</button>
     </form>
     </div>
    </div>
  )
}

export default App
