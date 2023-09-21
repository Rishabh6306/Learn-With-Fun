import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from './assests/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from './Utils/ValidateUtils';
import useFetch from './Hooks/fetchDetails';
import { useAuthStore } from './store/store';
import { verifyPassword } from './ApiRequest/ApiRequest';

export default function Password() {
  const navigate = useNavigate();

  // Get the username from the authentication store
  const { username } = useAuthStore(state => state.auth);

  // Fetch user details using a custom hook
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);

  // Formik configuration for the password form
  const formik = useFormik({
    initialValues: {
      password: '' // Default password value
    },
    validate: passwordValidate, // Password validation function
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      // Attempt to verify the user's password
      let loginPromise = verifyPassword({ username, password: values.password });

      // Show a loading toast while verifying
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/home'); // Redirect to the home page on successful login
      });
    }
  });

  // Render loading message while fetching user data
  if (isLoading) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-white font-bold'>Please Wait...</h1></div>;

  // Render an error message if there is a server error
  if (serverError) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-red-500'>{serverError.message}</h1></div>;

  return (
    <div className='flex justify-center bg-center h-auto lg:h-screen border-8 border-solid items-center py-10' style={{backgroundImage: 'url(/Background.jpg)' }}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="flex flex-col items-center">
          <h4 className='text-3xl ssm:text-5xl font-bold m-2 w-44 ssm:w-60 md:w-80 break-words ssm:my-4 sm:mt-0 text-center'>Hello <span className='text-orange-600 text-2xl sm:text-3xl'>{apiData?.firstName || apiData?.username}</span></h4>
          <span className='py-3 text-xl w-44 ssm:w-60 md:w-80 break-words text-center text-gray-600'>
            Welcome to Learn with Fun!
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='flex justify-center py-4'>
            <img src={apiData?.profile || avatar} className='border-4 border-gray-100 h-32 w-32 ssm:w-36 ssm:h-36 rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            {/* Password input field */}
            <input {...formik.getFieldProps('password')} min={4} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="password" placeholder='Password' />

            {/* Sign in button */}
            <button className='border-none bg-indigo-700 py-4 rounded-lg text-gray-50 text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Sign In</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-600'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}