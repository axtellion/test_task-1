import Slider from 'react-slick';
import { SlidImg, Title, Container } from './Slider.styled';

import slid_1 from '../../images/slider_1.jpg';
import slid_2 from '../../images/slider_2.jpg';
import slid_3 from '../../images/slider_3.jpg';
import slid_4 from '../../images/slider_4.jpg';
import slid_5 from '../../images/slider_5.jpg';
import slid_6 from '../../images/slider_6.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '-50px',
        left: '750px',
        before: { color: 'red' },
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '-50px',
        left: '700px',
      }}
      onClick={onClick}
    />
  );
}

export const Slid = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Container>
      <Title> POPULAR THIS WEEK</Title>
      <Slider {...settings}>
        <div>
          <SlidImg src={slid_1} alt="slid" />
        </div>
        <div>
          <SlidImg src={slid_2} alt="slid" />
        </div>
        <div>
          <SlidImg src={slid_3} alt="slid" />
        </div>
        <div>
          <SlidImg src={slid_4} alt="slid" />
        </div>
        <div>
          <SlidImg src={slid_5} alt="slid" />
        </div>
        <div>
          <SlidImg src={slid_6} alt="slid" />
        </div>
      </Slider>
    </Container>
  );
};
