// // src/components/CounterCard.jsx

// import React, { useEffect, useRef } from 'react';

// const CounterCard = ({ target, label }) => {
//     const counterRef = useRef(null);

//     useEffect(() => {
//         let count = 0;
//         const increment = target / 300;

//         const updateCount = () => {
//             if (count < target) {
//                 count += increment;
//                 counterRef.current.innerText = Math.ceil(count);
//                 requestAnimationFrame(updateCount);
//             } else {
//                 counterRef.current.innerText = target + '+';
//             }
//         };

//         updateCount();
//     }, [target]);

//     return (
//         <div className="stats-card">
//             <div className="stats-number" ref={counterRef}>0</div>
//             <div className="stats-label">{label}</div>
//         </div>
//     );
// };

// export default CounterCard;


import React, { useEffect, useState } from 'react';
import './featurecrd.css';

const CounterCard = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);

    const update = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(update,100);
      } else {
        setCount(target);
      }
    };

    update();
  }, [target]);

  return (
    <div className="counter-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

export default CounterCard;
