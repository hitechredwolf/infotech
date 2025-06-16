import React, { useState } from "react";
import Slider from "react-slick";
import "./speeker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

// Images
 import sImage from "../components/images/sp1.jpeg";
  import sImage1 from "../components/images/sp2.jpeg";
import m1 from "../components/images/m1.jpeg";
import m2 from "../components/images/m2.jpeg";
import m3 from "../components/images/m3.jpeg";
import m4 from "../components/images/m4.jpeg";
import m5 from "../components/images/m5.jpeg";
import m6 from "../components/images/m6.jpeg";
import m7 from "../components/images/m7.jpeg";
import m8 from "../components/images/m8.jpeg";
import m9 from "../components/images/m9.jpeg";
import m10 from "../components/images/m10.jpeg";
import m11 from "../components/images/m11.jpeg";
import m12 from "../components/images/m12.jpeg";

function Speaker() {
  const sliderImages = [sImage, sImage1, sImage1, sImage];
  const modelNames = [
    "Alpha 100", "Echo 200", "Pulse Mini", "Vibe Max", "Nova Boom",
    "Sonic Edge", "Bass Beast", "Studio Pro", "Thunder 5", "Zen Beat",
    "Aura Slim", "Urban X"
  ];
  const productImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];

  const products = modelNames.map((model, index) => ({
    id: index + 1,
    model,
    image: productImages[index],
  }));

  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="speaker-page">
      {/* Hero Slider */}
      <div className="slider-container animate__animated animate__fadeInDown">
        <Slider {...sliderSettings}>
          {sliderImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Welcome Section */}
      <div className="intro-section animate__animated animate__fadeInUp">
        <h1 className="main-heading">Redwolf Infotech Speakers</h1>
        <p className="intro-text">
          Welcome to Redwolf Infotech — your destination for premium audio experiences. 
          Our speakers fill your space with rich, powerful sound and modern elegance.
        </p>
      </div>

      {/* New: Top Features */}
  <div className="features-section1">
  <h2 className="features-heading">Top Features That Define Us</h2>
  <div className="features-grid">
    <div className="feature-card">
      <h3>Smart Connectivity</h3>
      <p>Bluetooth 5.0, Wi-Fi, voice assistants — all under your command.</p>
    </div>
    <div className="feature-card">
      <h3>Studio-Quality Sound</h3>
      <p>Engineered for precision and clarity with immersive surround effects.</p>
    </div>
    <div className="feature-card">
      <h3>Minimalist Design</h3>
      <p>Sleek curves, premium finish — sound has never looked so good.</p>
    </div>
  </div>
</div>


      {/* Existing: Why Choose Us */}
      <div className="why-choose-section animate__animated animate__fadeIn">
        <h2>Why Choose Redwolf Speakers?</h2>
        <ul>
          <li>🎵 High-fidelity sound with deep bass and crystal-clear highs</li>
          <li>🛠️ Durable design built with premium-grade materials</li>
          <li>🔊 Bluetooth, Wi-Fi, and smart assistant compatibility</li>
          <li>🎨 Sleek, modern designs that match any decor</li>
          <li>💡 Energy-efficient with smart power control</li>
        </ul>
      </div>

      {/* Product Grid */}
      <h2 className="section-title">Our Speaker Models</h2>
      <p className="product-description">Explore our range — from personal companions to party beasts.</p>

      <div className="product-section animate__animated animate__fadeInUpBig">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
          <div key={product.id} className="product-card hover-zoom">
            <img src={product.image} alt={product.model} />
            <h3>{product.model}</h3>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button className="view-more-button" onClick={toggleShowAll}>
          {showAll ? "Hide" : "View More"}
        </button>
      </div>

      {/* New: Testimonials */}
      <div className="testimonials-section animate__animated animate__slideInUp">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-card animate__animated animate__bounceIn">
          <p>“Absolutely mind-blowing sound quality! I'm never going back to regular speakers again.”</p>
          <h4>- Priya D., Mumbai</h4>
        </div>
        <div className="testimonial-card animate__animated animate__bounceIn animate__delay-1s">
          <p>“Easy to connect, beautiful design, and the bass is just 🤯”</p>
          <h4>- Arjun M., Bengaluru</h4>
        </div>
      </div>

      {/* New: Our Mission */}
      <div className="mission-section animate__animated animate__zoomIn">
        <h2>Our Mission</h2>
        <p>
          Redwolf Infotech aims to revolutionize how you experience sound — by blending technology, 
          craftsmanship, and emotion into every speaker we build. It's not just audio, it's art.
        </p>
      </div>

      {/* Footer Note */}
      <div className="footer-note animate__animated animate__fadeInUp">
        <h3>Ready to Amplify Your World?</h3>
        <p>
          Join thousands of satisfied users who’ve upgraded their audio game with Redwolf Infotech.
          Experience sound the way it’s meant to be heard — bold, clear, and immersive.
        </p>
      </div>
    </div>
  );
}

export default Speaker;
