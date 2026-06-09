import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profileImg from '../assets/Pro.jpg';

export default function Hero() {
  const roles = [
    'AI-Powered Full Stack Developer',
    'MERN-Stack and PERN-Stack Developer',
    'React.js Specialist',
    'Biotech Grad turned Software Engineer',
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    },2000);
    return () => clearInterval(timer);
  }, //removed dependencies array cause there were no array[]
);

  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background Blobs for Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-glow/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-violet-glow/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size:[14px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column - Text Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-obsidian-800/80 border border-obsidian-700 text-cyan-glow mb-6 font-display font-medium text-xs sm:text-sm shadow-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Internships & Full-Time Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white"
            >
              Hi, I'm <br />
              <span className="text-gradient-cyan-violet">MAYURESH ERULA</span>
            </motion.h1>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mt-4 mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-2xl font-semibold font-display bg-linear-to-r from-cyan-glow to-blue-400 bg-clip-text text-transparent drop-shadow-sm tracking-wide"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A Biotech graduate with a passion for web technologies, transitioning to software engineering through an Executive PG from IIIT Bangalore. Specializing in high-performance frontend solutions, state management, and modern React architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleScrollClick('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-cyan-glow to-violet-glow text-obsidian-950 font-bold font-display shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => handleScrollClick('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-obsidian-900 border border-obsidian-700 text-white hover:text-cyan-glow hover:border-cyan-glow hover:bg-obsidian-800 transition-all duration-300 font-bold font-display cursor-pointer"
              >
                Let's Connect
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-5 mt-10"
            >
              <a
                href="https://github.com/Mayuresh-Erula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-obsidian-900 border border-obsidian-700 hover:border-cyan-glow/50 text-gray-400 hover:text-cyan-glow transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mayuresh-erula-ab7743220"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-obsidian-900 border border-obsidian-700 hover:border-cyan-glow/50 text-gray-400 hover:text-cyan-glow transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:mayuresherula@gmail.com"
                className="p-3 rounded-xl bg-obsidian-900 border border-obsidian-700 hover:border-cyan-glow/50 text-gray-400 hover:text-cyan-glow transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.25 }}
            className="flex-1 flex justify-center relative"
          >
            <div className="relative group">
              {/* Spinning gradient border behind image */}
              <div className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-glow to-violet-glow opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow pointer-events-none" style={{ animationDuration: '10s' }} />
              
              {/* Glow overlay */}
              <div className="absolute -inset-3 rounded-full bg-linear-to-r from-cyan-glow to-violet-glow opacity-30 blur-2xl group-hover:opacity-50 transition duration-500 pointer-events-none" />

              {/* Profile Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-obsidian-900 z-10 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Mayuresh Erula"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
