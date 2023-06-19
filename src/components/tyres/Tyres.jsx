import React from 'react'
import './tyres.css'

const Tyres = ({ image, title, description, logo}) => {
  return (
    <div className='tyres'>
        <a href="" className='tyres__product-image_container'>
            <img className='tyres__product-image' src={image} alt="product image" />
        </a>
        <div className="tyres__detail">
            <h4>{title}</h4>
            <p className='main-text'>{description}</p>
            <a href="">
                <img className='tyres__product-logo' src={logo} alt="logo" />
            </a>
        </div>
    </div>
  )
}

export default Tyres