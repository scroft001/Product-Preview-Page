import React from 'react'
import {Description, Price, BuyButton} from '../../components'
// import DesktopImage from '../../images/image-product-desktop.jpg';
import './card.scss';

//use state to change image based on screen size

const Card = () => {
  return (
    <section className='app__card'>
      <div className='app__card-image'></div>
        {/* <img src={DesktopImage} alt='product preview' /> */}
        <div className='app__card-info'>
          <Description />
          <Price />
          <BuyButton />
        </div>
        
    </section>
  )
}

export default Card
