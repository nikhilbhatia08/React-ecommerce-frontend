import React, { useContext } from 'react'
import './ProdOfCart.css'
import { ContextOfCart } from '../App'
import CardOfCart from './CardOfCart';
import SideBarOfCart from './SideBarOfCart';

export default function ProdOfCart() {
    const CartState = useContext(ContextOfCart);
    console.log(CartState.cart)
  return (
    <>
    <div className="page">
    <div className="prodofcart">
        <h1>the items are : </h1>
        {CartState.cart.map((item,idx)=>(
           <CardOfCart key={idx} link={item.link} title={item.title} price={item.price} qty={item.qty}/> 
        ))}
    </div>
    <SideBarOfCart/>
    </div>
    </>
  )
}
