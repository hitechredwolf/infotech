import React from 'react';
import './featurecrd.css';

const FeatureCard = ({ image, title, description, highlight }) => {
    return (
        <div className={`feature-card ${highlight ? 'highlight' : ''}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
