import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=React.useState('');
    const [password,setPasword]=React.useState('');
   const navigate = new useNavigate();

   //if any body try with url to add manully  we block with below method
   useEffect(()=>
   {
    const auth=localStorage.getItem('user');
    if(auth)
    {
        navigate("/");   
    }
   });
    // console.log(email,password)
    const handleLogin=async()=>
    {
        if(email && password)
        {
            let result=await fetch('http://localhost:5000/login',{
                method:'post',
                //but we cannot send like this api not accept this
                //body:{email,password}

                //because API accept JSON format this will work
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                },
            });
            result= await result.json();
            if(result.name)
            {
            
                localStorage.setItem('user',JSON.stringify(result));
                navigate('/')
            }
            else
            {
                alert('No record found');
            }
            console.log(result)
        }
        else{
            alert('Both Email and Password Required')
        }
    }
    return(
        <div className='signup-div'>
            <h1>Login</h1>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='inputBox' type="text" placeholder='Enter Email'/>
            <input value={password} onChange={(e)=>setPasword(e.target.value)}  className='inputBox'  type="password" placeholder='Enter password'/>
            <button onClick={handleLogin}  className="btnLogup" type='button'>Log In</button>
        </div>
    )
}

export default Login
