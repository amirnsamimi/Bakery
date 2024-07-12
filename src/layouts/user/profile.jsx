import React from 'react'


const Profile = () => {
    



  return (
    <div className='linear-shade  grid grid-cols-12 h-full '>
        <div className='col-span-12 md:col-span-6  grid items-start content-start p-8 gap-4 pt-32'>
               <h1 className='font-bold text-[2rem]'>ارتباط با ما </h1>
               <p >لطفا شکایات، نظرات و درخواست های خود را در رابطه با خدمات ما اینجا بنویسید.</p>
        </div>
        <div className='hidden md:col-span-6 md:flex  '>
                <img src="/assets/images/7dcc7c31b0df0e4dcf463b38ac5f0864.jpeg" className='object-cover w-full h-full' alt="" />
        </div>
    </div>
  )
}

export default Profile
