import React,{useEffect, useState} from 'react'

//for redirect home page
import {useNavigate} from 'react-router-dom'

const SignUp =()=>
{
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');
    const [email, setEmail]=useState('');
    const navigate = new useNavigate();
    
    ////if any body try with url to add manully  we block with below method
    useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth)
      {
        navigate('/')
      }
    })
    const collectdata= async()=>
    {
        //console.log(name);
        //console.log(email);
        //console.log(password);
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            //but we cannot send like this api not accept this
            //body:{name,email,password}

            //because API accept JSON format this will work
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            },
        });
        result= await result.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result))
        if(result)
        {
            navigate('/')

        }
    }

    return(
        <div className='signup-div'>
            <h1>Register</h1>
            <input className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Name'/>
            <input className='inputBox'value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email'/>
            
            <input className='inputBox' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Enter password'/>
            <button onClick={collectdata} className="btnLogup" type='button'>Log Up</button>
        </div>
    )
}
export default SignUp;