import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { themeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
    const [theme] = useContext(themeDataContext);
  return (
    <div className={theme}>
        <h1>Sweekar</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar