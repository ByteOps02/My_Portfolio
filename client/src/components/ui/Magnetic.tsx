import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { debounce } from '@/lib/utils';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({ children, className = "", strength = 50 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const debouncedHandleMouse = useCallback(
    debounce((e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      if (!ref.current) return;
      
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      setPosition({ x: middleX / (100 / strength), y: middleY / (100 / strength) });
    }, 20),
    [strength]
  );

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={debouncedHandleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
