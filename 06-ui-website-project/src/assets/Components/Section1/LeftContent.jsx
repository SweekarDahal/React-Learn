import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText.jsx'
import Arrow from './Arrow.jsx'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  pl-7 pr-3 pb-5 pt-10 flex flex-col justify-between'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent
