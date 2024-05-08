import React from 'react'
import { SignupForm } from '../Components/Core/Auth/SignupForm';
 const Signup = ({setISLoggedIn}) => {

  return (
     <div className=" text-white flex justify-center items-center w-full h-[100vh] " style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/254383.jpg")', 
    backgroundSize: 'cover'}}>
     <div className='text-black absolute left-10 top-20 '>
        <h1 className='text-[50px] text-orange-600 '>Welcome To Our <span className='italic text-gray-300 text-7xl'>Airline</span> </h1>
        <pre className=' absolute text-[30px] text-gray-400'>Register Your Account...             <br/>
        <span className='text-green-600 pl-20'>And Start Your Journey With Us!🙌</span> </pre>
    </div>
    <SignupForm
      formtype="signup"
    setISLoggedIn={setISLoggedIn}
    />
    </div>
  )
  
}
export default Signup;