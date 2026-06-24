import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Toaster
        position="top-right"
        richColors
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            backdropFilter: 'blur(12px)',
            fontFamily: "'Playfair Display', serif"
          }
        }}
      />
      <CustomCursor />
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />

        <footer className="py-12 text-center border-t-2 border-amber-400/30 backdrop-blur-xl bg-gradient-to-r from-purple-900/20 to-rose-900/20">
          <p className="text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
            © 2026 MariaVictor G. Designed with passion and code.
          </p>
          <p className="text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 bg-clip-text mt-2 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Built with React, Motion, GSAP & Love
          </p>
        </footer>
      </div>
    </div>
  );
}