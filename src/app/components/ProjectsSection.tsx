import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Shield, AlertTriangle, Zap, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Neuro Guard',
    subtitle: 'AI-Powered Intelligent Vault & Secure Chat',
    description: 'Developed an AI-powered cybersecurity platform with multi-factor authentication. Implemented encrypted file storage and secure communication features. Integrated AI-based threat detection to enhance data security and privacy. Focused on secure data management and user authentication.',
    icon: Shield,
    color: 'from-amber-500 via-rose-500 to-purple-600',
    date: '2026'
  },
  {
    title: 'Fake News Detection Dashboard',
    subtitle: 'Interactive Excel Analytics',
    description: 'Built an interactive Excel dashboard to analyze fake news trends. Identified misinformation patterns and high-risk content categories. Applied data analysis and visualization techniques to generate insights. Created reports for effective monitoring and decision-making.',
    icon: AlertTriangle,
    color: 'from-purple-500 via-pink-500 to-rose-600',
    date: '2024'
  },
  {
    title: 'Smart City Energy Tracker',
    subtitle: 'Power BI Dashboard Solution',
    description: 'Designed a Power BI dashboard for monitoring energy consumption. Analyzed peak usage patterns and renewable energy utilization. Generated insights for energy optimization and cost savings. Developed interactive visualizations for smarter energy management.',
    icon: Zap,
    color: 'from-amber-500 via-orange-500 to-pink-600',
    date: '2024'
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.project-card');

      cards.forEach((card, index) => {
        // Simplified entrance animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen flex items-center py-32 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-bold mb-20 text-center bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card relative group"
              style={{ perspective: 1000 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative h-[500px]"
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-amber-400/20 shadow-2xl overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                  <div className="relative p-8 h-full flex flex-col">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                        scale: hoveredIndex === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="mb-6"
                    >
                      <project.icon className="w-16 h-16 text-amber-400" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-3 text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-rose-300 mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 flex-grow" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.description}
                    </p>
                    <p className="text-sm text-amber-400 mt-4">{project.date}</p>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-amber-400/0 rounded-3xl"
                    animate={{
                      borderColor: hoveredIndex === index ? 'rgba(251, 191, 36, 0.6)' : 'rgba(251, 191, 36, 0)',
                    }}
                  />
                </div>

                <div
                  className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-purple-900/60 to-rose-900/60 rounded-3xl border-2 border-amber-400/40 shadow-2xl p-8 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white text-center" style={{ fontFamily: "'Cinzel', serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Explore more projects on my GitHub profile
                  </p>
                  <motion.a
                    href="https://github.com/steffinkishore2-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-full font-semibold flex items-center gap-2 interactive border-2 border-amber-400/40"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 50px rgba(251, 191, 36, 0.9)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" /> View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
