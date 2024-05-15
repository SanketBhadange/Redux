import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const items= useSelector(state =>state.cart)
  return (
    <div className='cartWrapper'>
    {
      items.map(item => {
        return <div className='cartCard'>
          <img src={item.image} alt='product'/>
          <h5>{item.title}</h5>
          <h5>Price: ${item.price}</h5>

          
        </div>
      })
    }
  </div>
  )
}

export default Cart