import React from 'react'

const usestate1 = () => {
    const [num, setNum] = useState(0)
   
    const increaseNum = () => {;
     setNum(num+1)
    }
    const decreaseNum = () => {
     setNum(num-1)
    }
    const jumpBy5 = () => {
     setNum(num+5)
    }
 
   return (
     <div className='container' >
       <div>
         <h1> {num} </h1>
       </div>
       <div>
       <button onClick={increaseNum} >Increase</button>
       <button onClick={decreaseNum}>Decrease</button>
       <button onClick={jumpBy5}>Jump by 5</button>
       </div>
     </div>
   )
}

export default usestate1
