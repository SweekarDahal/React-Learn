import React, { useContext } from 'react'
import { themeDataContext } from '../Context/ThemeContext';

const Button = () => {
    const [theme, setTheme] = useContext(themeDataContext);
    let isLight = true;
    const changeTheme = () => {
        if(isLight == true){
            setTheme('Dark');
            isLight = false;
        }
        else{
            setTheme('Light');
            isLight = true;
        }
    }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button