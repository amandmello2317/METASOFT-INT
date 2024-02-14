import React from 'react'
import "./navbar.css"


export default function Navbar({trig, setTrig}) {

  const handleClick = () => {
    localStorage.clear()
    setTrig(!trig)
  }
  return (
  
      <div className="navinfo">
        <div className="navlogo">
            DASHBOAD
        </div>
        <div className="navlogin">
          <button className='logoutbtn' onClick={handleClick}>Logout</button>
        </div>
      </div>
  
  )
}
