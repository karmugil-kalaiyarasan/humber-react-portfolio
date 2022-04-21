import React from 'react';
import "../App.css";
import Profile from "../image/profile.jpeg";

const Header = () => {
  return (
    <div className='myself'>
    <img src={Profile} alt="Picture of Myself" />
    <h3 className='myName'>Karmugil Kalaiyarasan Kavitha</h3>
    <p className='role'>Full Stack Developer</p>
    </div>
  )
}

export default Header