import React from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CounterCard from './components/CounterCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FeatureCard from './components/FeatureCard';
import FeatureSection from './components/FeatureSection';
import './app.css';
// import CounterCard from './components/CounterCard';
import Testimonials from './components/Testimonials';
import bannerAi from "./components/images/bannerAi.png";
import webbanner from "./components/images/web banner2.png";
import banner1 from "./components/images/banner1.png";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        {/* home page code */}

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bannerAi} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={webbanner} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
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

        {/* counter  */}

        <section className="stats-section text-center">
          <div className="container">
            <div className="row justify-content-center g-4">

              <div className="col-md-4">
                <CounterCard target={65} label="Super Distributors" />
              </div>

              <div className="col-md-4">
                <CounterCard target={390} label="Distributors" />
              </div>

              <div className="col-md-4">
                <CounterCard target={23400} label="Retailers" />
              </div>

            </div>
          </div>
        </section>

        {/* counter */}

        {/* <CounterCard/> */}
        <FeatureCard />
        <FeatureSection />



        {/* journey */}

        <section id="journey">
          <div class="timeline">
            <h1 class="section-title">
              <span class="ev">Our</span> <span class="red">Journey</span>
            </h1>
            {/* <!--first--> */}
            <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon ">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                July 2019
              </div>
              <div class="timeline__event__content ">
                <div class="timeline__event__title">
                  Stage 1
                </div>
                <div class="timeline__event__description">
                  <p>Finance Locker Developed by Rohit Jain ( Founder & Chairman)</p>
                </div>
              </div>
            </div>

            {/* <!--second--> */}

            <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                Oct 2019
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 2
                </div>
                <div class="timeline__event__description">
                  <p>Pankaj Chaturvedi have joined us as a (Co- Founder & Director)</p>
                </div>
              </div>
            </div>

            {/* <!--third--> */}

            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                Nov 2019
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 3
                </div>
                <div class="timeline__event__description">
                  <p>Introducing Finance Locker in all States of India.</p>
                </div>

              </div>
            </div>

            {/* <!--forth--> */}

            <div class="timeline__event animated fadeInUp timeline__event--type1">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                Dec 2022
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 4
                </div>
                <div class="timeline__event__description">
                  <p>To increase the power of Finance Locker, we create sales team.</p>
                </div>
              </div>
            </div>

            {/* <!--first--> */}
            <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon ">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                October 2023
              </div>
              <div class="timeline__event__content ">
                <div class="timeline__event__title">
                  Stage 5
                </div>
                <div class="timeline__event__description">
                  <p> We are now recognized as RedWolf Hi-Tech Pvt Ltd.</p>
                </div>
              </div>
            </div>

            {/* <!--second--> */}

            <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                November 2023
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 6
                </div>
                <div class="timeline__event__description">
                  <p>We established our dedicated IT team for innovation and growth.</p>
                </div>
              </div>
            </div>

            {/* <!--third--> */}

            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                December 2023
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 7
                </div>
                <div class="timeline__event__description">
                  <p>We became India's No. 1 Finance Locker, revolutionizing secure financial management with cutting-edge
                    technology.</p>
                </div>

              </div>
            </div>

            {/* <!--forth--> */}

            <div class="timeline__event animated fadeInUp timeline__event--type1">
              <div class="timeline__event__icon">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                February 2024
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">
                  Stage 8
                </div>
                <div class="timeline__event__description">
                  <p>We proudly celebrate 4.5 years of success with our Annual General Meeting (AGM).</p>
                </div>
              </div>
            </div>

            {/* <!--first--> */}
            <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon ">
                {/* <!-- <i class="lni-sport"></i>--> */}

              </div>
              <div class="timeline__event__date">
                March 2024
              </div>
              <div class="timeline__event__content ">
                <div class="timeline__event__title">
                  Stage 9
                </div>
                <div class="timeline__event__description">
                  <p>We successfully launched RedWolf EV, revolutionizing the future of electric mobility and AI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* ///////////////////////////////// */}

          <Testimonials/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
