import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: 'Big Data Computing (NPTEL)', date: 'October 2024' },
  { name: 'UI/UX Design', date: 'April 2024' },
  { name: 'Agricultural Monitoring System, Planning & Researching, Medical Imaging Sensor', date: 'February 2024' },
  { name: 'Web Development Certification', date: 'March 2023' },
  { name: 'Naan Mudhalvan - Microsoft Office 365 Fundamentals', date: 'January 2023' },
  { name: 'Workshop on Android', date: 'March 2023' },
];

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.cert-item');

      items.forEach((item, index) => {
        // Simplified entrance animation
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: -40,
            scale: 0.98
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-bold mb-20 text-center bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-item group"
              style={{ willChange: 'transform' }}
              whileHover={{ scale: 1.02, x: 15, transition: { duration: 0.2 } }}
            >
              <div className="backdrop-blur-xl bg-gradient-to-r from-purple-900/20 via-rose-900/20 to-amber-900/20 p-6 rounded-2xl border-2 border-amber-400/20 shadow-xl relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-400 via-rose-400 to-purple-600"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-start gap-4 pl-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <Award className="w-8 h-8 text-amber-400 group-hover:text-rose-400 transition-colors" />
                  </motion.div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {cert.name}
                    </h3>
                    <p className="text-rose-400 text-sm font-semibold">{cert.date}</p>
                  </div>

                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-purple-600/30 flex items-center justify-center border-2 border-amber-400/40">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-amber-400 text-xl"
                      >
                        ✓
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
