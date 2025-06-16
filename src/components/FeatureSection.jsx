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
        title: 'Remote Device Management',
        description:
            'Whether connected online or offline, financial institutions can immediately lock or unlock devices. This ensures that any delay or default in EMI payments can trigger immediate action.',
    },
    {
        image: application,
        title: 'Selective Application Control',
        description:
            'The ability to lock or unlock specific applications adds an extra layer of security, allowing institutions to prevent unauthorized access to sensitive data.',
    },
    {
        image: network,
        title: 'Dynamic SIM and Network Monitoring',
        description:
            'With real-time SIM tracking, any change in device connectivity is instantly flagged, enhancing fraud prevention efforts.',
        highlight: true,
    },
    {
        image: wirless,
        title: 'Wireless Connectivity Management',
        description:
            'Features to control Wi-Fi, Bluetooth, and airplane mode enable complete oversight of a device’s connectivity options.',
    },
    {
        image: location,
        title: 'Advanced Location Services',
        description:
            'The solution supports both real-time and offline location tracking, ensuring that device whereabouts are constantly monitored regardless of network availability.',
    },
    {
        image: Maintenance,
        title: 'Proactive Device Maintenance',
        description:
            'A remote reboot function ensures that the system can refresh itself to avoid potential vulnerabilities.',
    },
];

const FeatureSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-heading">
                    <h2>
                        <span className="red">T-COPS</span> <span className="ev">Features</span>
                    </h2>
                </div>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;