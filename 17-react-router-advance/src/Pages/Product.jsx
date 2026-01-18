import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center items-center gap-10'>
            <Link to='/product/mens' className='text-lg font-semibold' >Mens</Link>
            <Link to='/product/womens' className='text-lg font-semibold' >Womens</Link>
            <Link to='/product/kids' className='text-lg font-semibold' >Kids</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Product