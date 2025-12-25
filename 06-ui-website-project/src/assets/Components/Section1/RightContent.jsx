import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='Right' className='h-full w-2/3 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem,idx) {

          return <RightCard key={idx} id = {idx} img = {elem.img} tag = {elem.tag} description = {elem.description} color = {elem.color} />
        })}
        
    </div>

    
  )
}

export default RightContent
