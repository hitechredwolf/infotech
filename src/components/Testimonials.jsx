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

    const [playingVideo, setPlayingVideo] = useState(null);
    const [hoveredVideo, setHoveredVideo] = useState(null);

    const handlePlayPause = (videoId) => {
        const currentVideo = videoRefs[videoId].current;
        if (!currentVideo) return;

        // Pause other videos
        Object.entries(videoRefs).forEach(([id, ref]) => {
            if (id !== videoId && ref.current) {
                ref.current.pause();
            }
        });

        if (currentVideo.paused) {
            currentVideo.play();
            setPlayingVideo(videoId);
        } else {
            currentVideo.pause();
            setPlayingVideo(null);
        }
    };

    const handleMouseEnter = (videoId) => setHoveredVideo(videoId);
    const handleMouseLeave = () => setHoveredVideo(null);

    return (
        <section className="testimonials">
            <h2 className="about-us-heading">What Our Clients Say's</h2>
            <div className="testimonials-container">
                {["video1", "video2", "video3"].map((videoId, index) => (
                    <div
                        key={videoId}
                        className="testimonial-card"
                        onMouseEnter={() => handleMouseEnter(videoId)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <video ref={videoRefs[videoId]} id={videoId} loop playsInline>
                            <source src={[test1, test2, test3][index]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            className={`playPauseBtn ${hoveredVideo === videoId ? 'visible' : ''}`}
                            onClick={() => handlePlayPause(videoId)}
                        >
                            {playingVideo === videoId ? <FaPause /> : <FaPlay />}
                        </button>
                        <div className="testimonial-content">
                            <p>
                                {[
                                    '"This service changed my business. The experience was top-notch!"',
                                    '"A truly professional team. Highly recommend their work!"',
                                    '"Absolutely incredible results! Exceeded my expectations."'
                                ][index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;