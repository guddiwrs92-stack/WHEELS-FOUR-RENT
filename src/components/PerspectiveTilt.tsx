import React, { useRef, useState } from 'react';

interface PerspectiveTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  glare?: boolean;
}

export const PerspectiveTilt: React.FC<PerspectiveTiltProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glare = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-1000 transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}

      {/* Dynamic Specular Light Glare following cursor */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: tilt.opacity,
            background: `radial-gradient(circle 320px at ${tilt.glareX}% ${tilt.glareY}%, rgba(199, 243, 107, 0.35), transparent 70%)`
          }}
        />
      )}
    </div>
  );
};
