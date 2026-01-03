import React from 'react'

const App = () => {

  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("From submitted");
  }

  return (
    <div>
      
      <div className='form'>
     <form onSubmit={(elem) => {
      submitHandler(elem)
     }} >
      <label >Name :</label>
      <input type="text" placeholder='Enter Your Name' />
      <button>Submit</button>
     </form>
     </div>
    </div>
  )
}

export default App
