import React from 'react';
import FeatureCard from './FeatureCard';
import './featuresection.css';

import device from './images/Remote-Device.gif';
import application from "./images/Application Control.gif";
import network from "./images/simandnetwork.gif";
import wirless from "./images/Wireless.gif";
import location from "./images/Advanced-Location.gif";
import Maintenance from "./images/Proactive-Maintenance.gif";


const features = [
    {
        image: device,
        title: 'Android Finance Locker',
        description: 'Your money. Your control.Track EMIs, bills & dues — all in one powerful Android app. Built for speed, security, and simplicity.',
        link: '/products/android-finance-locker',
    },
    {
        image: application,
        title: 'iMac Finance Locker',
        description: 'Smart finance, the Apple way.Seamlessly manage your EMIs and expenses on macOS — smooth, intuitive, and built for productivity.',
        link: '/products/imac-finance-locker',
    },
    {
        image: network,
        title: 'LED TV',
        description: 'Visuals that speak louder.Ultra HD clarity, Dolby sound, and smart connectivity — Red Wolf TVs redefine what a screen can do.',
        link: '/products/led-tv',
    },
    {
        image: wirless,
        title: 'Speaker',
        description: 'Sound that hits different.Deep bass. RGB vibes. Built-in power. Red Wolf speakers turn every room into a concert.',
        link: '/products/speaker',
    },
    {
        image: location,
        title: 'EV',
        description: 'Electric. Efficient. Exceptional. Red Wolf EVs deliver future-ready mobility — eco-smart rides crafted for Indian roads.',
        link: '/products/ev',
    },
    {
        image: Maintenance,
        title: 'Other Products (Coming Soon)',
        description: 'We’re powering your entire home.Washing machines, geysers & more Red Wolf HomeTech is coming. Stay tuned for smart living.',
        link: '/products/coming-soon',
    },
];

const FeatureSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-heading">
                    <h2>
                        <span className="red">Red Wolf</span> <span className="ev">Products</span>
                    </h2>
                </div>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            highlight={index % 2 === 0} // Highlight only 0, 2, 4
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
