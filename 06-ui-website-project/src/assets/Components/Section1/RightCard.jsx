import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-64 overflow-hidden relative rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt={'Pic' +  props.id + 1} />
      <RightCardContent tag = {props.tag} description = {props.description} id={props.id} color = {props.color} />
    </div>
  )
}

export default RightCard
