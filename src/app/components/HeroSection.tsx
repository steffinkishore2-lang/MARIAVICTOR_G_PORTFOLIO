import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePhoto from '@/imports/Photo.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const fullName = 'MariaVictor G';
  const subtitle = 'Data Analyst • AI Developer • Problem Solver';
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= subtitle.length) {
          setDisplayedSubtitle(subtitle.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, fullName.length * 120);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      // Lighter parallax effect for hero content
      gsap.to(sectionRef.current.querySelector('.hero-content'), {
        y: 50,
        opacity: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="floating-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-orb absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-pink-500/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Extra glow behind photo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <div className="hero-content relative z-10 text-center px-6 flex flex-col items-center">

        {/* ── Profile Photo ── */}
        <motion.div
          className="relative mb-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Outer spinning ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #f59e0b, #f43f5e, #a855f7, #f59e0b)',
              padding: '3px',
              borderRadius: '9999px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full rounded-full bg-black" />
          </motion.div>

          {/* Inner pulsing glow ring */}
          <motion.div
            className="absolute inset-[-8px] rounded-full"
            style={{
              background: 'conic-gradient(from 180deg, #a855f7, #f43f5e, #f59e0b, #a855f7)',
              opacity: 0.4,
              filter: 'blur(12px)',
              borderRadius: '9999px',
            }}
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Ambient neon halo */}
          <motion.div
            className="absolute inset-[-20px] rounded-full"
            style={{
              boxShadow: '0 0 60px rgba(251,191,36,0.35), 0 0 120px rgba(244,63,94,0.25), 0 0 180px rgba(168,85,247,0.2)',
              borderRadius: '9999px',
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Photo container */}
          <motion.div
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden z-10 border-4 border-black"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 40px rgba(251,191,36,0.5), inset 0 0 20px rgba(0,0,0,0.6)',
            }}
          >
            <ImageWithFallback
              src={profilePhoto}
              alt="MariaVictor G — Data Analyst & AI Developer"
              className="w-full h-full object-cover"
            />
            {/* Glamour overlay sheen */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-purple-500/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Orbiting sparkle dots */}
          {[0, 72, 144, 216, 288].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#f59e0b', '#f43f5e', '#a855f7', '#f59e0b', '#f43f5e'][i],
                boxShadow: `0 0 8px ${['#f59e0b', '#f43f5e', '#a855f7', '#f59e0b', '#f43f5e'][i]}`,
              }}
              animate={{
                rotate: [deg, deg + 360],
                x: Math.cos((deg * Math.PI) / 180) * 110,
                y: Math.sin((deg * Math.PI) / 180) * 110,
              }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </motion.div>

        {/* ── Name & text ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="mb-4 flex justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-10 h-10 text-amber-400" />
          </motion.div>

          <h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {displayedName.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{
                  scale: 1.3,
                  y: -15,
                  filter: 'drop-shadow(0 0 25px rgba(251, 191, 36, 0.9))',
                  transition: { duration: 0.3 },
                }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </h1>

          <div className="h-20 mb-8">
            <p
              className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-rose-300 via-amber-300 to-purple-400 bg-clip-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {displayedSubtitle}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1 text-amber-400"
              >
                |
              </motion.span>
            </p>
          </div>

          <motion.div
            className="flex gap-6 justify-center mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-full text-lg backdrop-blur-sm border-2 border-amber-400/40 shadow-2xl shadow-amber-500/60 interactive relative overflow-hidden"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 50px rgba(251, 191, 36, 0.9), 0 0 100px rgba(236, 72, 153, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.a
              href="https://github.com/steffinkishore2-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 backdrop-blur-xl rounded-full text-lg border-2 border-amber-400/30 interactive relative overflow-hidden flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-10 h-10 text-amber-400 opacity-70" />
      </motion.div>
    </section>
  );
}
