"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "", label: "Services" },
  { value: 5, suffix: "-Star", label: "Rated" },
  { value: 0, suffix: "Same-Day", label: "Quotes" },
];

function Counter({
  target,
  suffix,
  isText,
}: {
  target: number;
  suffix: string;
  isText?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || target === 0) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);

  if (isText) return <span ref={ref}>{suffix}</span>;
  if (target === 0) return <span ref={ref}>{suffix}</span>;

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#1A1E32] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-[#1FC6C7] leading-none mb-2">
                {stat.value === 0 ? (
                  <Counter target={0} suffix={stat.suffix} isText />
                ) : (
                  <Counter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
