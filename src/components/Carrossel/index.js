import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from './styles';

export default function Carrossel() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };

  return (
    <Container>
      <Slider {...settings}>
        <Card>
          <img src={"https://b1957982.smushcdn.com/1957982/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-11.31.44-560x600.png?lossy=1&strip=1&webp=1"} />
        </Card>

        <Card>
          <img src={"https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/11/Bolsa_caindo_04-590x354.jpg?lossy=1&strip=1&webp=1"} />
        </Card>

        <Card>
          <img src={"https://b1957982.smushcdn.com/1957982/wp-content/uploads/2022/07/bitcoin-400x240.jpg?lossy=1&strip=1&webp=1"} />
        </Card>
      </Slider>
    </Container>
  );
}