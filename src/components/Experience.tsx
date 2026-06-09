import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Fathom Marine Consultant',
      role: 'Full Stack Trainee',
      period: '04/2026 – Current',
      skills: ['React.js', 'Tailwind CSS', 'Python', 'UI/UX Architecture', 'Workflow Optimization'],
      bullets: [
        {
          title: 'Full-Stack Application Development',
          text: 'Assisted in developing and optimizing features for internal applications, gaining hands-on exposure to end-to-end full-stack workflows.'
        },
        {
          title: 'UI/UX Component Architecture',
          text: 'Collaborated on mapping out intricate user workflows, successfully converting complex system flowcharts into functional, responsive frontend component architectures.'
        },
        {
          title: 'Technical Documentation & Cross-Functional Collaboration',
          text: 'Worked closely with senior engineering teams and management to document and refine system processes, technical requirements, and feature design.'
        }
      ],
      color: 'from-cyan-glow to-blue-500'
    },
    {
      company: 'CodexIntern',
      role: 'Frontend React Developer Intern',
      period: '07/2025 – 08/2025',
      skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'GitHub', 'Version Control'],
      bullets: [
        {
          title: 'Component Engineering & Enhancements',
          text: 'Collaborated on building, structuring, and enhancing reusable UI components using React.js and Tailwind CSS for responsive web applications.'
        },
        {
          title: 'API Consumption & Core Tasks',
          text: 'Executed real-world frontend development tasks, focusing on clean component structuring, state rendering, and efficient REST API consumption.'
        },
        {
          title: 'Version Control & Agile Collaboration',
          text: 'Managed source code, version control, and team development workflows via GitHub in a fast-paced environment.'
        }
      ],
      color: 'from-violet-glow to-fuchsia-500'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Professional <span className="text-gradient-cyan-violet">Experience</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-glow to-violet-glow mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-obsidian-800 ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot with glowing icon */}
              <div className="absolute -left-[53px] sm:-left-[61px] top-1 w-12 h-12 rounded-2xl bg-obsidian-950 border-2 border-obsidian-800 flex items-center justify-center shadow-lg group">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-20 blur-sm group-hover:opacity-40 transition-all duration-300`} />
                <Briefcase className="text-gray-300 z-10" size={20} />
              </div>

              {/* Title & Metadata */}
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gradient-cyan-violet font-display font-bold text-base sm:text-lg">
                      {exp.company}
                    </span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-900 border border-obsidian-800 text-gray-400 text-xs sm:text-sm font-semibold self-start md:self-center shadow-sm">
                  <Calendar size={14} className="text-cyan-glow" />
                  {exp.period}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-obsidian-900/60 border border-obsidian-800/80 text-gray-300 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Job Accomplishments Card List */}
              <div className="space-y-4">
                {exp.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="glass-panel p-5 rounded-2xl border border-obsidian-800 shadow-md flex items-start gap-4 hover:border-cyan-glow/20 transition-colors duration-300"
                  >
                    <div className="mt-1 p-1.5 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-200 text-sm sm:text-base leading-snug">
                        {bullet.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        {bullet.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
