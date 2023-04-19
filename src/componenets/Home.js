import React from 'react'
import DisplayProducts from './DisplayProducts'
import './Home.css'
import SideBar from './SideBar'



export default function Home() {

  return (
    <>
    <div className="bodyComp">
      <SideBar/>
      <DisplayProducts/>
    </div>
    </>
  )
}


