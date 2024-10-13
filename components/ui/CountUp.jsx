'use client';
import { useState, useEffect } from 'react';

const CountUp = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 4000;
        const incrementTime = 100;

        const step = Math.ceil((target - start) / (duration / incrementTime));

        const interval = setInterval(() => {
            setCount((prevCount) => {
                const nextCount = prevCount + step;
                if (nextCount >= target) {
                    clearInterval(interval);
                    return target;
                }
                return nextCount;
            });
        }, incrementTime);

        return () => clearInterval(interval);
    }, [target]);

    return <span className='font-bold'>{count}%</span>;
};

export default CountUp;
