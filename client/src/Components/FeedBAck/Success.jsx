import { Button, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Success({setSubmit}) {
  return (
    <div style={{ display: 'flex', justifyContent: "center" }}>
      <Paper elevation={20} sx={{ height: "50%", width: "50%" }}>
        <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column' }}>

          <img src="https://assets-global.website-files.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png" alt="" />

          <div style={{margin:"10px auto", marginBottom:"20px"}}>
            <button style={{padding:"10px", color: "white", textDecoration: "none", backgroundColor: "green", width: "220px", borderRadius: "20px", textAlign: "center", cursor:"pointer" }} onClick={() => setSubmit(false)}>SUBMIT OTHER FORM</button>

          </div>

        </div>
      </Paper>

    </div>
  )
}
