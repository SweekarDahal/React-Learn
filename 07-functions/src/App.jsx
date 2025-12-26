import React from 'react'

const App = () => {
  const PageScrooling = (data) => {
    if(data > 0) {
      console.log("Scroolig Down");
    }
    else {
      console.log("Scrooling up");
    }
  }
  return (
    <div onWheel={(data) => {
      PageScrooling(data.deltaY)
    }}>
      
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>

    </div>
  )
}

export default App
