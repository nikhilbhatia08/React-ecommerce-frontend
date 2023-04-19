import React, { useContext } from 'react'
import './SideBarOfCart.css'
import { ContextOfCart } from '../App'

export default function SideBarOfCart() {
    const CartSt = useContext(ContextOfCart)
  return (
    <>
    <div className="side">
        <div className="subtotal">
            <h2>subtotal - {CartSt.CartTotal}</h2>
        </div>
        <div className="shipping">
            <h2>Shipping charges - </h2>
        </div>
        <div className="total">
            <h1>Total - </h1>
        </div>
        <div className="buttt">
            <button className='butt'>Proceed</button>
        </div>
    </div>
    </>
  )
}
