import React from 'react'
import ItemCard from './ItemCard'
import './DisplayProducts.css'
import Product from './Product'

export default function DisplayProducts() {
  return (
    <>
    <div className="prod">
        {Product.map((item,index) => (
            <ItemCard key={index} link={item.link} title={item.title} description={item.description} price={item.price} className='item1'/>
        ))}
    </div>
    </>
  )
}
