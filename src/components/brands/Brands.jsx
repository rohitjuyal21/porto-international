import React from 'react';
import './brands.css'
import ferentio from '../../assets/logo-ferentio-1.png'
import porto_tyre from '../../assets/porto-tyres-2.png'
import sentinal from '../../assets/logo-sentinel.png'
import arton from '../../assets/logo-artron.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Brands = () => {
  const brandItems = [
    ferentio,
    porto_tyre,
    sentinal,
    arton
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
  };

  return (
    <div className="brands">
      <div className="brands__container">
        <div className='brands__content'>
          <h1 className='brands__content-heading main-heading'>Our Brands</h1>
          <Slider {...settings}>
            {brandItems.map((item, index) => (
              <div className="logo__container" key={index}>
                <img src={item} alt="logo" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Brands