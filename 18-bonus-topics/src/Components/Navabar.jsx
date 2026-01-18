import React from 'react'

const Navabar = (props) => {
  let isLight = true;
  const btnclicked = () => {
    if(isLight == true){
    props.setTheme('Dark');
    isLight = false;
    }
    else{
      props.setTheme('Light');
      isLight = true;
    }
  }
  return (
    <div>
      <p>{props.theme}</p>
      <button onClick={btnclicked}>Change theme</button>
    </div>
  )
}

export default Navabar