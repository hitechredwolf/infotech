import React from 'react';
// import sImage from "../components/images/s.jpg";
import pro from "../components/images/pro.jpg";
import Plus from "../components/images/plus.jpg";
import imac from "../components/images/Imac.jpg";
import "animate.css";
import sImage from "../components/images/speaker.jpg";
import sImage1 from "../components/images/speaker1.jpg";
import sImage2 from "../components/images/speaker2.jpg";
import sImage3 from "../components/images/speaker3.jpg";
import Slider from "react-slick";
import "./Tcops.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [sImage, sImage1, sImage2, sImage3];

const product = [sImage, sImage, sImage, sImage,pro,Plus,imac];
const Tcops = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div className="tcops-container">

      {/* Banner Slider */}
      <div className="tcops-slider">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Banner ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* India No.1 Banner */}
      <div className="tcops-top-banner">
  <span>🇮🇳 Proudly India's No.1 Finance Locker — Trusted by Millions Across the Nation!</span>
</div>


      {/* Intro */}
      <div className="tcops-intro">
        <h1>Our Product: <span className="highlight">Tcops</span></h1>
        <p>
          Tcops is a state-of-the-art security and surveillance solution designed for next-gen operations. 
          Discover our three advanced variants tailored for different professional needs.
        </p>
      </div>

      {/* Product Types */}
      <div className="tcops-products">
        <div className="product-card">
          <h2>Tcops ZT Pro</h2>
          <p>
            Designed for enterprise-grade environments, ZT Pro offers AI-powered monitoring, real-time alerts, and seamless integration with modern systems.
          </p>
        </div>
        <div className="product-card">
          <h2>Tcops ZT Plus</h2>
          <p>
            Perfect for mid-sized organizations, ZT Plus balances performance and affordability while maintaining top-tier security capabilities.
          </p>
        </div>
        <div className="product-card">
          <h2>Tcops ZT iMac</h2>
          <p>
            Engineered for creative professionals and Mac environments, ZT iMac combines intuitive design with robust protection tools.
          </p>
        </div>
      </div>

      {/* Detailed Section for Each Product */}
      <div className="tcops-details">

        {/* ZT Pro Detail */}
        <div className="tcops-detail-card animate__animated animate__fadeInLeft">
          <img src={pro} alt="ZT Pro" className="detail-image" />
          <div className="detail-text">
            <h2>Tcops ZT Pro</h2>
            <p>
              Built for large enterprises and mission-critical operations. 
              Featuring cutting-edge AI surveillance, facial recognition, behavioral tracking, and multi-camera integrations.
            </p>
            <ul>
              <li>⚙️ Enterprise-grade AI algorithms</li>
              <li>📡 Real-time smart alerts & remote access</li>
              <li>🔐 End-to-end encryption & cloud backup</li>
            </ul>
          </div>
        </div>

        {/* ZT Plus Detail */}
        <div className="tcops-detail-card reverse animate__animated animate__fadeInRight">
          <img src={Plus} alt="ZT Plus" className="detail-image" />
          <div className="detail-text">
            <h2>Tcops ZT Plus</h2>
            <p>
              Ideal for growing businesses. ZT Plus offers customizable workflows and enhanced analytics that scale with your operations.
            </p>
            <ul>
              <li>📊 Smart dashboard for real-time analytics</li>
              <li>🔧 Easy installation & modular integration</li>
              <li>📈 Scalable performance at low cost</li>
            </ul>
          </div>
        </div>

        {/* ZT iMac Detail */}
        <div className="tcops-detail-card animate__animated animate__fadeInUp">
          <img src={imac} alt="ZT iMac" className="detail-image" />
          <div className="detail-text">
            <h2>Tcops ZT iMac</h2>
            <p>
              Tailored for Mac users and creative teams, ZT iMac combines sleek design with industry-leading security tools.
            </p>
            <ul>
              <li>🖥️ Mac-optimized interface</li>
              <li>🎨 Stunning UI/UX for creators</li>
              <li>☁️ iCloud sync & Time Machine compatibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Tcops */}
      <div className="tcops-why animate__animated animate__fadeIn">
        <h2>Why Choose Tcops?</h2>
        <p>
          Tcops is more than a product — it's a revolution in digital security. 
          As India's leading finance locker and surveillance solution, Tcops brings you unmatched reliability, speed, and peace of mind.
        </p>
        <ul>
          <li>✅ ISO-certified security protocols</li>
          <li>🚀 Lightning-fast cloud sync</li>
          <li>🌐 24/7 support & updates</li>
          <li>📱 Compatible with Android, iOS, Windows & Mac</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="tcops-cta animate__animated animate__bounceIn">
        <h2>Ready to experience India’s No.1 Finance Locker?</h2>
        <button className="cta-button">Get Started with Tcops Today</button>
      </div>
    </div>
  );
};

export default Tcops;
