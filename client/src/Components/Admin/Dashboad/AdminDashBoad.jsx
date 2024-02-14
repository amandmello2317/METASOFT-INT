import React from 'react'
import "./admindashboad.css"
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import ViewFeedback from './Table/ViewFeedback'

export default function AdminDashBoad({trig, setTrig}) {
  return (
    <div>
      {/* NavBar */}
      <div className="navbar">
        <Navbar 
          trig={trig}
          setTrig={setTrig}
        />
      </div>

      {/* Sidebar */}

      <div style={{display:"flex"}}>

        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Table */}
        <div className="table" style={{width:"80%", margin:"2px auto"}}>
          <ViewFeedback />
        </div>

      </div>



    </div>
  )
}
