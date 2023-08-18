import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
function Navbar() {
  const auth = localStorage.getItem('user')
 
  return (
    <nav>
        <ul className='nev_ul'>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update product</Link></li>
            <li></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li>{auth?<Link to='/logout'>Log Out</Link>:<Link to='/signup'>Sign Up</Link>}</li>
        </ul>
    </nav>
  )
}

export default Navbar
