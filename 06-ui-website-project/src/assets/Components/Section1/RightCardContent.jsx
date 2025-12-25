import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-70  p-6 flex flex-col justify-between'>
        <h2 className='bg-white h-9 w-9 text-xl font-semibold rounded-full flex justify-center items-center'>{props.id + 1}</h2>
        <div>
            <p className='text-shadow-2xs text-lg leading-normal text-white mb-8'> {props.description} </p>
            <div className='flex justify-between'>
            <button style={{backgroundColor : props.color}} className='text-white py-3 px-7 font-medium rounded-full cursor-pointer'> {props.tag} </button>
            <button style={{backgroundColor : props.color}} className='text-white py-3 px-4 rounded-full font-medium cursor-pointer'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent