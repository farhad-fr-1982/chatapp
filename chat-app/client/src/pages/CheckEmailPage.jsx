import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";


const CheckEmailPage = () => {
  const [data,setData] = useState({
    email : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`

    try {
        const response = await axios.post(URL,data)

        toast.success(response.data.message)

        if(response.data.success){
            setData({
              email : "",
            })
            navigate('/password',{
              state : response?.data?.data
            })
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
  }



  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>
        
      <div className='w-fit mx-auto mb-2'>
                <PiUserCircle className='text-[#00acb4]' size={80}/>
            </div>

        <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
          
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>ایمیل :</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='ایمیل را وارد نمایید...'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required />
          </div>

         
          <button className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>ثبت نام</button>

        </form>

        <p className='my-3 text-center'>ثبت نام جدید ؟ <Link to={"/register"} className='hover:text-primary font-semibold'>ثبت نام</Link></p>

      </div>
    </div>
  )
}

export default CheckEmailPage
