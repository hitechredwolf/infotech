import React, { useEffect, useState } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          We'd love to hear from you. Fill out the form below and our team will get in touch.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            data-aos="fade-left"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            data-aos="fade-right"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            data-aos="fade-left"
          ></textarea>
          <button type="submit" data-aos="zoom-in">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Redwolf Location"
          src="https://maps.google.com/maps?q=Redwolf%20Infotech&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
