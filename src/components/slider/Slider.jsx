import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import { sliderContent } from './SliderContent';
import './slider.css'

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        className='carousel'
        navButtonsAlwaysVisible={true}>
        {sliderContent.map((item) =>
          <Item item={item} key={item.id} />
        )}
      </Carousel>
    </div>
  )
}

export default Slider