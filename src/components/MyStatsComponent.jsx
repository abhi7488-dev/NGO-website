import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function AnimatedCounter({ endValue, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,    // Start animation when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * endValue));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [endValue, duration, inView]);

  return <h3 ref={ref} className="text-[30px] md:text-[69px] font-bold text-[#0C2C66]">{count}</h3>;
}

const stats = [
  { value: 100, label: 'Volunteers' },
  { value: 50, label: 'Schools' },
  { value: 200, label: 'Alumni' },
];

export default function MyStatsComponent() {
  return (
    <section id="stats" className="mt-[84px]">
      <div className="flex flex-wrap justify-center gap-y-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/3 flex flex-col items-center justify-center relative"
          >
            {/* Vertical Divider */}
            {(index === 0 || index === 1 || index === 3) && (
              <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gray-300"></span>
            )}
            <AnimatedCounter endValue={item.value} />
            <p className="text-gray-700 font-semibold text-[18px] md:text-[28px] mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}