import React from 'react'
import {Card, Description, Price, BuyButton} from './components'
import DesktopImage from '../../images/image-product-desktop.jpg';
import './card.scss';

//use state to change image based on screen size

const Card = () => {
  return (
    <section className='app__card'>
        <img src={DesktopImage} alt='product preview' />
        <Description />
        <Price />
        <BuyButton />
    </section>
  )
}

export default Card
