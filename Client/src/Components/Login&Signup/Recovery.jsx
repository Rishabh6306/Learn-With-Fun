import React from 'react';
import { useFormik } from 'formik'
import { passwordValidate } from './Utils/ValidateUtils';
import { Toaster } from 'react-hot-toast';

function Recovery() {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
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
          <span className='py-5 text-xs ssm:text-xl break-words text-center text-gray-500'>
            Enter OTP to recover password.
          </span>
        </div>

        <form className='pt-6'>

          <div className="textbox flex flex-col items-center gap-6">
            <span className='py-4 text-sm text-left text-gray-500'>Enter 6 digit OTP sent to your email Address.</span>
            <input className='border-0 px-5 py-4 rounded-xl bg-slate-100 w-full ssm:w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='OTP' />
            <button className='border bg-indigo-500 w-full ssm:w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Recover</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>Can't get OTP ? <button className='text-red-500'>Resend</button></span>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Recovery;