import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <Navbar />
      <Button />
    </div>
  )
}

export default App