import React from 'react';
// import sImage from "../components/images/s.jpg";
import pro from "../components/images/pro.jpg";
import Plus from "../components/images/plus.jpg";
import imac from "../components/images/Imac.jpg";
import "animate.css";
import d1 from "../components/images/d1.gif";
import d2 from "../components/images/d2.gif";
import d3 from "../components/images/d3.gif";
import sImage1 from "../components/images/speaker1.jpg";
import sImage2 from "../components/images/TCOPS IMAC.jpeg";
import sImage3 from "../components/images/speaker3.jpg";
import Slider from "react-slick";
import "./Tcops.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [sImage1, sImage2, sImage3];

const product = [pro,Plus,imac];
const Tcops = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
  <span>IN Proudly India's No.1 Finance Locker — Trusted By Millions Across The Nation!</span>
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
          <h2>Tcops zt Pro</h2>
          <p  style={{ color: "white",fontWeight: "bold" }}>
            Designed for enterprise-grade environments, ZT Pro offers AI-powered monitoring, real-time alerts, and seamless integration with modern systems.It is use for New Phone .
          </p>
        </div>
        <div className="product-card">
          <h2>Tcops zt Plus</h2>
          <p style={{ color: "white",fontWeight: "bold" }}>
            Perfect for mid-sized organizations, ZT Plus balances performance and affordability while maintaining top-tier security capabilities.It is used for old phone and Already finence .
          </p>
        </div>
        <div className="product-card">
          <h2>Tcops zt iMac</h2>
          <p style={{ color: "white",fontWeight: "bold" }}>
            Engineered for creative professionals and Mac environments, ZT iMac combines intuitive design with robust protection tools.It is used for iPhone .
          </p>
        </div> 
      </div>

 
{/*        
 <section className="v1"style={{ background : "white" }}>
        <h2 className="h1" style={{color:'black'}}><span className="highlight">The TCOPS Finance Locker</span> – Our Flagship Product</h2>
        <p className="about-us-container">
          At the core of our success is TCOPS Finance Locker, an advanced mobile
          security application designed specifically for the telecom industry. Unlike
          traditional security apps, TCOPS Finance Locker addresses the unique
          challenges faced by the mobile market when customers delay or default on
          EMI payments. This solution empowers financial institutions to monitor and
          control mobile assets with unparalleled precision.
        </p>
        <br />

        <section className="card1">
          <div className="card">
            <img style={{ width: '50%' }} src="/assets/Cross.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Cross-Platform Versatility</h5>
            <p>Available on Android, iOS, and compatible with refurbished devices.</p>
          </div>
          <div className="card">
            <img style={{ width: '50%' }} src="/assets/Comprehensive.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Comprehensive Control</h5>
            <p>Enables remote device management, mitigating unauthorized usage and risk.</p>
          </div>
          <div className="card">
            <img style={{ width: '50%' }} src="/assets/Tailored.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Tailored Security</h5>
            <p>
              Designed specifically for financial institutions, telecom sector & handset
              industry, combining robust technology with user-centric features.
            </p>
          </div>
        </section>
      </section> */}



 <section className="v1" style={{ background: "white" }}>
  <h2 className="h1" style={{ color: 'black' }}>
    <span className="highlight">The TCOPS Finance Locker</span> – Our Flagship Product
  </h2>
  <p className="about-us-container">
    At the core of our success is TCOPS Finance Locker, an advanced mobile
    security application designed specifically for the telecom industry. Unlike
    traditional security apps, TCOPS Finance Locker addresses the unique
    challenges faced by the mobile market when customers delay or default on
    EMI payments. This solution empowers financial institutions to monitor and
    control mobile assets with unparalleled precision.
  </p>
  <br />

  <section className="card1">
    <div className="card">
      <figure style={{ textAlign: "center" }}>
        <img style={{ width: '50%' }} src={d3} alt="Cross-Platform" />
        <figcaption>Cross-Platform Versatility</figcaption>
      </figure>
      <h5 style={{ fontSize: 'x-large' }}>Cross-Platform Versatility</h5>
      <p>Available on Android, iOS, and compatible with refurbished devices.</p>
    </div>

    <div className="card">
      <figure style={{ textAlign: "center" }}>
        <img style={{ width: '50%' }}  src={d2} alt="Comprehensive Control" />
        <figcaption>Comprehensive Control</figcaption>
      </figure>
      <h5 style={{ fontSize: 'x-large' }}>Comprehensive Control</h5>
      <p>Enables remote device management, mitigating unauthorized usage and risk.</p>
    </div>

    <div className="card">
      <figure style={{ textAlign: "center" }}>
        <img style={{ width: '50%' }} src={d1} alt="Tailored Security" />
        <figcaption>Tailored Security</figcaption>
      </figure>
      <h5 style={{ fontSize: 'x-large' }}>Tailored Security</h5>
      <p>
        Designed specifically for financial institutions, telecom sector & handset
        industry, combining robust technology with user-centric features.
      </p>
    </div>
  </section>
