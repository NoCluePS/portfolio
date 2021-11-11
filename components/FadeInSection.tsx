import React, { useState, useRef, useEffect } from 'react';

import { isMobile } from 'react-device-detect';

export const FadeInSection: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    observer.observe(domRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`mt-10 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
