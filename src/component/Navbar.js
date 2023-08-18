import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
function Navbar() {
  return (
    <nav>
        <ul className='nev_ul'>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update product</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
