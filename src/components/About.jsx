// src/components/About.jsx
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud, FiCpu, FiGitBranch } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: FiCode, number: '2+', text: 'Years Experience' },
    { icon: FiServer, number: '20+', text: 'Projects Completed' },
    { icon: FiCloud, number: '100%', text: 'Client Satisfaction' },
  ];

  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Language' },
    { name: 'Tailwind CSS', level: 88, category: 'Styling' },
    { name: 'PHP', level: 75, category: 'Backend' },
    { name: 'MySQL', level: 78, category: 'Database' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div ref={ref} className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-semibold text-lg mb-4 block tracking-widest"
          >
            ABOUT ME
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Crafting Digital Excellence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I'm a passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span> with over 2 years of experience 
                creating innovative digital solutions. I specialize in building modern web applications 
                using cutting-edge technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                My expertise spans across the entire development stack, from creating responsive 
                <span className="text-purple-400 font-semibold"> React.js frontends</span> to building robust. I'm passionate about 
                writing clean, efficient code and creating exceptional user experiences.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <stat.icon className="mx-auto text-cyan-400 mb-2" size={24} />
                  <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-light">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl font-black text-white mb-6"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-black text-lg">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: 'React.js', icon: '⚛️', color: 'bg-blue-500/20' },
                  { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-500/20' },
                  { name: 'Tailwind', icon: '🎨', color: 'bg-cyan-500/20' },
                  { name: 'PHP', icon: '🐘', color: 'bg-purple-500/20' },
                  { name: 'MySQL', icon: '🐬', color: 'bg-blue-400/20' },
                  { name: 'Git', icon: '📚', color: 'bg-orange-500/20' },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center p-3 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-2 text-xl`}>
                      {tech.icon}
                    </div>
                    <span className="text-white text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-300 text-lg mb-6 font-light">
            Interested in working together? Let's build something amazing!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <FiCode className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;