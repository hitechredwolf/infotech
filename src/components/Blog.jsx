import React, { useState } from "react";
import blog1 from "./images/blog1.jpg";
// import blog2 from "./images/blog2.jpg";
import blog3 from "./images/vlog.jpg";
import blog5 from "./images/Possss.jpg";

import blog4 from "./images/Led Poster.jpg";
import evblog from "./images/evblog.jpg"
import "./blog.css";

const Blog = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Blogs Array (Unique IDs)
    const blogs = [
        {
            id: 1,
            title: "Why T-COPS EMI Finance Locker?",
            desc: "In today’s fast-paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses. Delays, defaults, and lack of secure tracking often lead to stress and losses. That’s where Red Wolf Info Tech Pvt. Ltd. steps in with its breakthrough solution — T-COPS EMI Finance Locker.",
            img: blog1,
            full: "Revolutionizing EMI Collections with T-COPS EMI Finance Locker In today’s fast- paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses.Delays, defaults, and lack of secure tracking often lead to stress and losses.That’s where Red Wolf Info Tech Pvt.Ltd.steps in with its breakthrough solution — T - COPS EMI Finance Locker. Why T - COPS EMI Finance Locker ? At Red Wolf Info Tech, we believe in empowering businesses with smart technology that makes operations seamless.Our EMI Finance Locker is designed to not only simplify collections but also give lenders complete control and security over financed devices. With T - COPS EMI Locker, lenders can: ✅ Track device location in real time. ✅ Lock or unlock financed devices online. ✅ Secure the device with camera lock and phone lock. ✅ Reboot devices remotely in case of default. ✅ Manage EMI recovery without stress or manual intervention. This isn’t just software — it’s a digital shield for your business. How It Works When a customer purchases a device on EMI, the T - COPS Finance Locker is integrated into it.If payments are delayed or missed, lenders have the power to: Restrict device functionality. Send reminders and warnings directly on the phone.  Lock access until dues are cleared. This ensures on - time EMI collections while reducing risks of fraud and defaults. Benefits for Businesses 📈 Faster EMI Recovery – Improve cash flow and reduce losses. 🔒 Unmatched Security – Ensure financed devices are always under control. ⚡ Smart Automation – No more chasing defaulters manually.  🌐 Scalable & Reliable – Works across locations and for businesses of all sizes. Why Choose Red Wolf Info Tech ?  With years of expertise in technology - driven business solutions, Red Wolf Info Tech has built trust with partners across industries.Our mission is to makefinancesecure, simple, and scalable. The T - COPS EMI Finance Locker is not just a product; it’s a commitment to helping businesses thrive with peace of mind. Conclusion If EMI collections have ever been a roadblock for your business, it’s time to switch to a smarter way.With T - COPS EMI Finance Locker by Red Wolf Info Tech, you get technology that puts you back in control — ensuring security, efficiency, and growth. 📞 Contact Us: 9988401333 🌐 Website: www.redwolfinfotech.com"
        },
        {
            id: 3,
            title: "Why Redwolf LED TVs?",
            desc: "At Red Wolf Info Tech, we don’t just create products — we create experiences. With our Redwolf LED TV range, entertainment steps beyond the ordinary, bringing breathtaking visuals, lifelike sound, and cutting-edge technology right into your living room.",
            img: blog3,
            full: "Redwolf LED TVs: Where Every Pixel Comes Alive At Red Wolf Info Tech, we don’t just create products — we create experiences. With our Redwolf LED TV range, entertainment steps beyond the ordinary, bringing breathtaking visuals, lifelike sound, and cutting-edge technology right into your living room.Imagine dinosaurs roaring to life, galaxies unfolding in infinite detail, and every movie scene making you feel like you’re part of the story. That’s the Redwolf promise — “Where Dreams Come Alive.” Why Redwolf LED TVs? 📺 Ultra HD & HDR Brilliance Whether it’s 4K UHD or HDR10, every frame is packed with detail and clarity, ensuring that what you see is true-to-life and vibrant. 🎥 Cinematic Dolby Audio Sound isn’t just heard — it’s experienced. Dolby-powered audio fills your room, making action scenes thunderous and dialogues crisp. ⚡ Smart TV Powered by Android Seamless access to apps, streaming platforms, and smart features means your entertainment is always at your fingertips. 🎮 Lag-Free Gaming Mode With HDMI and enhanced refresh rates, gaming becomes smoother, sharper, and more immersive. 🌍 Wide Range of Sizes From compact 24-inch screens for bedrooms to stunning 98-inch displays for larger-than-life experiences — Redwolf LED TVs fit every space and lifestyle. Built for Today, Ready for Tomorrow Entertainment is evolving — and so are we. With Redwolf LED TVs, you don’t just get a television; you get a complete entertainment hub. Every product is designed with advanced technology, premium build quality, and a focus on giving you more than just viewing — we give you experiences that stay with you. Join the Redwolf Experience As part of the Red Wolf Info Tech family, our mission is to blend technology with lifestyle. From T-COPS EMI Locker to Speakers, EVs, and LED TVs, we’re building an ecosystem that makes life smarter, simpler, and more entertaining. 👉 Step into the future of entertainment with Redwolf LED TVs — where every pixel bites back, and every moment feels alive. 📞 Contact us today: 9717660554 | 9988401333🌐 www.redwolfinfotech.com"
        },
        {
            id: 4,
            title: "Why T-COPS EMI Finance Locker?",
            desc: "In today’s fast-paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses. Delays, defaults, and lack of secure tracking often lead to stress and losses. That’s where Red Wolf Info Tech Pvt. Ltd. steps in with its breakthrough solution — T-COPS EMI Finance Locker.",
            img: blog1,
            full: "Revolutionizing EMI Collections with T-COPS EMI Finance Locker In today’s fast- paced world, managing EMI collections is one of the biggest challenges faced by financial institutions, lenders, and businesses.Delays, defaults, and lack of secure tracking often lead to stress and losses.That’s where Red Wolf Info Tech Pvt.Ltd.steps in with its breakthrough solution — T - COPS EMI Finance Locker. Why T - COPS EMI Finance Locker ? At Red Wolf Info Tech, we believe in empowering businesses with smart technology that makes operations seamless.Our EMI Finance Locker is designed to not only simplify collections but also give lenders complete control and security over financed devices. With T - COPS EMI Locker, lenders can: ✅ Track device location in real time. ✅ Lock or unlock financed devices online. ✅ Secure the device with camera lock and phone lock. ✅ Reboot devices remotely in case of default. ✅ Manage EMI recovery without stress or manual intervention. This isn’t just software — it’s a digital shield for your business. How It Works When a customer purchases a device on EMI, the T - COPS Finance Locker is integrated into it.If payments are delayed or missed, lenders have the power to: Restrict device functionality. Send reminders and warnings directly on the phone.  Lock access until dues are cleared. This ensures on - time EMI collections while reducing risks of fraud and defaults. Benefits for Businesses 📈 Faster EMI Recovery – Improve cash flow and reduce losses. 🔒 Unmatched Security – Ensure financed devices are always under control. ⚡ Smart Automation – No more chasing defaulters manually.  🌐 Scalable & Reliable – Works across locations and for businesses of all sizes. Why Choose Red Wolf Info Tech ?  With years of expertise in technology - driven business solutions, Red Wolf Info Tech has built trust with partners across industries.Our mission is to makefinancesecure, simple, and scalable. The T - COPS EMI Finance Locker is not just a product; it’s a commitment to helping businesses thrive with peace of mind. Conclusion If EMI collections have ever been a roadblock for your business, it’s time to switch to a smarter way.With T - COPS EMI Finance Locker by Red Wolf Info Tech, you get technology that puts you back in control — ensuring security, efficiency, and growth. 📞 Contact Us: 9988401333 🌐 Website: www.redwolfinfotech.com"
        },
        {
            id: 2,
            title: "Red Wolf Trance Jr. – Compact Speaker, Powerful Sound",
            desc: "When it comes to music, size doesn’t always define power. The Red Wolf Trance Jr. speaker is proof that great things come in compact designs. Engineered for music lovers who crave deep bass, crystal-clear sound, and portable convenience, Trance Jr. is your perfect audio partner for every occasion.",
            img: blog5,
            full: "Red Wolf Trance Jr. – Compact Speaker, Powerful Sound When it comes to music, size doesn’t always define power. The Red Wolf Trance Jr. speaker is proof that great things come in compact designs. Engineered for music lovers who crave deep bass, crystal-clear sound, and portable convenience, Trance Jr. is your perfect audio partner for every occasion. 🔊 Features that Stand Out Audio Jack Connectivity 🎧 Seamlessly plug and play with wired devices for uninterrupted music. Deep Bass Performance 🎶 Experience punchy lows and powerful sound that make every beat come alive. 8 Hours of Playtime 🔋 Long-lasting battery life ensures non-stop entertainment, whether it’s a party, a road trip, or a casual evening with friends. Bluetooth 5.0  Enjoy faster pairing, stable connections, and wireless freedom with the latest Bluetooth technology. 🌟 Why Choose Trance Jr.? The Trance Jr.isn’t just a speaker — it’s an experience.Designed for portability and performance, it’s perfect for gatherings, celebrations, or even solo music sessions.Available in sleek Black & Gray finishes, it blends style with power, making it a must - have addition to your audio gear. 🐺 Red Wolf Promise At Red Wolf, we don’t just create speakers — we create experiences.With Trance Jr., you get a product that is crafted for durability, designed for performance, and built to impress. Make every moment musical with Red Wolf Trance Jr.! 📞 9717660554 | 9988401333 🌐 www.redwolfinfotech.com"
        },
        {
            id: 6,
            title: "Red Wolf LED TV – Where Every Pixel Tells a Story",
            desc: "In today’s fast-paced digital world, entertainment is more than just watching a show or a movie – it’s about experiencing every moment in its truest form. At Red Wolf Info Tech, we’ve crafted our Red Wolf LED TV to give your living room a cinematic transformation like never before.",
            img: blog4,
            full: "4K Ultra HD Display – Clarity Beyond Imagination With cutting-edge 4K Ultra HD, every frame bursts to life with stunning clarity, vibrant colors, and breathtaking detail. Whether you’re watching your favorite movie, catching up on a live match, or streaming the latest series, you’ll see visuals as crisp as reality. Ultra Widescreen – Bigger, Better, Bolder Step into the world of immersive viewing with an ultra widescreen display that makes every moment larger than life. Perfect for family gatherings, movie nights, or gaming marathons, it ensures you don’t miss a single detail. High-Quality Speakers – Feel the Sound Your entertainment is incomplete without powerful sound. The Red Wolf LED TV comes equipped with high-quality speakers, delivering crystal-clear audio and deep bass that elevate your experience. From dialogues to background scores, every sound is sharp and immersive. Seamless Connectivity – Entertainment Without Limits Smart, simple, and seamless – our LED TV supports smooth connectivity options to let you stream, browse, or connect effortlessly. Be it movies, music, or gaming, switching between platforms is easier than ever. At Red Wolf, we believe in blending technology with lifestyle. The Red Wolf LED TV isn’t just a screen – it’s a gateway to endless entertainment, smarter living, and memorable moments with your loved ones. ✨ Red Wolf LED TV – See the Future of Entertainment, Today."
        },

        {
            id: 7,
            title: "Go Green with Redwolf EV, Ride the Electric Thrill, Sustain the Planetƒ",
            desc: "In a world moving towards sustainable living, Redwolf EV takes a bold step forward with its vision to make eco-friendly commuting accessible, stylish, and powerful. Our “Go Green” initiative is not just a campaign; it’s a movement to inspire smarter, cleaner, and greener mobility for every rider.",
            img: evblog,
            full: "Ride Smart. Save the Planet. Every ride on a Redwolf Electric Scooter contributes to a cleaner environment. With zero emissions and high energy efficiency, our EVs help reduce your carbon footprint while providing smooth, silent, and cost-effective rides. Designed for Performance and Purpose Beyond being green, Redwolf EV scooters are built for performance. From sleek aerodynamics and powerful battery life to instant torque and modern styling, every model combines innovation, comfort, and reliability, making them ideal for urban and modern lifestyles. Why Go Green with Redwolf EV? ✅ Zero emissions, zero guilt ⚡ High-performance electric motor 🔋 Long-lasting, fast-charging batteries 🌿 Low maintenance, high savings 🛵 Perfect for daily commutes and eco-conscious living The Future is Electric At Redwolf EV, we believe that sustainability and style can go hand in hand. Choosing electric isn’t just about transportation; it’s about responsibility. Together, we can change the way India moves, one green ride at a time. Go Green. Ride the Electric Thrill. 📞 9988-401-333 | 🌐 www.redwolfinfotech.com ✉️ info@redwolfinfotech.com #RedwolfEV #GoGreen #ElectricRevolution #RideTheElectricThrill #SustainableMobility #EcoFriendlyFuture"
        }
    ];

    // Reverse for latest first
    const sortedBlogs = [...blogs].reverse();

    // Pagination Logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

    return (
        <div className="blog-container">
            <h1 className="blog-header">Red Wolf Blog</h1>

            {/* Blog Grid */}
            <div className={`blog-grid ${activeCard ? "blur-bg" : ""}`}>
                {currentBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="blog-card"
                        onClick={() => setActiveCard(blog)}
                    >
                        <img src={blog.img} alt={blog.title} />
                        <h2>{blog.title}</h2>
                        <p>{blog.desc}</p>
                    </div>
                ))}
            </div>

            {/* Pagination Numbers */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Fullscreen Blog View */}
            {activeCard && (
                <div className="fullscreen-card" onClick={() => setActiveCard(null)}>
                    <div
                        className="fullscreen-bg"
                        style={{ backgroundImage: `url(${activeCard.img})` }}
                    ></div>
                    <div className="fullscreen-overlay"></div>

                    <div
                        className="fullscreen-content-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={() => setActiveCard(null)}>
                            &larr; Back
                        </button>
                        <h2>{activeCard.title}</h2>
                        <p>{activeCard.full}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;






