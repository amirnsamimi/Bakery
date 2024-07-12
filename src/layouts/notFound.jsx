import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='linear-shade flex justify-center w-full h-full items-center text-[1.5rem] flex-col gap-8'>
      <h1 className='text-3rem font-extrabold'> 404 </h1>
      صفحه مورد نظر شما پیدا نشد.
      <Link to="/" className='border border-blueButton text-primary p-4 rounded-2xl text-[1rem]'>
      بازگشت به صفحه خانه
      </Link>
    </div>
  )
}

export default NotFound
