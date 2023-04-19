import React, { useContext, useState } from 'react'
import './CardOfCart.css'
import { ContextOfCart } from '../App';
export default function CardOfCart(props) {
    const CartSt = useContext(ContextOfCart)
    const [count, setCount] = useState(1);
  return (
    <>
    <div className="cardofcart">
       <img src={require(`${props.link}`)} alt="prod image" className='imageOfCart'/>
       <div className="title-1">
        <h1>{props.title}</h1>
       </div>
        <button className="ADD" onClick={()=>{setCount(count + 1);CartSt.dispatch({
            type : "ADD_TOT",
            price : props.price,
            title : props.title,
            qtyCount : count
        })}}>+</button>
        <div className="qty">
            <p>{props.qty}</p>
        </div>
        <button className="SUB" onClick={()=>{setCount(count - 1);CartSt.dispatch({
            type : "SUB_TOT",
            title : props.title,
            price : props.price,
            qtyCount : count
        });}}>-</button>
        <div className="price">
            <p>{props.price*props.qty}</p>
        </div>
        <button className="remove">Remove From Cart</button>
    </div>
    </>
  )
}