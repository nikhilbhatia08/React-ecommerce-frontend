import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ContextOfCart } from '../App'

export default function Navbar(props) {
  const CartCont = useContext(ContextOfCart);
  return (
    <>
    <div className="nav">
        <li>
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link>
        </li>
        <li>
            <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>
        </li>
        <li>
            <div className="login">
            <Link to='/signin' style={{textDecoration: 'none', color: 'white'}}>Login</Link>
            <input type="text" placeholder='search' className='Inp'/>
            <button className='search'>Search</button>
            <Link to='/cart' style={{textDecoration: 'none', color: 'white'}}>
            <div className="img">
                <img src={require('./cart.png')} alt="" />
                <h5>{CartCont.cartCount}</h5>
            </div>
            </Link>
            </div>
        </li>
    </div>
    </>
  )
}
