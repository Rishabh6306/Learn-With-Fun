import React, { useState } from 'react';
import avatar from './assests/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from './Utils/ValidateUtils';
import convertToBase64 from './Utils/ConvertImage';
import useFetch from './Hooks/fetchDetails';
import { updateUser } from './ApiRequest/ApiRequest';
import { useNavigate } from 'react-router-dom';

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
  if (isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;

  // Render an error message if there is a server error
  if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>;

  // JSX for the Profile component
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className='h-5/6 w-5/6' style={{ width: '45%', paddingTop: '3em' }}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              You can update the details.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                <img src={apiData?.profile || file || avatar} className='w-40 cursor-pointer' alt="avatar" />
              </label>

              <input onChange={onUpload} type="file" className="hidden" id='profile' name='profile' />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('firstName')} className='w-3/4' type="text" placeholder='FirstName' />
                <input {...formik.getFieldProps('lastName')} className='w-3/4' type="text" placeholder='LastName' />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('mobile')} className='w-3/4' type="text" placeholder='Mobile No.' />
                <input {...formik.getFieldProps('email')} className='w-3/4' type="text" placeholder='Email*' />
              </div>

              <input {...formik.getFieldProps('address')} className='w-3/4' type="text" placeholder='Address' />
              <button className='border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Update</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>come back later? <button onClick={userLogout} className='text-red-500' to="/">Logout</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}