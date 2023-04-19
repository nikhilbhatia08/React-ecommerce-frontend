import React from 'react'
import './SideBar.css'
function SideBar() {
  return (
    <>
    <div className="bar">
        <h2>Filter Products</h2>
        <div className="filter"><input type="checkbox"/><p>Ascending</p></div>
        <div className="filter"><input type="checkbox"/><p>Descending</p></div>
        <div className="filter"><input type="checkbox"/><p>Fast delivery only</p></div>
        <button className='clear'>Clear Filters</button>
    </div>
    </>
  )
}

export default SideBar