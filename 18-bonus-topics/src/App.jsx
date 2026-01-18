import React, { useState } from 'react'
import Navabar from './Components/Navabar'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <h1>Theme is {theme}</h1> 
      <Navabar theme = {theme} setTheme = {setTheme} />
    </div>
  )
}

export default App