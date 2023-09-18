import React from 'react';
import { useFormik } from 'formik'
import { resetPasswordValidation } from './Utils/ValidateUtils';
import { Toaster } from 'react-hot-toast';

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: '',
    },
    validate: resetPasswordValidation,
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
          <h4 className='text-4xl font-bold'>Reset Password</h4>
          <span className='py-3 text-xs ssm:text-xl break-words text-center text-gray-500'>
            Enter New Password
          </span>
        </div>

        <form className='py-12' onSubmit={formik.handleSubmit}>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='New Password' />
            <input {...formik.getFieldProps('confirm_pwd')} className='bg-gray-100 border-0 px-5 py-4 rounded-xl w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Confirm Password' />
            <button className='border bg-indigo-500 w-full ssm:w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Reset</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Reset;