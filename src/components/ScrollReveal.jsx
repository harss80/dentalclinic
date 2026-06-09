import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, duration = 0.8, className = "", yOffset = 40, xOffset = 0, scale = 0.95 }) {
  // Animations disabled for performance as requested
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Stagger parent container
export function StaggerContainer({ children, delayChildren = 0.1, staggerChildren = 0.12, className = "" }) {
  // Animations disabled for performance as requested
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Stagger item
export function StaggerItem({ children, className = "", yOffset = 30 }) {
  // Animations disabled for performance as requested
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Magnetic hover effect for buttons
export function Magnetic({ children, strength = 0.35 }) {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// 3D Tilt Card Effect
export function TiltCard({ children, className = "" }) {
  const ref = React.useRef(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rX = (mouseY / (height / 2)) * -6; // max 6 deg tilt
    const rY = (mouseX / (width / 2)) * 6; // max 6 deg tilt
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
