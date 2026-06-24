import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.about-text');

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="text-6xl font-bold mb-16 bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="about-text backdrop-blur-xl bg-gradient-to-br from-purple-900/20 to-rose-900/20 p-8 rounded-3xl border border-amber-400/30 shadow-2xl relative overflow-hidden"
            style={{ willChange: 'transform, opacity' }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h3 className="text-3xl font-semibold mb-6 text-amber-300" style={{ fontFamily: "'Cinzel', serif" }}>
              Professional Summary
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
              Artificial Intelligence and Data Science undergraduate with a strong foundation in Python, SQL, MongoDB, Power BI, and web development technologies. Experienced in developing AI-driven, cybersecurity, data analytics, and dashboard-based projects, with practical exposure to customer relationship management and database management. Skilled in problem-solving, data analysis, decision-making, and building technology solutions that address real-world challenges. Passionate about emerging technologies, continuous learning, and applying data-driven insights to improve business and operational outcomes.
            </p>
          </motion.div>

          <motion.div
            className="about-text backdrop-blur-xl bg-gradient-to-br from-rose-900/20 to-purple-900/20 p-8 rounded-3xl border border-rose-400/30 shadow-2xl relative overflow-hidden"
            style={{ willChange: 'transform, opacity' }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <h3 className="text-3xl font-semibold mb-6 text-rose-300" style={{ fontFamily: "'Cinzel', serif" }}>
              Education
            </h3>
            <div className="space-y-4 text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
              <div>
                <h4 className="text-xl font-semibold text-white">Bachelor of Technology</h4>
                <p className="text-amber-400">Artificial Intelligence and Data Science</p>
                <p className="text-sm">Dhanalakshmi Srinivasan College of Engineering, Coimbatore</p>
                <p className="text-sm mt-2">2022 - 2026 • CGPA: 7.80</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text backdrop-blur-xl bg-gradient-to-br from-teal-900/20 to-amber-900/20 p-8 rounded-3xl border border-amber-400/30 shadow-2xl md:col-span-2 relative overflow-hidden"
            style={{ willChange: 'transform, opacity' }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <h3 className="text-3xl font-semibold mb-6 text-amber-300" style={{ fontFamily: "'Cinzel', serif" }}>
              Internship Experience
            </h3>
            <div className="space-y-4 text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
              <div>
                <h4 className="text-xl font-semibold text-white">Web Development Intern</h4>
                <p className="text-rose-400">February 2024 - March 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
                  <li>Trained in web development fundamentals</li>
                  <li>Worked with HTML, CSS, PHP, and SQL technologies</li>
                  <li>Developed responsive web pages and applications</li>
                  <li>Learned front-end and back-end development concepts</li>
                  <li>Gained hands-on experience in website design and maintenance</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
