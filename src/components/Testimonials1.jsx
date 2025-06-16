import React from "react";
import "./testimonials1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// // Image Imports
import img1 from "./images/rohit2.jpg";
import img2 from "./images/pankaj2.jpg";
// import img3 from "../components/images/testimonial-profile-3.png";

const testimonialsData = [
    {
        text: "Discovering Be Better was a game-changer! Their unmatched expertise skyrocketed my online presence and credibility. Highly recommended",
        name: "Amy",
        img: img1,
    },
    // {
    //     text: "Thanks to Be Better, I've unlocked my true potential and transformed how others perceive me. Their tailored strategies are a must for anyone looking to stand out!",
    //     name: "Jhon",
    //     img: img2,
    // },
    // {
    //     text: "Working with Be Better, was one of the best career decisions I've made. Their dedication resulted in a brand identity that truly resonates with my audience. Invest in your personal brand with them – you won't regret it!",
    //     name: "Katie",
    //     img: img3,
    // },
    // Repeating for loop effect
    // {
    //     text: "Thanks to Be Better, I've unlocked my true potential and transformed how others perceive me. Their tailored strategies are a must for anyone looking to stand out!",
    //     name: "Jhon",
    //     img: img2,
    // },
    // {
    //     text: "Working with Be Better, was one of the best career decisions I've made. Their dedication resulted in a brand identity that truly resonates with my audience. Invest in your personal brand with them – you won't regret it!",
    //     name: "Katie",
    //     img: img3,
    // },
    {
        text: "Discovering Be Better was a game-changer! Their unmatched expertise skyrocketed my online presence and credibility. Highly recommended",
        name: "Amy",
        img: img2,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial-section" id="testimonials">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <Swiper
                    className="testimonial-wrapper"
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={30}
                    loop={true}
                    speed={10000}
                    autoplay={{ delay: 3000 }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    breakpoints={{
                        // 480: {
                        //     slidesPerView: 1,
                        //     slidesPerGroup: 1,
                        // },
                        768: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                >
                    {testimonialsData.map((item, index) => (
                        <SwiperSlide key={index} className="testimonial-items">
                            <div
                                className="testimonial-img"
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>
                            <p className="testimonial-text">{item.text}</p>
                            <h3 className="testimonial-title">{item.name}</h3>
                            <div className="review-stars"></div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;