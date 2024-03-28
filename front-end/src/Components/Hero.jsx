import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Styles/Hero.module.css";
import Image1 from "../assets/picture1.jpg";
import Image3 from "../assets/picture3.jpg";
import Image4 from "../assets/picture4.jpg";

function Hero() {
  const images = [
    { id: 1, src: Image1, alt: "Image 1" },
    { id: 2, src: Image3, alt: "Image 2" },
    { id: 3, src: Image4, alt: "Image 3" },
  ];

  const HeroSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      pauseOnHover: false,
    };

    return (
      <Slider {...settings} className={styles.noScroll}>
        {images.map((image) => (
          <div key={image.id} className={styles.hero}>
            <img src={image.src} alt={image.alt} />
            <p className={styles.text}>
              Unleash your harvest's potential with Smart Agriculture{" "}
            </p>
            <button className={styles.btn}>Know More</button>
          </div>
        ))}
      </Slider>
    );
  };
  return (
    <div className={styles.heroContainer}>
      <HeroSlider />
    </div>
  );
}

export default Hero;
