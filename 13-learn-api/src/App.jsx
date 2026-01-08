import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
      const [data, setData] = useState([]);
  const getdata = async () => {
    console.log("Btn clicked");
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    console.log("Responsed recieved");
    setData(response.data);
    console.log(data);
  }
  
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      {data.map((elem,idx) => {
        return <h3>{elem.author} {idx}</h3>
      })}
    </div>
  )
}

export default App