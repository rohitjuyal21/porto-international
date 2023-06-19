import React from 'react'
import './commodities.css'

const Commodities = ({ title, image1, image2, name1, name2 }) => {
  return (
    <div className='commodities'>
        <h4 className="commodities__title">{title}</h4>
        <div className="commodities__content">
            <div className='commodities__content-item'>
                <div className='commodities__image-container'>
                    <img src={image1} alt={image1} />
                </div>
                <p className='main-text'>{name1}</p>
            </div>
            {image2 &&
            (
                <div className='commodities__content-item'>
                    <div className='commodities__image-container'>
                        <img src={image2} alt={image2} />
                    </div>
                    <p className='main-text'>{name2}</p>
                </div>
            )}
            
        </div>
    </div>
  )
}

export default Commodities