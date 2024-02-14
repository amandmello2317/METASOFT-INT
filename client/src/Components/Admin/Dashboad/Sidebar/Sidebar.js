import React from 'react'
import "./sidebar.css"
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sideinfo'>
            <NavLink className="links">View Review</NavLink>
        </div>
    </div>
  )
}
