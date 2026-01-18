import React, { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext'

const Nav2 = () => {
    let [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Qualification</h4>
        <h4>{theme}</h4>
    </div>
  )
}

export default Nav2