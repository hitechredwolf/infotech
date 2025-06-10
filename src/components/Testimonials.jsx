import React, { useRef, useState } from 'react';
import './testimonials.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import test1 from "./images/test1.mp4";
import test2 from "./images/test2.mp4";
import test3 from "./images/test3.mp4";

const Testimonials = () => {
    const videoRefs = {
        video1: useRef(null),
        video2: useRef(null),
        video3: useRef(null),
    };

    const [playingVideo, setPlayingVideo] = useState(null); // Track which video is playing

    const handlePlayPause = (videoId) => {
        const currentVideo = videoRefs[videoId].current;

        if (!currentVideo) return;

        // Pause all other videos
        Object.entries(videoRefs).forEach(([id, ref]) => {
            if (id !== videoId && ref.current) {
                ref.current.pause();
            }
        });

        // Toggle play/pause for the clicked video
        if (currentVideo.paused) {
            currentVideo.play();
            setPlayingVideo(videoId);
        } else {
            currentVideo.pause();
            setPlayingVideo(null);
        }
    };

    return (
        <section className="testimonials">
            <h2 className="about-us-heading">What Our Clients Say's</h2>
            <div className="testimonials-container">

                {/* Testimonial 1 */}
                <div className="testimonial-card">
                    <video ref={videoRefs.video1} id="video1" loop playsInline>
                        <source src={test1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="playPauseBtn" onClick={() => handlePlayPause('video1')}>
                        {playingVideo === 'video1' ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="testimonial-content">
                        <p>"This service changed my business. The experience was top-notch!"</p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-card">
                    <video ref={videoRefs.video2} id="video2" loop playsInline>
                        <source src={test2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="playPauseBtn" onClick={() => handlePlayPause('video2')}>
                        {playingVideo === 'video2' ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="testimonial-content">
                        <p>"A truly professional team. Highly recommend their work!"</p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="testimonial-card">
                    <video ref={videoRefs.video3} id="video3" loop playsInline>
                        <source src={test3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="playPauseBtn" onClick={() => handlePlayPause('video3')}>
                        {playingVideo === 'video3' ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="testimonial-content">
                        <p>"Absolutely incredible results! Exceeded my expectations."</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
