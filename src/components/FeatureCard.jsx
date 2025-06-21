import React from 'react';
import './featurecrd.css';
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description, highlight, link }) => {
    return (
        <Link to={link} className="feature-card-link">
            <div className={`feature-card ${highlight ? 'highlight' : ''}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default FeatureCard;
