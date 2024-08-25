import { banner1, banner10, banner12, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9 } from '@/Config';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Herosection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    adaptiveHeight:true
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={banner3} className="d-block bannerImage" alt="..." />
        </div>
          <img src={banner2} className="d-block bannerImage" alt="..." />
          <img src={banner1} className="d-block bannerImage" alt="..." />
          <img src={banner4} className="d-block bannerImage" alt="..." />
          <img src={banner5} className="d-block bannerImage" alt="..." />
          <img src={banner6} className="d-block bannerImage" alt="..." />
          <img src={banner7} className="d-block bannerImage" alt="..." />
          <img src={banner8} className="d-block bannerImage" alt="..." />
          <img src={banner9} className="d-block bannerImage" alt="..." />
          <img src={banner12} className="d-block bannerImage" alt="..." />
      </Slider>
      <style jsx>{ `
      .bannerImage {
   height: 400px; /* Set the height of the container */
  object-fit: cover; /* Ensures the image covers the container */
  object-position: center; /* Aligns the image to the bottom */
  width: 100%;
}
      `}</style>
    </div>
  );
};

export default Herosection;
