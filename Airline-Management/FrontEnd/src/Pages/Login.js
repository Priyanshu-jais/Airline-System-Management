import React from 'react'

import { LoginForm } from '../Components/Core/Auth/LoginForm';
 const Login = ({setISLoggedIn}) => {
  return (
    <div className=" flex justify-center items-center w-full h-[100vh]" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/254367.png")', 
    backgroundSize: 'cover'}}> 
    <LoginForm formtype="login"
     setISLoggedIn={setISLoggedIn}/>
    </div>
  )
}
 export default Login;