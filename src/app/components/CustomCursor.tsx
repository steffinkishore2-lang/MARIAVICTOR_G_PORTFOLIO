import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main airplane cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          rotate: 45,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <Plane
          className="w-10 h-10 text-amber-400"
          strokeWidth={2}
          fill="rgba(251, 191, 36, 0.3)"
        />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4), rgba(236, 72, 153, 0.2), transparent)',
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8
        }}
      />

      {/* Additional glow when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9997]"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3), transparent)',
          }}
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        />
      )}
    </>
  );
}
