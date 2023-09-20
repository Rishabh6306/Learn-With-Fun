import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from './assests/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from './Utils/ValidateUtils';
import convertToBase64 from './Utils/ConvertImage';
import { registerUser } from './ApiRequest/ApiRequest';

export default function Register() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  // Formik configuration for the registration form
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidation, // Registration validation function
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' });
      let registerPromise = registerUser(values);

      // Show a toast while registering the user
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(function () {
        navigate('/');
      });
    },
  });

  // Function to handle file upload (since Formik doesn't support file inputs directly)
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  // JSX for the Registration component
  return (

    <div className='flex justify-center  bg-[url(./src/Components/Login&Signup/assests/Background.jpg)] bg-center border-8  items-center py-10'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="flex flex-col items-center">
          <h4 className='text-3xl ssm:text-5xl font-bold m-2 ssm:my-3 sm:mt-0 text-center'>Register</h4>
          <span className='py-3 text-xl w-60 ssm:max-w-7/12 break-words text-center text-gray-600'>
            Happy to join you!
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor="profile">
              <img src={file || avatar} className='border-4 border-gray-100 h-32 w-32 ssm:w-36 ssm:h-36 rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
            </label>

            <input onChange={onUpload} type="file" className="hidden" id='profile' name='profile' />
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-2 w-full">
              <input {...formik.getFieldProps('email')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="email" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='Username*' />

            </div>
            <input {...formik.getFieldProps('password')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='Password*' />
            <button className='border-none bg-indigo-700  py-4 rounded-lg text-gray-50 text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Register</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-600'>Already Registered? <Link className='text-red-500' to="/">Login Now</Link></span>
          </div>

        </form>

      </div>
    </div>
  );
}