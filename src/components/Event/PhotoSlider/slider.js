import React, { Component } from "react";
import Slick from "react-slick";
import slider from './slider.module.css';

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: false
          }
        },
      {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },

        {
          breakpoint: 940,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 560,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };
    return (
      <div className={slider.container}>
        <Slick {...settings}>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>DNA</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
             <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
          <div className={slider.card}>
            <img src="/images/head1.png" alt="" className={slider.head} />
            <p className={slider.user}>Asya</p>
            <p className={slider.folow}>1234 followers</p>
            <div className={slider.tags}>
              <p>#cook</p> <p>#Finland</p>
            </div>
            <p className={slider.button}>Follow</p>
          </div>
        </Slick>
      </div>
    );
  }
}

export default PhotoSlider;
