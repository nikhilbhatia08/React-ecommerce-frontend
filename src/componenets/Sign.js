import React from 'react'
import './Sign.css'

export default function Sign() {
  return (
    <>
    <div className="card">
        <h1>Sign In</h1>
        <input type="email" className='inp' name="" id="" placeholder='Enter username'/>
        <input type="email" className="inp" placeholder='Enter password'/>
        <input type="email" className="inp" placeholder='Confirm Password'/>
        <button className="sign">Sign In</button>
        <h3 className='h3'>OR</h3>
    </div>
    </>
  )
}
