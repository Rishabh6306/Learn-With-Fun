import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import { usernameValidate } from './Utils/ValidateUtils';
import { Toaster } from 'react-hot-toast';

function Username() {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    }
  })

  return (
    <div className='flex justify-center items-center h-screen'>
      
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='bg-[#ffffff8c] rounded-2xl shadow-lg border-2 border-[#ffffff4d] border-solid h-auto w-[35%] p-4 min-w-max'>

        <div className="flex flex-col items-center">
          <h4 className='text-4xl font-bold'>Hello Again!</h4>
          <span className='py-3 text-xs ssm:text-xl break-words text-center text-gray-500'>
            Explore More by connecting with us.
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-1'>
            <img src='./src/Components/Login&Signup/assests/profile.png' className=' border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('username')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Username' />
            <button className='border bg-indigo-500 w-full ssm:w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Let's Go</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Username;