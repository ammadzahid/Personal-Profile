// src/components/Projects.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiCode, FiFolder, FiEye } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with microservices architecture and cloud deployment.',
    image: '/images/ecommerce-project.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker', 'AWS'],
    github: 'https://github.com/gauravbits/ecommerce',
    live: 'https://ecommerce-demo.com',
    featured: true,
    stars: 142,
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'AI-Powered Task Manager',
    description: 'Intelligent task management with AI suggestions, team collaboration, and advanced analytics. Features machine learning integration and real-time updates.',
    image: '/images/taskapp-project.jpg',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'WebSocket'],
    github: 'https://github.com/gauravbits/taskapp',
    live: 'https://taskapp-demo.com',
    featured: true,
    stars: 89,
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'Real-Time Analytics Dashboard',
    description: 'Beautiful analytics dashboard with real-time data visualization, custom reports, and team sharing capabilities. Supports multiple data sources.',
    image: '/images/analytics-project.jpg',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'MySQL', 'WebSocket', 'Chart.js'],
    github: 'https://github.com/gauravbits/analytics',
    live: 'https://analytics-demo.com',
    featured: false,
    stars: 67,
    category: 'Data Visualization'
  },
  {
    id: 4,
    title: 'Blockchain Wallet App',
    description: 'Secure cryptocurrency wallet with multi-chain support, NFT marketplace integration, and decentralized exchange features.',
    image: '/images/blockchain-project.jpg',
    technologies: ['React Native', 'Web3.js', 'Solidity', 'Ethereum', 'IPFS'],
    github: 'https://github.com/gauravbits/blockchain-wallet',
    live: 'https://wallet-demo.com',
    featured: true,
    stars: 234,
    category: 'Blockchain'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'featured', 'Full Stack', 'AI/ML', 'Data Visualization', 'Blockchain'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridSlide 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-semibold text-lg mb-4 block tracking-widest"
          >
            MY PORTFOLIO
          </motion.span>
          <h2 className="text-6xl font-black text-white mb-6">Featured Projects</h2>
          <div className="w-32 h-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            A collection of projects that showcase my expertise in modern web development and innovative solutions
          </p>
        </motion.div>

        {/* Animated Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-lg border ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 border-transparent'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:border-cyan-400/50 hover:text-cyan-400'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with 3D Effects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* GitHub Stars */}
                  <div className="absolute top-4 right-4 z-20 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                    <FiStar className="text-yellow-400" size={16} />
                    <span className="text-white text-sm font-semibold">{project.stars}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold border border-cyan-400/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Actions */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 z-30">
                    <motion.a
                      href={project.github}
                      className="bg-white text-gray-900 p-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <FiFolder className="text-cyan-400" size={32} />
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed font-light text-lg">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/20 transition-all cursor-pointer hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 transform rotate-12">
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-black shadow-2xl border border-white/20"
                    >
                      ⭐ FEATURED
                    </motion.span>
                  </div>
                )}

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/gauravbits"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiEye className="mr-3" size={24} />
            View All Projects
            <FiCode className="ml-3" size={24} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-80px, -80px); }
        }
      `}</style>
    </section>
  );
};

export default Projects;