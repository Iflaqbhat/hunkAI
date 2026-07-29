"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export function Reveal({
  children,
  className,
  index = 0,
  style
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const revealStyle = { ...style, ['--i' as string]: index } as CSSProperties;
  const revealClassName = [className, inView ? 'in-view' : undefined].filter(Boolean).join(' ');

  useEffect(() => {
    const element = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !element || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal style={revealStyle} className={revealClassName || undefined}>
      {children}
    </div>
  );
}
