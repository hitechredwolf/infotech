import React from 'react';
import FeatureCard from './FeatureCard';
import './featuresection.css';
const features = [
    {
        image: 'assets/Remote-Device.gif',
        title: 'Remote Device Management',
        description:
            'Whether connected online or offline, financial institutions can immediately lock or unlock devices. This ensures that any delay or default in EMI payments can trigger immediate action.',
    },
    {
        image: 'assets/Application Control.gif',
        title: 'Selective Application Control',
        description:
            'The ability to lock or unlock specific applications adds an extra layer of security, allowing institutions to prevent unauthorized access to sensitive data.',
    },
    {
        image: 'assets/simandnetwork.gif',
        title: 'Dynamic SIM and Network Monitoring',
        description:
            'With real-time SIM tracking, any change in device connectivity is instantly flagged, enhancing fraud prevention efforts.',
        highlight: true,
    },
    {
        image: 'assets/Wireless.gif',
        title: 'Wireless Connectivity Management',
        description:
            'Features to control Wi-Fi, Bluetooth, and airplane mode enable complete oversight of a device’s connectivity options.',
    },
    {
        image: 'assets/Advanced-Location.gif',
        title: 'Advanced Location Services',
        description:
            'The solution supports both real-time and offline location tracking, ensuring that device whereabouts are constantly monitored regardless of network availability.',
    },
    {
        image: 'assets/Proactive-Maintenance.gif',
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