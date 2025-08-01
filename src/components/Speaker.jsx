import React, { useState } from "react";
import Slider from "react-slick";


import "./speeker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import d4 from "../components/images/d4.gif";
import d5 from "../components/images/d5.gif";
import d6 from "../components/images/d6.gif";
// Images
 import sImage2 from "../components/images/sp1.jpeg";
  import sImage1 from "../components/images/sep3.jpeg";
   import sImage from "../components/images/speaker latest.jpeg";
import m1 from "../components/images/m1.jpeg";
import m2 from "../components/images/m2.jpeg";
import m3 from "../components/images/m3.jpeg";
import m4 from "../components/images/m4.jpeg";
import m5 from "../components/images/m5.jpeg";
import m6 from "../components/images/m6.jpeg";
import m7 from "../components/images/m13.jpeg";
import m8 from "../components/images/m8.jpeg";
import m9 from "../components/images/m9.jpeg";
// import m10 from "../components/images/m10.jpeg";
import m11 from "../components/images/m11.jpeg";
import m12 from "../components/images/m14.jpeg";
import m13 from "../components/images/m16.jpeg";
import m14 from "../components/images/M20.jpeg";
function Speaker() {
  const sliderImages = [sImage, sImage1, sImage2];
  const modelNames = [
    "CLASSIC", "TRANCE Jr.", "TRANCE", "SONIC 200", "PULSE BOX",
    "NEW WAVE 100", "FUNK", "K-POP", "BRASS",
    "HARMONY X", "NEW WAVE 200","SONIC 80","ROCK $ ROLL"
  ];
  const productImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m11, m12,m13,m14];

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
        <h1 className="main-heading">Speakers</h1>
        <p className="intro-text">
          Welcome to Red Wolf Info Tech — your destination for premium audio experiences. 
          Our speakers fill your space with rich, powerful sound and modern elegance.
        </p>
      </div>


<div className="features-section1">
  <h2 className="features-heading">Top Features That Define Us</h2>
  <div className="features-grid">
    <div className="feature-card">
      <img
        src={d5}
        alt="Smart Connectivity"
        className="feature-gif"
      />
      <h3 style={{ fontWeight: '700' }}>Smart Connectivity</h3>
      <p style={{ fontWeight: '400', color: 'black' }}>
        Bluetooth 5.0, Wi-Fi, voice assistants — all under your command.
      </p>
    </div>

    <div className="feature-card">
      <img
        src={d4}
        alt="Studio-Quality Sound"
        className="feature-gif"
      />
      <h3 style={{ fontWeight: '700' }}>Studio-Quality Sound</h3>
      <p style={{ fontWeight: '400', color: 'black' }}>
        Engineered for precision and clarity with immersive surround effects.
      </p>
    </div>

    <div className="feature-card">
      <img
        src={d6}
        alt="Minimalist Design"
        className="feature-gif"
      />
      <h3 style={{ fontWeight: '700' }}>Minimalist Design</h3>
      <p style={{ fontWeight: '400', color: 'black' }}>
        Sleek curves, premium finish — sound has never looked so good.
      </p>
    </div>
  </div>
</div>

      {/* Existing: Why Choose Us */}
      <div className="why-choose-section animate__animated animate__fadeIn">
        <h2>Why Choose Red Wolf Speakers?</h2>
        <ul>
          <li>🎵 High-fidelity sound with deep bass and crystal-clear highs</li>
          <li>🛠️ Durable design built with premium-grade materials</li>
          <li>🔊 Bluetooth, Wi-Fi, and smart assistant compatibility</li>
          <li>🎨 Sleek, modern designs that match any decor</li>
          <li>💡 Energy-efficient with smart power control</li>
        </ul>
      </div>



{/* New: Speaker Personality Selector */}
<section className="speaker-match-carousel">
  <h2 className="match-title">🎧 Find Your Speaker Match</h2>
  <p className="match-tagline">Slide through to discover the Red Wolf that fits your vibe!</p>

  <div className="match-scroll-container">
    {[
      { icon: "🎬", title: "Cinema Lover", desc: "Booming bass & surround sound for binge nights." },
      { icon: "🎉", title: "Party Animal", desc: "Insanely loud, eye-catching, perfect for house parties." },
      { icon: "🧘", title: "Peace Seeker", desc: "Crystal-clear tones for mindfulness & calm." },
      { icon: "🚗", title: "Traveller", desc: "Pocket-sized power with long battery life." },
      { icon: "🎮", title: "Gamer", desc: "360° directional sound for immersive action." },
      { icon: "💼", title: "Pro Mode", desc: "For work, Zoom calls, or daily podcasts." },
    ].map((item, index) => (
      <div className="match-card-carousel" key={index}>
        <div className="match-icon">{item.icon}</div>
        <div className="match-card-title">{item.title}</div>
        <div className="match-card-desc">{item.desc}</div>
      </div>
    ))}
  </div>
</section>


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



<section className="mission-section">
  <div className="mission-wrapper">
    <h2 className="mission-title">🚀 Our Mission</h2>
    <p className="mission-description">
      At <span className="highlight">Red Wolf Info Tech</span>, we’re reshaping sound by 
      fusing <em>cutting-edge technology</em> with <em>emotive design</em>. Our goal is 
      simple: to make your world sound richer, deeper, and more alive.
    </p>
  </div>
</section>


    
    </div>
  );
}

export default Speaker;
