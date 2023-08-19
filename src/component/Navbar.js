import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import '../App.css';
function Navbar() {
  const auth = localStorage.getItem('user');
  const navigate= new useNavigate();
  const logout=(()=>
  {
    localStorage.clear()
    navigate('/singup');
    console.log('click log out')
  })
 
  return (
    <nav>
        <ul className='nev_ul'>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update product</Link></li>
            {/* <li></li> */}
            <li><Link to='/profile'>Profile</Link></li>

            {/* Once login will Hide signup and login other wise show */}
            {
              auth ? <li><Link onClick={logout} to='/signup'>Log Out</Link></li>
              
             :
            <>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </>
            }
        </ul>
    </nav>
  )
}

export default Navbar
