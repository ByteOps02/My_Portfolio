import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const hoveringRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    
    if (isTouchDevice || isSmallScreen) {
      setIsVisible(false);
      return;
    }
    
    setIsVisible(true);

    const updateCursor = () => {
      if (cursorRef.current && ringRef.current) {
        const { x, y } = positionRef.current;
        const isHovering = hoveringRef.current;
        const scale = isHovering ? 2.5 : 1;
        
        cursorRef.current.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0) scale(${isHovering ? 0 : 1})`;
        ringRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0) scale(${scale})`;
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(255, 255, 255, 1)' : 'transparent';
        ringRef.current.style.borderColor = isHovering ? 'transparent' : 'currentColor';
      }
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const moveCursor = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hoveringRef.current = !!(target.tagName === 'A' || target.tagName === 'BUTTON' || 
                           target.closest('a') || target.closest('button'));
    };

    rafRef.current = requestAnimationFrame(updateCursor);
    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform', transition: 'transform 0.15s ease-out' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ willChange: 'transform', transition: 'transform 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out' }}
      />
    </>
  );
}
