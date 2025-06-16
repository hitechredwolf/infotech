import React from "react";
import "./About.css";
import { FaLock, FaTv, FaVolumeUp } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="banner animate-slide-in">
        <h1>About Us | Redwolf Info Tech Pvt. Ltd.</h1>
        <p>Empowering Innovation. Elevating Experience.</p>
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

      <section className="section white-bg">
        <h2 className="section-title">Our Vision</h2>
        <ul className="vision-list">
          <li>Expanding Market Reach</li>
          <li>Driving Continuous Innovation</li>
          <li>Elevating User Experience</li>
        </ul>
      </section>

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
