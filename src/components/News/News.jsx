import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.scss"
import { NavLink } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}


export default function News() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[{
      breakpoint: 1420,
      settings:{
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      }
    }]
  };
  return (
    <div className="slider">
      <h2>Новости</h2>
      <Slider {...settings}>
        <div className="card">
          <NavLink to="/tomsk">
            <img src="https://blackstarburger.ru/wp-content/uploads/2021/03/tomsk_11.jpg  " alt="" />
            <span className="mask">
              <span>Открытие первого ресторана в г. Томске!</span>
            </span>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/double">
            <img src="https://blackstarburger.ru/wp-content/uploads/2021/02/oblozhka_680h660.jpg" alt="" />
            <span className="mask">
              <span>Сделаем твой бургер двойным – бесплатно!</span>
            </span>
          </NavLink>
        </div>
        <div className="card">
          <NavLink to="/bro">
            <img src="https://blackstarburger.ru/wp-content/uploads/2021/02/680h660.jpg" alt="" />
            <span className="mask">
              <span>Обменяй ненужный подарок на бургер!</span>
            </span>
          </NavLink>
        </div>
      </Slider>
    </div>
  );
}


