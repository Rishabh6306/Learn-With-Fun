// Import necessary libraries and components
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from './Utils/ValidateUtils';
import { resetPassword } from './ApiRequest/ApiRequest';
import { useAuthStore } from './store/store';
import { useNavigate, Navigate } from 'react-router-dom';
import useFetch from './Hooks/fetchDetails';

// Define the Reset component
export default function Reset() {
  // Get the username from the auth store
  const { username } = useAuthStore(state => state.auth);
  const navigate = useNavigate();

  // Fetch data for reset session
  const [{ isLoading, apiData, status, serverError }] = useFetch('createResetSession');

  // Formik configuration for the reset form
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate: resetPasswordValidation, // Reset password validation function
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      // Call the resetPassword function to reset the password
      let resetPromise = resetPassword({ username, password: values.password });

      // Show a toast while resetting the password
      toast.promise(resetPromise, {
        loading: 'Updating...',
        success: <b>Reset Successfully...!</b>,
        error: <b>Could not Reset!</b>,
      });

      // After successful reset, navigate to the password page
      resetPromise.then(function () {
        navigate('/password');
      });
    }
  });

  // Render different content based on loading, server error, or status
  if (isLoading) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-white font-bold'>Please Wait...</h1></div>;
  if (serverError) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-red-500'>{serverError.message}</h1></div>;
  if (status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>;

  // JSX for the Reset component
  return (
    <div className='flex justify-center bg-center border-8  items-center h-screen' style={{backgroundImage: 'url(/Background.jpg)' }}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="title flex flex-col items-center">
          <h4 className='text-4xl font-bold mt-3'>Reset</h4>
          <span className='py-4 text-xl w-full text-center text-gray-600'>
            Enter a new password.
          </span>
        </div>

        <form className='py-10' onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="password" placeholder='New Password' />
            <input {...formik.getFieldProps('confirm_pwd')} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="password" placeholder='Repeat Password' />
            <button className='border-none bg-indigo-700  py-4 rounded-lg text-gray-50 text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Reset</button>
          </div>
        </form>

      </div>
    </div>
  );
}