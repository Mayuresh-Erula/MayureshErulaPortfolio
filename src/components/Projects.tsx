import { motion } from 'framer-motion';
import { ExternalLink, Landmark, Coins, KeyRound } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      title: 'Expense Tracker App',
      description: 'A responsive real-time financial tracking dashboard designed to monitor and visualize income and expenses with local storage replication for data persistence.',
      skills: ['React.js', 'Tailwind CSS', 'Local Storage', 'State Management'],
      github: 'https://github.com/Mayuresh-Erula', // fallback, or general profile link
      icon: <Coins className="text-emerald-400" size={28} />,
      bgImageClass: 'bg-emerald-500/10'
    },
    {
      title: 'Random String Generator',
      description: 'A performance-optimized security tool for generating cryptographic strength random strings, utilizing advanced React hooks for render control and native clipboard integration.',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Performance Optimization'],
      github: 'https://github.com/Mayuresh-Erula',
      icon: <KeyRound className="text-cyan-glow" size={28} />,
      bgImageClass: 'bg-cyan-500/10'
    },
    {
      title: 'Animated Login Page',
      description: 'A highly fluid, interactive user access interface built using core keyframe stylesheets and vanilla DOM logic to master modern web motion design.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/Mayuresh-Erula',
      icon: <Landmark className="text-violet-glow" size={28} />,
      bgImageClass: 'bg-violet-500/10'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-obsidian-900/30">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-glow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Featured <span className="text-gradient-cyan-violet">Projects</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-glow to-violet-glow mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            Here are some applications and utilities I have built, demonstrating my frontend expertise, component engineering, and optimization focus.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glass-panel glass-panel-hover rounded-2xl border border-obsidian-800 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              
              {/* Card Body */}
              <div className="p-8">
                
                {/* Project Header Icon */}
                <div className={`w-14 h-14 rounded-xl ${project.bgImageClass} border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cyan-glow transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Skills & Links */}
              <div className="p-8 pt-0 mt-auto">
                
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-obsidian-950/60 border border-obsidian-800 text-gray-400 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* External GitHub link */}
                <div className="flex items-center justify-between border-t border-obsidian-800/80 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold font-display text-gray-300 hover:text-cyan-glow transition-colors duration-300"
                  >
                    <GithubIcon size={16} />
                    View Code
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-obsidian-900 border border-obsidian-800 text-gray-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-all duration-300 shadow-sm"
                    aria-label="View Project"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
