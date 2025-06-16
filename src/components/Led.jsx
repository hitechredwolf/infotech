import React, { useEffect, useState } from 'react';
import './Led.css';
import led from './images/led1.jpeg'; // Replace with actual image path
import led2 from './images/led2.jpeg';
import led3 from './images/led3.jpeg';
const Led = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [led, led2, led3]; // Replace with actual image array

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="rw-led-wrapper">
      {/* Slider Section */}
      <div className="rw-led-slider-container">
        <div
          className="rw-led-slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="rw-led-slide" key={index}>
              <img src={img} alt={`LED Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* General Description */}
      <section className="rw-led-general">
        <h2>Redwolf LED TVs – Picture Perfect, Performance Unmatched</h2>
        <p>
          Welcome to the world of immersive entertainment with Redwolf LED TVs — where
          cutting-edge technology meets sleek design. Our LED TV range spans from compact 24”
          models to awe-inspiring 98” smart displays, crafted to suit every space and lifestyle.
        </p>
        <h3>Why Redwolf LED TVs?</h3>
        <ul>
          <li>4K UHD & HDR Technology – Enjoy stunning visuals with ultra-crisp resolution, deeper contrasts, and vibrant colors.</li>
          <li>Smart Connectivity – With built-in apps like Netflix, Prime Video, YouTube, and screen mirroring, your favorite content is just a click away.</li>
          <li>Dolby Audio & Vision – Surround yourself in cinematic sound and lifelike imagery that elevates every scene.</li>
          <li>Multiple Sizes, One Promise – Whether it's for your bedroom, living room, or a home theatre setup — Redwolf has the perfect screen size for you.</li>
          <li>Seamless Integration – HDMI, USB, AV, Bluetooth, and Wi-Fi ensure you're connected to everything, effortlessly.</li>
        </ul>
        <p>
          From daily binge-watching to blockbuster movie nights, Redwolf LED TVs redefine the
          viewing experience.
        </p>
      </section>



{/* Product Slider Section */}
<section className="slider-section">
  <h2>Explore Our Best Sellers</h2>

  {/* Category 1 */}
  <div className="category-block">
    <h3 className="category-title">Smart LED TVs</h3>
    <div className="slider-container1">
      {[
        { name: "Redwolf 32” Smart", img: led, discount: "15% OFF", detail: "HD Ready, Smart Apps" },
        { name: "Redwolf 40” Smart", img: led, discount: "20% OFF", detail: "Full HD, Dolby Audio" },
        { name: "Redwolf 43” Smart", img: led, discount: "10% OFF", detail: "4K UHD, Built-in Wi-Fi" },
        { name: "Redwolf 50” 4K", img: led, discount: "25% OFF", detail: "Dolby Vision + Atmos" },
        { name: "Redwolf 55” 4K", img: led, discount: "30% OFF", detail: "Bezel-less, 4K HDR" },
        { name: "Redwolf 65” UHD", img: led, discount: "18% OFF", detail: "Smart OS, Voice Control" },
      ].map((product, index) => (
        <div className="pro-card" key={`cat1-${index}`}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="discount">{product.discount}</p>
          <p className="features">{product.detail}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Category 2 */}
  <div className="category-block">
    <h3 className="category-title">Premium UHD TVs</h3>
    <div className="slider-container1">
      {[
        { name: "Redwolf 75” 4K", img: led, discount: "22% OFF", detail: "HDR10+, Smart OS" },
        { name: "Redwolf 86” Pro", img: led, discount: "28% OFF", detail: "Cinematic 4K Display" },
        { name: "Redwolf 98” Elite", img: led, discount: "35% OFF", detail: "Ultra Bezel-less 4K" },
        { name: "Redwolf 65” QLED", img: led, discount: "20% OFF", detail: "Quantum Dot Display" },
        { name: "Redwolf 55” Studio", img: led, discount: "12% OFF", detail: "Slim & Smart HDR" },
        { name: "Redwolf 43” Theater", img: led, discount: "15% OFF", detail: "Dolby Vision Enabled" },
      ].map((product, index) => (
        <div className="pro-card" key={`cat2-${index}`}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="discount">{product.discount}</p>
          <p className="features">{product.detail}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Product-Wise Highlights */}
      <section className="rw-led-products">
        <h2>Product-Wise Highlights</h2>

        <div className="rw-led-product-block">
          <h3>Redwolf 24” HD Ready LED TV</h3>
          <ul>
            <li>Compact yet powerful entertainment for small rooms.</li>
            <li>Crisp HD resolution with wide viewing angles.</li>
            <li>Dual speakers with stereo surround sound.</li>
            <li>Energy-efficient and wall-mount ready.</li>
          </ul>
        </div>

        <div className="rw-led-product-block">
          <h3>Redwolf 32” HD/Smart TV</h3>
          <ul>
            <li>Stunning HD visuals with thin bezel design.</li>
            <li>Smart TV variant with preloaded OTT apps.</li>
            <li>USB, HDMI, AV connectivity for all devices.</li>
            <li>Perfect for bedrooms and compact living areas.</li>
          </ul>
        </div>

        <div className="rw-led-product-block">
          <h3>Redwolf 40” Full HD Smart LED TV</h3>
          <ul>
            <li>Brilliant Full HD clarity with vibrant color reproduction.</li>
            <li>Smart functionality with built-in Wi-Fi & apps.</li>
            <li>Dolby Audio for immersive sound experience.</li>
            <li>Sleek design with screen mirroring support.</li>
          </ul>
        </div>

        <div className="rw-led-product-block">
          <h3>Redwolf 43”/50”/55” 4K UHD Smart LED TV</h3>
          <ul>
            <li>Ultra HD 4K resolution with HDR for lifelike visuals.</li>
            <li>Smart OS with preloaded Netflix, Prime, YouTube & more.</li>
            <li>Dolby Vision + Dolby Audio for theatre-like experience.</li>
            <li>Bluetooth, Wi-Fi, and voice control enabled.</li>
          </ul>
        </div>

        <div className="rw-led-product-block">
          <h3>Redwolf 65”/75”/86”/98” 4K UHD Smart LED TV</h3>
          <ul>
            <li>Massive screens built for cinematic viewing at home.</li>
            <li>Super bright 4K UHD panels with HDR10+ support.</li>
            <li>Dual-band Wi-Fi, Bluetooth 5.0, and screen casting.</li>
            <li>Premium design with powerful stereo output and Dolby Digital Plus.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Led;
