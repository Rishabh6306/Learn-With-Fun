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
      password: 'admin@123',
      confirm_pwd: 'admin@123'
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
  if (isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>;
  if (status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>;

  // JSX for the Reset component
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className='border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max rouded-2xl bg-[#ffffff8c] border-solid border-[#ffff9b4d]' style={{ width: "50%" }}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter a new password.
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_pwd')} className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='Repeat Password' />
              <button className='border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Reset</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}