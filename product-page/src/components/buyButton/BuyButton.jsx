import React from 'react'
import './buyButton.scss'
import cart from '../../images/icon-cart.svg'

const BuyButton = () => {
  return (
    <div className='app__buy'>
      <img src={cart} alt='cart' />
      <p>Add to Cart</p>
    </div>
  )
}

export default BuyButton