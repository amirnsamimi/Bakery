import React, { useState } from 'react'
import { DynamicSvg } from '../../assets/icons/icons'
import { Form } from 'react-router-dom'
import { BlueButton, SubmitButton } from '../../styles/buttons.styles'
import { TextAreaInput, TextNormalInput } from '../../styles/inputs.styles'


const Profile = () => {
    const [orders,setOrders] = useState({ordersPlaced: 12, ordersDevlivered: 11, pendingOrders: 1})
    const {ordersPlaced,ordersDevlivered,pendingOrders} = orders


  return (
    <div className='linear-shade w-full h-full '>
        <div className='w-full  p-8 pt-32'>
             
             <div>  <h1 className='font-bold text-[2rem]'>حساب کاربری </h1>
               <p className='text-line' >شما میتوانید اطلاعات حساب کاربری خود را ویرایش کنید.</p>
               </div>

               <div className='flex mt-8 gap-8'>
                <div>
             <button> <DynamicSvg name='profile-btn' size="142"  /></button>
              </div>
              <div className='flex flex-col justify-center gap-4'>
                <h2 className='font-medium'>امیر صمیمی</h2>
                <span  className=' font-medium flex items-center gap-4'><button><DynamicSvg name="edit-outline" size="16"  color='black' /></button><h3>09124971667</h3></span>
                <div className='flex w-full gap-8 text-line' > <span>{`کل سفارشات ثبت شده: ${ordersPlaced}`}</span><span>{`سفارشات تحویل گرفته: ${ordersDevlivered}`}</span><span>{`سفارشات درحال آماده سازی: ${pendingOrders}`}</span> </div>
              </div>
              
        </div>
        <div>
          <Form className='grid max-w-[300px] gap-4'>
        <TextNormalInput value={"امیر"} />
        <TextNormalInput  value={"صمیمی"} />
        <TextNormalInput placeholder='کدپستی' />
        <TextAreaInput placeholder='آدرس'/>
          <div className='flex gap-4'>
          <BlueButton  style={{width:"165px", height:"45px"}} type="reset" > انصراف</BlueButton>   <SubmitButton  style={{width:"165px", height:"45px"}}  type="submit"> ذخیره تغییرات </SubmitButton>
          </div>
          </Form>
        </div>
        </div>
     
    </div>
  )
}

export default Profile
