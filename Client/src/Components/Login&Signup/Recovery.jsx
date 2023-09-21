import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/store';
import { generateOTP, verifyOTP } from './ApiRequest/ApiRequest';
import { useNavigate } from 'react-router-dom';

export default function Recovery() {
  const { username } = useAuthStore(state => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();

  // useEffect to generate OTP when the component mounts
  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success('OTP has been sent to your email!');
      return toast.error('Problem while generating OTP!');
    });
  }, [username]);

  // Function to handle OTP submission
  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success('Verification Successful!');
        return navigate('/reset');
      }
    } catch (error) {
      return toast.error('Wrong OTP! Check your email again.');
    }
  }

  // Handler function to resend OTP
  function resendOTP() {
    let sentPromise = generateOTP(username);

    toast.promise(sentPromise, {
      loading: 'Sending...',
      success: <b>OTP has been sent to your email!</b>,
      error: <b>Could not Send it!</b>,
    });

    sentPromise.then((OTP) => {
      console.log(OTP);
    });
  }

  return (
    <div className='flex justify-center bg-center border-8 items-center h-screen' style={{backgroundImage: 'url(/Background.jpg)' }}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='border-y-4 border-white shadow-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-3xl p-2 sm:p-5 min-w-max bg-blue-500 border-solid border-[#ffff9b4d]'>

        <div className="flex flex-col items-center">
          <h4 className='text-3xl ssm:text-5xl font-bold m-2 ssm:my-4 sm:mt-0 text-center'>Recovery</h4>
          <span className='py-3 text-xl w-60 ssm:w-11/12 break-words text-center text-gray-600'>
            Enter OTP to recover your password.
          </span>
        </div>

        <form className='pt-10' onSubmit={onSubmit}>

          <div className="flex flex-col items-center gap-6">

            <div className="flex flex-col items-center gap-6 w-full">
              <span className='py-4 text-sm sm:text-[1rem] text-green-900 w-60 ssm:w-11/12  break-words'>
                Enter the 6-digit OTP sent to your email address.
              </span>
              <input onChange={(e) => setOTP(e.target.value)} className='border-0 px-5 py-4 rounded-xl w-full shadow-sm text-lg focus:outline-none' type="number" placeholder='OTP' />
            </div>

            <button className='border-none bg-indigo-700 py-4 rounded-lg text-xl w-full shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Recover</button>
          </div>
        </form>

        <div className="text-center py-4">
          <span className='text-gray-600'>Can't get OTP? <button onClick={resendOTP} className='text-red-500'>Resend</button></span>
        </div>

      </div>
    </div>
  );
}