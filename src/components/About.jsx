import React from "react";
import "./About.css";
import { FaLock, FaTv, FaVolumeUp } from "react-icons/fa";
import bannerImage from "./images/About baner.jpg"; // Adjust path based on your structure

const About = () => {
  return (
    <div className="about-container">
      <div className="banner-image">
  <img src={bannerImage} alt="About Banner" className="banner-img" />
  
</div>


      <section className="section">
        <h2 className="section-title">Our Journey of Innovation</h2>
        <div className="card-grid">
          <div className="card animate-fade-in">
            <h3>Early Innovation</h3>
            <p>
              We began by addressing a critical gap in mobile EMI management with
              the launch of TCOPS Finance Locker, a powerful platform designed to
              protect financial assets through secure, scalable mobile control
              solutions.
            </p>
          </div>
          <div className="card animate-fade-in">
            <h3>Expansion into Smart Entertainment</h3>
            <p>
              We diversified into Redwolf LED TVs and Redwolf Speakers, bringing
              premium technology to Indian homes at competitive value.
            </p>
          </div>
          <div className="card animate-fade-in">
            <h3>Trust Across Verticals</h3>
            <p>
              With over 500,000+ users, Redwolf Info Tech has earned a reputation
              for excellence in security, visual innovation, and sound performance.
            </p>
          </div>
        </div>
      </section>
      <section className="rw-mission-vision">
  <div className="rw-split-container">
    {/* Vision Section */}
    <div className="rw-box rw-vision">
      <h2 className="rw-heading">🌟 Vision Statement</h2>
      <p>
        To be India’s most trusted innovation-driven brand, delivering smart lifestyle solutions that seamlessly blend
        technology, sustainability, and everyday convenience.
      </p>
      <p>
        We envision a future where every Indian home and journey is empowered by intelligent Red Wolf products —
        designed to simplify life, amplify experiences, and shape a smarter tomorrow.
      </p>
      <h4 className="rw-subheading">Our Vision Focuses On:</h4>
      <ul>
        <li>🚗 Sustainable Mobility through smart, future-ready EVs</li>
        <li>📺 Connected Living with immersive LED TVs & Speakers</li>
        <li>📱 Digital Empowerment via powerful finance tools like EMI Locker</li>
        <li>🏠 Smart Home Expansion with intuitive appliances (coming soon)</li>
        <li>🇮🇳 Making Innovation Accessible for every Indian household</li>
      </ul>
    </div>

    {/* Mission Section */}
    <div className="rw-box rw-mission">
      <h2 className="rw-heading">🚀 Mission Statement</h2>
      <p>
        At Red Wolf Info Tech, our mission is to reimagine the way India moves, connects, and manages daily life through
        purposeful innovation.
      </p>
      <p>
        We deliver solutions that blend design, performance, and reliability across mobility, entertainment, and finance
        — built to serve real needs in real time.
      </p>
      <h4 className="rw-subheading">Our Mission Drives Us To:</h4>
      <ul>
        <li>⚡ Build eco-friendly electric vehicles for tomorrow’s roads</li>
        <li>🔊 Deliver high-quality audio-visual products for modern entertainment</li>
        <li>📊 Create intuitive finance management tools for digital-savvy users</li>
        <li>🧠 Launch future-ready smart appliances for everyday comfort</li>
        <li>🛠️ Lead with trust, technology, and customer-first thinking</li>
      </ul>
    </div>
  </div>
</section>

{/* 
      <section className="section white-bg">
        <h2 className="section-title">Our Vision</h2>
        <ul className="vision-list">
          <li>Expanding Market Reach</li>
          <li>Driving Continuous Innovation</li>
          <li>Elevating User Experience</li>
        </ul>
      </section> */}

      <section className="section">
        <h2 className="section-title"><FaLock /> TCOPS Finance Locker</h2>
        <p className="description">
          TCOPS Finance Locker is our advanced mobile control solution for EMI
          recovery and asset protection.
        </p>
        <ul className="feature-list">
          <li>Android, iOS, and refurbished phone compatibility</li>
          <li>Remote lock/unlock access</li>
          <li>App, camera, and connectivity restrictions</li>
          <li>SIM/network monitoring</li>
          <li>Live and offline location tracking</li>
        </ul>
      </section>

      <section className="section white-bg">
        <h2 className="section-title"><FaTv /> Redwolf LED TVs</h2>
        <p className="description">
          Transform everyday viewing into immersive entertainment.
        </p>
        <ul className="feature-list">
          <li>Screen sizes from 24" to 98" with 4K & Full HD</li>
          <li>Android & WebOS, Dolby Audio, Chromecast support</li>
          <li>Voice control with Google Assistant</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title"><FaVolumeUp /> Redwolf Speakers</h2>
        <p className="description">
          Designed for every mood—celebrations, karaoke, or immersive music.
        </p>
        <ul className="feature-list">
          <li>12W to 250W RMS output</li>
          <li>Bluetooth 5.0, USB, AUX, FM</li>
          <li>RGB lighting, LED display, and mic support</li>
        </ul>
      </section>

      <section className="section white-bg">
        <h2 className="section-title">Why Redwolf?</h2>
        <ul className="benefits-list">
          <li>Boosted EMI recovery for financial partners</li>
          <li>Smart, stylish features for home users</li>
          <li>Reliable service, innovative engineering</li>
        </ul>
        <p className="closing-text animate-slide-up">
          At Redwolf Info Tech, we build trust, technology, and tomorrow. From
          mobile finance to smart entertainment, we redefine what it means to be
          connected. Let’s transform life, together.
        </p>
      </section>
    </div>
  );
};

export default About;