</section> 


      {/* Detailed Section for Each Product */}


   




      
      {/* Why Choose Tcops */}
      {/* <div className="tcops-why animate__animated animate__fadeIn">
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
      </div> */}







 <div>


      
      <section className="expansion-container">
        <h2 className="about-us-headinga" style={{color:'white'}}>Distinctive Features <span className="highlight">Without Repetition</span></h2>
        <p className="about-us-container">
          TCOPS Finance Locker incorporates a suite of features designed to maximize
          security and streamline asset management. Each feature is purpose-built to
          ensure that every facet of mobile security is addressed
        </p>

        <div className="card-grid">
          <div className="expansion-card">
            <img style={{ width: '50%' }} src="/assets/DeviceManagement.svg" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Remote Device Management</h5>
            <p>
              Retailers/shop-keepers can lock/unlock devices instantly, ensuring immediate
              action on EMI delays or defaults.
            </p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '33%' }} src="/assets/Application Control.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Selective Application Control</h5>
            <p>Restricts access to sensitive applications, preventing unauthorized usage.</p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '50%' }} src="/assets/camera.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Integrated Camera Control</h5>
            <p>Disables the camera to enhance privacy and prevent unauthorized image capture.</p>
          </div>
        </div>

        <div className="card-grid">
          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/networking.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Dynamic SIM and Network Monitoring</h5>
            <p>Tracks real-time SIM changes to reinforce fraud prevention.</p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/location1.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Advanced Location Services</h5>
            <p>Supports both real-time and offline location tracking to monitor device whereabouts.</p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/Proactive Device.png" alt="" />
            <h5 style={{ fontSize: 'x-large' }}>Proactive Device Maintenance</h5>
            <p>
              Controls Wi-Fi, Bluetooth, and airplane mode for complete security oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="expansion-container" style={{ background : "white" }}>
        <h2 className="about-us-headinga" style={{color:'black'}}><span className="highlight">Market Impact</span> and Customer Success</h2>
        <p className="about-us-container">
          Red Wolf Info Tech’s innovations have significantly impacted market, delivering measurable benefits:
        </p>

        <div className="card-grid">
          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/Asset-Recovery.webp" alt="" />
            <h5 style={{ fontSize: 'x-large' ,color:'black'}}>Enhanced Payment Recovery</h5>
            <p style={{color:'black'}}>Faster, more efficient device retrieval reduces losses from EMI defaults.</p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/Improved Compliance.png" alt="" />
            <h5 style={{ fontSize: 'x-large',color:"black" }}>Improved Compliance</h5>
            <p style={{color:'black'}}>
              Advanced monitoring ensures institutions adhere to regulatory standards.
            </p>
          </div>

          <div className="expansion-card">
            <img style={{ width: '35%' }} src="/assets/Increased Efficiency.png" alt="" />
            <h5 style={{ fontSize: 'x-large' ,color:'black'}}>Operational Efficiency</h5>
            <p style={{color:'black'}}>Automated security protocols minimize manual intervention, saving time and resources.</p>
          </div>
        </div>
      </section>
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
