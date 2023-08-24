import { useState } from 'react'
import React  from 'react'
import axios from 'axios'

const Profile = (props) => {
  const [file, setFile] = useState()
    const upload = () => {
      const formData = new FormData()
      formData.append('file', file)
      axios.post('http://localhost:5000/image',formData )
      .then( res => {})
      .catch(er => console.log(er))
    }
  return (
    <div className='profile'>
      <h1>Name: {props.Name}</h1>
      <h1>Email: {props.Email}</h1>
      <div className='profile-dev' >
        <img className='uploded-imag' src="https://www.shutterstock.com/shutterstock/photos/2172716439/display_1500/stock-vector-phone-shop-logo-designs-modern-phone-logo-designs-vector-icon-app-media-business-technology-2172716439.jpg" alt="" />
        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <button type="button" onClick={upload}>Upload</button>
      </div>
    </div>
  )
}

export default Profile
