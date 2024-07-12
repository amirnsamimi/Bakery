import React, { useState } from 'react'


const Profile = () => {
    
    const [form,setForm] = useState({fullName:"",contact:"",inquiry:""});


  return (
    <div className='linear-shade  grid grid-cols-12 h-full '>
        <div className='col-span-12 md:col-span-6  grid items-start content-start p-8 gap-4 pt-32'>
               <h1 className='font-bold text-[2rem]'>ارتباط با ما </h1>
               <p >لطفا شکایات، نظرات و درخواست های خود را در رابطه با خدمات ما اینجا بنویسید.</p>
               <Form action='/' method='post' className='grid gap-4 justify-items-center md:justify-items-start w-full'>
               <TextInput className={"w-full"} name="fullName"  handler={(e)=>onChangeHandler(e,setForm,form)} value={form.fullName} placeholder={"نام و نام خانوادگی"} type={"text"} required={true} />
               <TextInput className={"w-full"} name="contact"  handler={(e)=>onChangeHandler(e,setForm,form)} value={form.contact} placeholder={"شماره تماس یا ایمیل"} type={"tel"} required={true} />
               <TextArea className={"w-full placeholder:flex placeholder:align-text-top"}  name="inquiry" handler={(e)=>onChangeHandler(e,setForm,form)} value={form.inquiry} placeholder={" اینجا بنویسید..."} required={true} />
                <SubmitButton> ثبت  </SubmitButton>
               </Form>
        </div>
        <div className='hidden md:col-span-6 md:flex  '>
                <img src="/assets/images/7dcc7c31b0df0e4dcf463b38ac5f0864.jpeg" className='object-cover w-full h-full' alt="" />
        </div>
    </div>
  )
}

export default Profile
