import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  return (
    <div className='pt-5 pb-20 flex justify-between gap-10 h-[80vh] '>
      <LeftContent />
      <RightContent users = {props.users} />
    </div>
  )
}

export default Page1Content
