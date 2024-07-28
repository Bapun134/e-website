import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false
  };

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const imageStyle = {
    width: '100%', // Fixed width for the image
    height: '400px', // Fixed height for the image
  };

  return (
    <Slider {...settings}>
      <div style={containerStyle}>
        <img src="/assets/img1.jpg" alt="Slide 1" style={imageStyle} />
      </div>
      <div style={containerStyle}>
        <img src="/assets/img4.jpg" alt="Slide 2" style={imageStyle} />
      </div>
      <div style={containerStyle}>
        <img src="/assets/img3.jpg" alt="Slide 3" style={imageStyle} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
