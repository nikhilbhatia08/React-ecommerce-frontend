import React, { useContext } from 'react'
import './ItemCard.css'
import { ContextOfCart } from '../App'

export default function ItemCard(props) {
  const CartCont = useContext(ContextOfCart);
  return (
    <div className="cardi">
            <img src={require(`${props.link}`)} alt="img" className='image'/>
        <div className="title">
            <h2>{props.title}</h2>
        </div>
        <div className="desription">
            <p>{props.description}</p>
        </div>
        <div className="price">
            <p>price - {props.price}</p>
        </div>
        <button className="add" onClick={() => {
          CartCont.dispatch({
            type : "ADD",
            title : props.title,
            link : props.link,
            price : props.price,
            description : props.description,
            qty : 1
          })
        }}>Add To Cart</button>
    </div>
  )
}
