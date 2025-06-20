// src/components/CounterCard.jsx

import React, { useEffect, useRef } from 'react';

const CounterCard = ({ target, label }) => {
    const counterRef = useRef(null);

    useEffect(() => {
        let count = 0;
        const increment = target / 300;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                counterRef.current.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counterRef.current.innerText = target + '+';
            }
        };

        updateCount();
    }, [target]);

    return (
        <div className="stats-card">
            <div className="stats-number" ref={counterRef}>0</div>
            <div className="stats-label">{label}</div>
        </div>
    );
};

export default CounterCard;
