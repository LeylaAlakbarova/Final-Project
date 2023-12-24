import { Link } from "react-router-dom";
import style from "./brandsSlider.module.css";
import Slider from "react-slick";
import { useState, Component } from "react";

class CustomSlide extends Component {
  render() {
    const { to, className, img } = this.props;
    return (
      <Link to={to} className={className}>
        <img src={img} alt="Brand" />
      </Link>
    );
  }
}

const BrandsSlider = ({ brands }) => {
  const [active, setActive] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Slider className={`brands ${style.brands}`} {...settings}>
      {brands.map((brand) => {
        return (
          <CustomSlide
            index={brand.id}
            to={brand.link}
            className={style.brand}
            img={brand.img}
            key={brand.id}
          />
        );
      })}
    </Slider>
  );
};

export default BrandsSlider;
