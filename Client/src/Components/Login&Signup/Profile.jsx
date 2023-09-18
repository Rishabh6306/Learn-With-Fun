import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import { Toaster } from 'react-hot-toast';
import { passwordValidate } from './Utils/ValidateUtils';
import ConvertToBase64 from './Utils/ConvertImage';

function Profile() {
const [ file , setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'example123@gmail.com',
      username: 'user123',
      password: 'example@123',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values);
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async(e) => {
    const base64 = await ConvertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='bg-[#ffffff8c] rounded-2xl shadow-lg border-2 border-[#ffffff4d] border-solid h-auto w-[35%] p-4 min-w-max'>

        <div className="flex flex-col items-center">
          <h4 className='text-4xl font-bold'>Profile</h4>
          <span className='py-3 text-xs ssm:text-xl break-words text-center text-gray-500'>
           You can Update the Details.
          </span>
        </div>

        <form className='pt-3' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-1'>
            <label htmlFor="profile">
            <img src={file || "./src/Components/Login&Signup/assests/profile.png"} className='border-4 border-gray-100 rounded-full shadow-lg w-40 h-40 cursor-pointer hover:border-gray-200' alt="avatar" />
            </label>

            <input onChange={onUpload} type="file" name="profile" id="profile" className='hidden' />
          </div>

          <div className="textbox flex flex-col items-center gap-6 pt-5">
            <div className="flex w-3/4 gap-8">
            <input {...formik.getFieldProps('firstName')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='FirstName..' />
            <input {...formik.getFieldProps('lastName')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='LastName..' />
            </div>

            <input {...formik.getFieldProps('email')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Email..' />
            <input {...formik.getFieldProps('username')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Username..' />
            <input {...formik.getFieldProps('password')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Password..' />
            <button className='border bg-indigo-500 w-full ssm:w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Update</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Come in later ? <Link className='text-red-500' to="/">Logout
            </Link></span>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Profile;