import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Cards';

const App = () => { 
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setUserData(response.data);
  }


  let printUserData = <h3 className='text-gray-300 text-xs absolute font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div>
        <Card elem = {elem}/>
      </div>
    })
  }

  useEffect(() => {
    console.log("UseEffect is active");
    getData();
  },[index])

  return (
    <div className='flex flex-col p-10 bg-black h-screen text-white overflow-auto '>
      <div className='flex flex-wrap gap-4 py-2 h-[82%] '>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-5 '>
        <button className='px-4 py-2 bg-amber-500 font-semibold rounded text-xs active:scale-95 cursor-pointer'
                style={{opacity: index == 1? 0.6 : 1}} 
                onClick={() => {
                  if(index > 1){
                      setIndex(index - 1);
                      setUserData([]);
                    }
                }}>
        Prev
        </button>
        <h4>Page {index}</h4>
        <button className='px-4 py-2 bg-amber-500 font-semibold rounded text-xs active:scale-95 cursor-pointer'
                onClick={() => { 
                  setIndex(index + 1);
                  setUserData([]);
                }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App