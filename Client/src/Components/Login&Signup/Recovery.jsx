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
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className='border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max rouded-2xl bg-[#ffffff8c] border-solid border-[#ffff9b4d]'>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover your password.
            </span>
          </div>

          <form className='pt-20' onSubmit={onSubmit}>

            <div className="textbox flex flex-col items-center gap-6">

              <div className="input text-center">
                <span className='py-4 text-sm text-left text-gray-500'>
                  Enter the 6-digit OTP sent to your email address.
                </span>
                <input onChange={(e) => setOTP(e.target.value)} className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none' type="text" placeholder='OTP' />
              </div>

              <button className='border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]' type='submit'>Recover</button>
            </div>
          </form>

          <div className="text-center py-4">
            <span className='text-gray-500'>Can't get OTP? <button onClick={resendOTP} className='text-red-500'>Resend</button></span>
          </div>

        </div>
      </div>
    </div>
  );
}