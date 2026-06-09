import { motion } from 'framer-motion';
import { Code, Layout, GitBranch, ShieldAlert, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-cyan-glow" size={22} />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
      bgGradient: 'from-cyan-500/5 to-transparent'
    },
    {
      title: 'Frontend Technologies',
      icon: <Layout className="text-violet-glow" size={22} />,
      skills: ['React.js', 'Tailwind CSS', 'Native Animations', 'DOM Manipulation'],
      bgGradient: 'from-violet-500/5 to-transparent'
    },
    {
      title: 'Hooks & State Management',
      icon: <Cpu className="text-pink-500" size={22} />,
      skills: ['useState', 'useEffect', 'useCallback', 'Context API'],
      bgGradient: 'from-pink-500/5 to-transparent'
    },
    {
      title: 'Tools & Platforms',
      icon: <GitBranch className="text-blue-400" size={22} />,
      skills: ['Git', 'GitHub', 'VS Code', 'npm / Vite'],
      bgGradient: 'from-blue-500/5 to-transparent'
    },
    {
      title: 'Concepts & Fundamentals',
      icon: <ShieldAlert className="text-amber-500" size={22} />,
      skills: ['REST APIs', 'Local Storage', 'UI/UX Architecture', 'Performance Optimization'],
      bgGradient: 'from-amber-500/5 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-obsidian-900/30">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            My <span className="text-gradient-cyan-violet">Skills</span> & Toolkit
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-glow to-violet-glow mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my technical stack and engineering disciplines.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-obsidian-800 shadow-lg relative overflow-hidden bg-gradient-to-br ${category.bgGradient}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-obsidian-900 border border-obsidian-800 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-obsidian-950/80 border border-obsidian-800/80 text-gray-300 text-xs sm:text-sm font-semibold hover:border-cyan-glow/40 hover:text-cyan-glow transition-all duration-300 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
