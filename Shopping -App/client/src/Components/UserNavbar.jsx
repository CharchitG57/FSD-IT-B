import React from 'react'
import {Link } from 'react-router-dom'
import './UserNavbar.css'
const UserNavbar = () => {
  return (
    <div className='navbar'>
      Welcome user 
      <Link to="/cart">View Cart</Link>
      <Link to="/order">View Order</Link>
      <Link to="/profile">View Profile</Link>
      <Link to="/logout">logout</Link>
    </div>
  )
}

export default UserNavbar
