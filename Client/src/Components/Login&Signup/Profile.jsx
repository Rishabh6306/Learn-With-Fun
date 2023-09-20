import React, { useState } from 'react';
import avatar from './assests/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from './Utils/ValidateUtils';
import convertToBase64 from './Utils/ConvertImage';
import useFetch from './Hooks/fetchDetails';
import { updateUser } from './ApiRequest/ApiRequest';
import { useNavigate } from 'react-router-dom';
import { GiFastBackwardButton } from 'react-icons/gi'


export default function Profile() {
  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();

  // Formik configuration for the profile form
  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || '',
      lastName: apiData?.lastName || '',
      email: apiData?.email || '',
      mobile: apiData?.mobile || '',
      address: apiData?.address || '',
    },
    enableReinitialize: true,
    validate: profileValidation, // Profile validation function
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || apiData?.profile || '' });
      let updatePromise = updateUser(values);

      // Show a toast while updating the profile
      toast.promise(updatePromise, {
        loading: 'Updating...',
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
  });

  // Handler for file upload (since Formik doesn't support file inputs directly)
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  // Handler function for user logout
  function userLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  // Render loading message while fetching user data
  if (isLoading) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-white font-bold'>Please Wait...</h1></div>;;

  // Render an error message if there is a server error
  if (serverError) return <div className='bg-blue-950 flex items-center justify-center h-screen'><h1 className='text-2xl text-red-500'>{serverError.message}</h1></div>;

  // JSX for the Profile component
  return (
    <div className='flex  justify-center bg-[url(./src/Components/Login&Signup/assests/Background.jpg)] bg-center border-8 items-center py-10'>
          <Toaster position='top-center' reverseOrder={false}></Toaster>
   

      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="flex flex-col items-center">
          <h4 className='text-3xl ssm:text-5xl font-bold m-2 ssm:my-4 sm:mt-0 text-center'>Profile</h4>
          <span className='py-3 text-xl w-60 ssm:max-w-7/12 break-words text-center text-gray-600'>
            You can update the details.
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='flex justify-center py-4'>
            <label htmlFor="profile">
              <img src={apiData?.profile || file || avatar} className='border-4 border-gray-300 h-32 w-32 ssm:w-36 ssm:h-36 rounded-full shadow-lg cursor-pointer hover:border-gray-200' alt="avatar" />
            </label>

            <input onChange={onUpload} type="file" className="hidden" id='profile' name='profile' />
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-2 w-full">
              <input {...formik.getFieldProps('firstName')} className='border-0  px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='FirstName' />
              <input {...formik.getFieldProps('lastName')} className='border-0  px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='LastName' />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-2 w-full">
              <input {...formik.getFieldProps('mobile')} className='border-0  px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="tel" minlength="10" maxlength="10" placeholder='Mobile No.' />
              <input {...formik.getFieldProps('email')} className='border-0  px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="email" placeholder='Email*' />
            </div>

            <input {...formik.getFieldProps('address')} className='border-0  px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="text" placeholder='Address' />
            <button className='border-none bg-indigo-700 py-4 rounded-lg text-gray-50 text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Update</button>
          </div>

          <div className="text-center py-4">
            <span className='text-gray-600'>come back later? <button onClick={userLogout} className='text-red-500' to="/">Logout</button></span>
          </div>
        </form>
      </div>
    </div>
  );
}