// import React, { useEffect, useState } from 'react';
// import './Led.css';
// import led from './images/LED1.jpg'; // Replace with actual image path
// import led2 from './images/LED2.jpg';
// import led3 from './images/LED3.jpg';
// import led3 from './images/LED4.jpg';
// import led3 from './images/LED5.jpg';
// import led3 from './images/LED6.jpg';
// import led3 from './images/LED7.jpg';
// const Led = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [led, led2, led3]; // Replace with actual image array

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   return (
//     <div className="rw-led-wrapper">
//       {/* Slider Section */}
//       <div className="rw-led-slider-container">
//         <div
//           className="rw-led-slider-track"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((img, index) => (
//             <div className="rw-led-slide" key={index}>
//               <img src={img} alt={`LED Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* General Description */}
//       {/* <section className="rw-led-general">
//         <h2>Redwolf LED TVs – Picture Perfect, Performance Unmatched</h2>
//         <p>
//           Welcome to the world of immersive entertainment with Redwolf LED TVs — where
//           cutting-edge technology meets sleek design. Our LED TV range spans from compact 24”
//           models to awe-inspiring 98” smart displays, crafted to suit every space and lifestyle.
//         </p>
//         <h3>Why Redwolf LED TVs?</h3>
//         <ul>
//           <li>4K UHD & HDR Technology – Enjoy stunning visuals with ultra-crisp resolution, deeper contrasts, and vibrant colors.</li>
//           <li>Smart Connectivity – With built-in apps like Netflix, Prime Video, YouTube, and screen mirroring, your favorite content is just a click away.</li>
//           <li>Dolby Audio & Vision – Surround yourself in cinematic sound and lifelike imagery that elevates every scene.</li>
//           <li>Multiple Sizes, One Promise – Whether it's for your bedroom, living room, or a home theatre setup — Redwolf has the perfect screen size for you.</li>
//           <li>Seamless Integration – HDMI, USB, AV, Bluetooth, and Wi-Fi ensure you're connected to everything, effortlessly.</li>
//         </ul>
//         <p>
//           From daily binge-watching to blockbuster movie nights, Redwolf LED TVs redefine the
//           viewing experience.
//         </p>
//       </section> */}
// {/* Why Choose Us Section */}
// <section className="rw-why-choose-us">
//   <h2 className="rw-why-title">Why Choose <span>Redwolf LED</span>?</h2>
//   <div className="rw-why-grid">
//     {[
//       {
//         title: "Dolby Audio",
//         desc: "Experience theater-quality sound with immersive surround audio.",
//         icon: "🎵"
//       },
//       {
//         title: "4K Ultra HD",
//         desc: "Crystal-clear picture clarity with vivid colors and stunning details.",
//         icon: "🖥️"
//       },
//       {
//         title: "Smart Connectivity",
//         desc: "Connect your favorite apps and stream without limits.",
//         icon: "📶"
//       },
//       {
//         title: "Energy Efficient",
//         desc: "Save power with eco-mode and smart energy optimization.",
//         icon: "🔋"
//       }
//     ].map((item, index) => (
//       <div className="rw-why-card" key={index}>
//         <div className="rw-why-icon">{item.icon}</div>
//         <h3 className="rw-why-subtitle">{item.title}</h3>
//         <p className="rw-why-text">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>



// {/* Product Slider Section */}
// <section className="slider-section">
//   <h2>Explore Our Best Sellers</h2>

//   {/* Category 1 */}
//   <div className="category-block">
//     <h3 className="category-title">Smart LED TVs</h3>
//     <div className="slider-container1">
//       {[
//         { name: "Redwolf 32” Smart", img: led, discount: "15% OFF", detail: "HD Ready, Smart Apps" },
//         { name: "Redwolf 40” Smart", img: led, discount: "20% OFF", detail: "Full HD, Dolby Audio" },
//         { name: "Redwolf 43” Smart", img: led, discount: "10% OFF", detail: "4K UHD, Built-in Wi-Fi" },
//         { name: "Redwolf 50” 4K", img: led, discount: "25% OFF", detail: "Dolby Vision + Atmos" },
//         { name: "Redwolf 55” 4K", img: led, discount: "30% OFF", detail: "Bezel-less, 4K HDR" },
//         { name: "Redwolf 65” UHD", img: led, discount: "18% OFF", detail: "Smart OS, Voice Control" },
//       ].map((product, index) => (
//         <div className="pro-card" key={`cat1-${index}`}>
//           <img src={product.img} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p className="discount">{product.discount}</p>
//           <p className="features">{product.detail}</p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Category 2 */}
//   <div className="category-block">
//     <h3 className="category-title">Premium UHD TVs</h3>
//     <div className="slider-container1">
//       {[
//         { name: "Redwolf 75” 4K", img: led, discount: "22% OFF", detail: "HDR10+, Smart OS" },
//         { name: "Redwolf 86” Pro", img: led, discount: "28% OFF", detail: "Cinematic 4K Display" },
//         { name: "Redwolf 98” Elite", img: led, discount: "35% OFF", detail: "Ultra Bezel-less 4K" },
//         { name: "Redwolf 65” QLED", img: led, discount: "20% OFF", detail: "Quantum Dot Display" },
//         { name: "Redwolf 55” Studio", img: led, discount: "12% OFF", detail: "Slim & Smart HDR" },
//         { name: "Redwolf 43” Theater", img: led, discount: "15% OFF", detail: "Dolby Vision Enabled" },
//       ].map((product, index) => (
//         <div className="pro-card" key={`cat2-${index}`}>
//           <img src={product.img} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p className="discount">{product.discount}</p>
//           <p className="features">{product.detail}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Product-Wise Highlights */}
//       {/* <section className="rw-led-products">
//         <h2>Product-Wise Highlights</h2>

//         <div className="rw-led-product-block">
//           <h3>Redwolf 24” HD Ready LED TV</h3>
//           <ul>
//             <li>Compact yet powerful entertainment for small rooms.</li>
//             <li>Crisp HD resolution with wide viewing angles.</li>
//             <li>Dual speakers with stereo surround sound.</li>
//             <li>Energy-efficient and wall-mount ready.</li>
//           </ul>
//         </div>

//         <div className="rw-led-product-block">
//           <h3>Redwolf 32” HD/Smart TV</h3>
//           <ul>
//             <li>Stunning HD visuals with thin bezel design.</li>
//             <li>Smart TV variant with preloaded OTT apps.</li>
//             <li>USB, HDMI, AV connectivity for all devices.</li>
//             <li>Perfect for bedrooms and compact living areas.</li>
//           </ul>
//         </div>

//         <div className="rw-led-product-block">
//           <h3>Redwolf 40” Full HD Smart LED TV</h3>
//           <ul>
//             <li>Brilliant Full HD clarity with vibrant color reproduction.</li>
//             <li>Smart functionality with built-in Wi-Fi & apps.</li>
//             <li>Dolby Audio for immersive sound experience.</li>
//             <li>Sleek design with screen mirroring support.</li>
//           </ul>
//         </div>

//         <div className="rw-led-product-block">
//           <h3>Redwolf 43”/50”/55” 4K UHD Smart LED TV</h3>
//           <ul>
//             <li>Ultra HD 4K resolution with HDR for lifelike visuals.</li>
//             <li>Smart OS with preloaded Netflix, Prime, YouTube & more.</li>
//             <li>Dolby Vision + Dolby Audio for theatre-like experience.</li>
//             <li>Bluetooth, Wi-Fi, and voice control enabled.</li>
//           </ul>
//         </div>

//         <div className="rw-led-product-block">
//           <h3>Redwolf 65”/75”/86”/98” 4K UHD Smart LED TV</h3>
//           <ul>
//             <li>Massive screens built for cinematic viewing at home.</li>
//             <li>Super bright 4K UHD panels with HDR10+ support.</li>
//             <li>Dual-band Wi-Fi, Bluetooth 5.0, and screen casting.</li>
//             <li>Premium design with powerful stereo output and Dolby Digital Plus.</li>
//           </ul>
//         </div>
//       </section> */}


// {/* What's in the Box */}
// {/* <section className="rw-box-section">
//   <h2 className="rw-box-title">What's in the <span className="highlight-red">Box</span>?</h2>
//   <div className="rw-box-grid">
//     {[
//       { icon: "📺", name: "Redwolf Smart TV" },
//       { icon: "🎮", name: "Smart Remote" },
//       { icon: "🔌", name: "Power Cable" },
//       { icon: "🧾", name: "User Manual" },
//       { icon: "🧰", name: "Wall Mount Kit" },
//       { icon: "🔋", name: "Batteries (for Remote)" },
//     ].map((item, index) => (
//       <div className="rw-box-card" key={index}>
//         <div className="rw-box-icon">{item.icon}</div>
//         <p>{item.name}</p>
//       </div>
//     ))}
//   </div>
// </section> */}



// {/* <section className="rw-testimonials-section">
//   <h2 className="rw-testimonials-title">Hear from Our Happy Customers</h2>
//   <div className="rw-testimonials-grid">
//     {[
//       {
//         name: "Rohit Sharma",
//         feedback: "The picture quality is phenomenal. It feels like watching in a real theater!",
//         img: "https://i.pravatar.cc/100?img=32"
//       },
//       {
//         name: "Neha Kapoor",
//         feedback: "Smart features are super smooth. YouTube and Netflix work like a charm!",
//         img: "https://i.pravatar.cc/100?img=45"
//       },
//       {
//         name: "Amit Verma",
//         feedback: "I bought the 50” Redwolf and my family absolutely loves it.",
//         img: "https://i.pravatar.cc/100?img=56"
//       }
//     ].map((cust, index) => (
//       <div className="rw-testimonial-card" key={index}>
//         <img src={cust.img} alt={cust.name} className="rw-testimonial-img" />
//         <p className="rw-testimonial-feedback">"{cust.feedback}"</p>
//         <h4 className="rw-testimonial-name">– {cust.name}</h4>
//       </div>
//     ))}
//   </div>
// </section> */}

//       {/* Customer Testimonials Section */}
// {/* <section className="rw-led-testimonials">
//   <h2 className="rw-led-testimonials-heading">What Our Users Are Saying</h2>
//   <div className="rw-led-testimonial-wrapper">
//     {[
//       {
//         name: "Priya D., Mumbai",
//         comment: "Absolutely mind-blowing sound quality! I'm never going back to regular speakers again.",
//         color: "#ff5252"
//       },
//       {
//         name: "Arjun M., Bengaluru",
//         comment: "Easy to connect, beautiful design, and the bass is just 🤯",
//         color: "#ff8a65"
//       },
//       {
//         name: "Sneha R., Pune",
//         comment: "The 4K clarity and Dolby Audio truly turned my living room into a theatre!",
//         color: "#ffd740"
//       },
//       {
//         name: "Rakesh K., Delhi",
//         comment: "Installation was super easy, and the remote is user-friendly. Love it!",
//         color: "#69f0ae"
//       }
//     ].map((review, index) => (
//       <div className="rw-led-testimonial-card" style={{ backgroundColor: review.color }} key={index}>
//         <p className="rw-led-testimonial-text">“{review.comment}”</p>
//         <h4 className="rw-led-testimonial-author">- {review.name}</h4>
//       </div>
//     ))}
//   </div>
// </section> */}

//     </div>
//   );
// };

// export default Led;





import React, { useRef, useState, useEffect } from 'react';
import "./Led.css"
// import led from "./images/led1.jpeg"
// import led2 from "./images/led2.jpeg"
import led3 from "./images/led3.jpeg"
import LED1 from "./images/32inch.jpg"
import LED2 from "./images/42inch.jpg"
import LED3 from "./images/52inch.jpg"
import LED4 from "./images/68inch.jpg"
import inchled from "./images/Led 98.jpg"
import TV from "./images/tv 2.jpeg"
import Advertise from "./images/ADVERTISE.jpeg"
import Last from "./images/ADVERTISELAST.jpeg"
import television from "./images/98inch.jpg"


// ott

import netflix from './images/netflix.jpg';
import disney from './images/disneylogo.webp';
import prime from './images/PrimeVideo.png';
import hulu from './images/HuluLogopng.png';
import spotify from './images/Spotify.png';
import apple from './images/appleitunes.png';
// import google from './images/g';
import sony from './images/Sony-Liv.jpeg';


// import vibrantImg from './images/102inch.jpg';
// import innovativeImg from './images/68inch.jpg';
// import fashionableImg from './images/78inch.jpg';
// import premiumImg from './images/42inch.jpg';
export default function Led() {


  const products = [
    {
      img: LED1,
      name: "43 Smart LED TV",
      subtitle: "A sleek, frameless Full HD TV with Dolby Audio, ideal for immersive entertainment. Built-in Play Store and voice remote support",
    },
    {
      img: LED2,
      name: "55 WebOS LED TV",
      subtitle: "WebOS interface with smart 4K clarity and Dolby audio. Built for users who want convenience with elegance.",
    },
    {
      img: LED3,
      name: "85 WebOS LED TV",
      subtitle: "Ideal for large home setups, delivering seamless 4K quality and premium sound. Built to impress",
    },
    {
      img: LED4,
      name: "98 WebOS LED TV",
      subtitle: "The grandest display in the range — a true home-theatre experience. Powerful visuals and immersive Dolby audio.",
    },
  ];


  const cards = [
    {
      image: LED1,
      title: '32" Smart LED TV',
      tag: 'Frameless and feature-rich, this Smart 32" TV supports Chromecast, Google Assistant, and a smooth viewing experience.',
      perageaph: 'RAM: 1GB | ROM: 8GB',
      perageaph: 'Chromecast, Google Assistant, Voice Remote',
      perageaph: 'Dual USB, Dual HDMI',
      perageaph: 'Frameless HD Display | Free Wall Mount',

    },
    {
      image: LED2,
      title: ' 24" Smart LED TV',
      // date: '2025-04-28',
      tag: 'The same sleek design with the added benefit of Smart features — perfect for streaming, casual viewing, and compact setups.',
    },
    {
      image: LED3,
      title: '98" WebOS LED TV',
      // date: '2025-04-25',
      tag: 'The grandest display in the range — a true home-theatre experience. Powerful visuals and immersive Dolby audio.',
    },
    {
      image: LED4,
      title: ' 65" WebOS LED TV',
      // date: '2025-04-25',
      tag: 'Step into a cinematic experience with this large-screen 4K Ultra HD Smart TV. Voice command and powerful audio included.',
    },
    {
      image: television,
      title: '55" Android LED TV',
      // date: '2025-04-25',
      tag: 'Ultra HD display with Android 6.0 and a 4-core processor. Packed with performance for OTT streaming and gaming.',
    },
  ];

  const logos = [
    netflix, disney, prime, hulu, spotify, apple, sony,
    // Repeat again for smooth infinite effect
    netflix, disney, prime, hulu, spotify, apple, sony,
  ];
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const updateWidth = () => {
    const card = document.querySelector('.slider-card');
    if (card) setCardWidth(card.offsetWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleNext = () => {
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    if (index < cards.length - visibleCards) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  }, [index, cardWidth]);


  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={inchled} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={TV} className="d-block w-100" alt="..." />
          </div>
          {/* <div className="carousel-item">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div> */}
          <div className="carousel-item">
            <img src={led3} className="d-block w-100" alt="..." />
          </div>
          {/* <div className="carousel-item">
              <img src={ledad} className="d-block w-100" alt="..." />
            </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* second code */}

      <div className="launches-container">
        <h2>Newest Launches</h2>
        <div className="tabs">
          <span className="active-tab">2025 New Lineup</span>
          <span>Mini LED & QLED TVs</span>
        </div>

        <div className="main-featured">
          <div className="featured-img-box">
            <img src={LED1} alt="LED1" />
            <div className="overlay">
              <h3>32" Smart LED TV</h3>
              <p>Frameless and feature-rich, this Smart 32" TV supports Chromecast, Google Assistant, and a
                smooth viewing experience.</p>
              {/* <button>Learn More</button> */}
            </div>
          </div>
          <p className="caption" style={{
            fontWeight: '600',
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '20px',
            margin: '30px',
            fontFamily: 'sans-serif',
            zIndex: 2,
            color: '#cc111a'
          }}><br />Our Top Notch Product's</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.subtitle}</p>
            </div>
          ))}
        </div>
      </div>





      {/* theard card  */}



      <section className="rw-slider-section">
        <h2>Discover More with Red Wolf</h2>
        <div className="rw-slider-container">
          <button className="rw-slider-btn prev" onClick={handlePrev}>&#8249;</button>

          <div className="rw-slider-track" ref={trackRef}>
            {cards.map((card, i) => (
              <div className="rw-slider-card" key={i}>
                <img src={card.image} alt={`Slide ${i}`} />
                <h4>{card.title}</h4>
                <span>{card.tag}</span>
                <br />
                <p>{card.perageaph}</p>
              </div>
            ))}
          </div>

          <button className="rw-slider-btn next" onClick={handleNext}>&#8250;</button>
        </div>
      </section>


      {/* FOURTH SECTION */}

      <section>
        <img src={Advertise} alt="advertise" style={{ width: '100%' }} />
        <br />
        <div className="ott-slider">
          <div className="slider-track">
            {logos.map((logo, index) => (
              <div className="ott-slide" key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <img src={Last} alt="advertiselast" style={{ width: '100%' }} />

      </section>

    </>
  )
}











