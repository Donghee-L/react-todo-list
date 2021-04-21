import React from 'react';
import './main.css';
import logo from './logo.svg'

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='flex'>
        <img src={logo} alt='logo'/>
        <h2 className='font-white'>TodoList</h2>
      </div>      
    </div>
  )
}
