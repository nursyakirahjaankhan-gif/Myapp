import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <header className="nav">
      <div className="brand">
        <img src="/logo-normal-scs.png" alt="System Consultancy Services SCS logo" style={{ width: "300px" }} />System Consultancy Services</div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/report" className={({ isActive }) => isActive ? 'active' : ''}>Report</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
      </nav>
    </header>
  )
}