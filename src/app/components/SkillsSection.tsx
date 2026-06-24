import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Database, Code2, Brain, BarChart3, GitBranch, Layout, FileSpreadsheet, Sparkles, FileCode, Palette } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: Database, level: 88 },
      { name: 'SQL', icon: Database, level: 90 },
      { name: 'MongoDB', icon: Database, level: 80 },
    ]
  },
  {
    category: 'Data Analytics',
    skills: [
      { name: 'Power BI', icon: BarChart3, level: 85 },
      { name: 'Excel', icon: FileSpreadsheet, level: 88 },
      { name: 'Data Viz', icon: BarChart3, level: 85 },
    ]
  },
  {
    category: 'AI & Data Science',
    skills: [
      { name: 'AI Fundamentals', icon: Brain, level: 85 },
      { name: 'Prompt Eng', icon: Sparkles, level: 87 },
      { name: 'Data Analysis', icon: BarChart3, level: 90 },
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'GitHub', icon: GitBranch, level: 85 },
      { name: 'Visual Studio', icon: FileCode, level: 80 },
      { name: 'Figma', icon: Palette, level: 75 },
    ]
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: Code2, level: 90 },
      { name: 'HTML/CSS', icon: Layout, level: 85 },
      { name: 'SQL', icon: Database, level: 88 },
    ]
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (sectionRef.current) {
      const skillCards = sectionRef.current.querySelectorAll('.skill-card');

      skillCards.forEach((skill, index) => {
        gsap.fromTo(
          skill,
          {
            opacity: 0,
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skill,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animate category headers
      const categoryHeaders = sectionRef.current.querySelectorAll('.category-header');
      categoryHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          {
            opacity: 0,
            y: -20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-32 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-bold mb-20 text-center bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category}>
              <motion.h3
                className="category-header text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 bg-clip-text"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {category.category}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = catIndex * 3 + skillIndex;
                  return (
                    <motion.div
                      key={skill.name}
                      className="skill-card group relative"
                      style={{ willChange: 'transform' }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/30 to-rose-900/30 p-6 rounded-2xl border-2 border-amber-400/20 shadow-xl h-full flex flex-col items-center justify-center relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />

                        <div className="mb-4">
                          <skill.icon className="w-10 h-10 text-amber-400 group-hover:text-rose-400 transition-colors" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {skill.name}
                        </h3>

                        <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: globalIndex * 0.08 + 0.5, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-sm text-amber-300 mt-2 font-semibold">{skill.level}%</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-16 backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-purple-900/20 p-8 rounded-3xl border-2 border-rose-400/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <h3 className="text-3xl font-semibold mb-6 text-rose-300 relative z-10" style={{ fontFamily: "'Cinzel', serif" }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-4 relative z-10">
            {['Decision Making', 'Problem Solving', 'Data-Driven Insights', 'Quick Learner', 'Innovation', 'Continuous Learning'].map((skill, i) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-purple-600/20 rounded-full border-2 border-amber-400/30 text-white"
                style={{ fontFamily: "'Playfair Display', serif", willChange: 'transform' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -3, 0]
                }}
                transition={{
                  opacity: { delay: i * 0.08, duration: 0.3 },
                  scale: { delay: i * 0.08, duration: 0.3 },
                  y: { duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }
                }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
