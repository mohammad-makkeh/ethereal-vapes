"use client"
// components/TransitionIn.tsx
import { Variants, motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TransitionInProps {
  children: ReactNode;
  from?: 'left' | 'right' | 'up' | 'down';
}

const animationVariants: Variants = {
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  up: { y: -100, opacity: 0 },
  down: { y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 }
};

const TransitionIn: React.FC<TransitionInProps & { className?: string }> = ({ children, from = "down", className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={from}
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionIn;
