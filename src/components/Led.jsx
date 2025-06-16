import React from 'react';
import './Led.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from './images/banner1.png'
const Led = () => {
  const carouselImages = [
    img,
   img,
   img,
    img
  ];

  return (
    <div className="rw-led-wrapper">
      {/* Banner Carousel */}
      <section className="rw-led-carousel">
        <Carousel
          autoPlay
          infinite
          showDots
          arrows={false}
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
          }}
        >
          {carouselImages.map((img, index) => (
            <div key={index} className="rw-led-banner-slide">
              <img src={img} alt={`Redwolf LED banner ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Hero Section */}
      <section className="rw-led-hero">
        <h1>Illuminate Your World with Redwolf LEDs</h1>
        <p>Discover how Redwolf Infotech brings light to life — combining energy efficiency, vibrant design, and smart features to transform every space into brilliance.</p>
      </section>

      {/* Features Section */}
      <section className="rw-led-features">
        <h2>Top Reasons to Choose Redwolf LEDs</h2>
        <div className="rw-led-feature-grid">
          <div className="rw-led-feature-card">
            <h3>Energy Efficiency</h3>
            <p>Cut down your electricity bill by up to 85% with our state-of-the-art LED technology.</p>
          </div>
          <div className="rw-led-feature-card">
            <h3>Smart Connectivity</h3>
            <p>Voice and app controlled lighting integrated with Alexa and Google Home.</p>
          </div>
          <div className="rw-led-feature-card">
            <h3>Eco-Friendly</h3>
            <p>Mercury-free, recyclable, and RoHS compliant — lighting with a conscience.</p>
          </div>
          <div className="rw-led-feature-card">
            <h3>Long Life Span</h3>
            <p>Over 50,000 hours of operational life means fewer replacements and more savings.</p>
          </div>
          <div className="rw-led-feature-card">
            <h3>Wide Color Range</h3>
            <p>Switch between warm, cool, daylight or RGB modes to suit your vibe.</p>
          </div>
          <div className="rw-led-feature-card">
            <h3>Comfort & Safety</h3>
            <p>Flicker-free, anti-glare designs protect your eyes while elevating ambiance.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="rw-led-products">
        <h2>Our Signature LED Products</h2>
        <div className="rw-led-product-grid">
          <div className="rw-led-product">
            <h3>Smart LED Bulbs</h3>
            <p>Instant on, color-changing bulbs compatible with all major fixtures.</p>
          </div>
          <div className="rw-led-product">
            <h3>Ceiling Panel Lights</h3>
            <p>Stylish, low-glare panels designed for corporate and residential use.</p>
          </div>
          <div className="rw-led-product">
            <h3>RGB Strip Lighting</h3>
            <p>Flexible and vibrant strip lights to create the perfect mood anywhere.</p>
          </div>
          <div className="rw-led-product">
            <h3>Flood & Street Lights</h3>
            <p>IP65-rated LED floodlights and smart street lighting for outdoor brilliance.</p>
          </div>
          <div className="rw-led-product">
            <h3>Tube Lights</h3>
            <p>High-lumen output with soft illumination — ideal for workspaces and classrooms.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rw-led-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="rw-led-testimonial">
          <p>"The transformation is unbelievable. Our office looks brighter, feels modern, and we're saving on electricity."</p>
          <span>- Nikhil V., Hyderabad</span>
        </div>
        <div className="rw-led-testimonial">
          <p>"I never thought lighting could change the vibe so much. The RGB strips are a party essential now!"</p>
          <span>- Anjali S., Pune</span>
        </div>
        <div className="rw-led-testimonial">
          <p>"We installed Redwolf smart bulbs at home — our kids love the colors, and I love the energy savings."</p>
          <span>- Farhan R., Lucknow</span>
        </div>
      </section>

      {/* Vision Section */}
      <section className="rw-led-vision">
        <h2>Our Vision</h2>
        <p>
          At Redwolf Infotech, we believe lighting isn't just about illumination — it's about expression, functionality,
          and environmental responsibility. Our mission is to empower homes, offices, and cities with sustainable, smart,
          and visually stunning LED solutions that redefine the future of lighting.
        </p>
        <p>
          From intelligent control systems to beautifully crafted luminaires, Redwolf LEDs reflect innovation and passion in
          every beam. Join the revolution in lighting that adapts to your lifestyle.
        </p>
      </section>

      {/* Call to Action */}
      <section className="rw-led-cta">
        <h2>Light Up Smarter with Redwolf</h2>
        <p>Explore our innovative LED collections today and discover how smart lighting can elevate your everyday life.</p>
        <button className="rw-led-shop-btn">Explore Products</button>
      </section>
    </div>
  );
};

export default Led;