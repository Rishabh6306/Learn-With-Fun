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
      password: 'admin@123' // Default password value
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
  if (isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;

  // Render an error message if there is a server error
  if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>;

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className='border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max rouded-2xl bg-[#ffffff8c] border-solid border-[#ffff9b4d]'>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello {apiData?.firstName || apiData?.username}</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={apiData?.profile || avatar} className='border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200]' alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              {/* Password input field */}
              <input {...formik.getFieldProps('password')} className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none' type="password" placeholder='Password' />
              
              {/* Sign in button */}
              <button className='border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Sign In</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}