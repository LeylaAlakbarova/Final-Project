import { useState } from "react";
import style from "./adsSlider.module.css";
import Slider from "react-slick";
import iPhones from "../../assets/images/iPhone 12s.png";

const AdsSlider = () => {
  const [active, setActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    afterChange: (current) => setActive(current),
    customPaging: (i) => (
      <div className={`${active == i ? style.active : ""} ${style.sliderDot}`}>
        <button className={style.dot}></button>
      </div>
    ),
    responsive: [
      {
        breakpoint: 720,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider className={style.slider} {...settings}>
      <div className={style.slide}>
        <div className={style.left}>
          <h2>
            Online shopping
            <br />
            Worldwide shipping
          </h2>
          <p>
          Explore a global marketplace with seamless online shopping and enjoy the convenience of worldwide shipping at your fingertips. 
          </p>
        </div>
        <img src={iPhones} alt="iPhone 12s" />
      </div>
      <div className={style.slide}>
        <div className={style.left}>
          <h2>
            New features
            <br />
            Explore new features.
          </h2>
          <p>
            The greatest innovation of the century.
          </p>
        </div>
        <img src={iPhones} alt="iPhone 12s" />
      </div>
      <div className={style.slide}>
        <div className={style.left}>
          <h2>
            Buy & Sell
            <br />
            What's new Now & Next
          </h2>
          <p>
            Buy and sell the trending products.
          </p>
        </div>
        <img src={iPhones} alt="iPhone 12s" />
      </div>
    </Slider>
  );
};

export default AdsSlider;
