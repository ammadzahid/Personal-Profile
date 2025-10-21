// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { FiGithub, FiLinkedin, FiArrowDown, FiCode, FiStar } from 'react-icons/fi';
import { SiVercel } from "react-icons/si";
import { useEffect, useRef } from 'react';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Open Source Contributor'],
    loop: true,
    delay: 50,
    deleteSpeed: 30,
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const launchConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899']
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900  pt-20">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="w-full max-w-6xl container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-8 shadow-2xl"
            onMouseEnter={launchConfetti}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FiCode className="mr-3 text-cyan-400" size={20} />
            <span className="text-white text-lg font-semibold tracking-wide">Frontend Developer</span>
            <FiStar className="ml-2 text-yellow-400" size={16} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-9xl font-black text-white mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient bg-400%">
              Ammad
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl text-gray-300 mb-8 h-20 font-light"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">
              {text}
            </span>
            <span className="typewriter ml-2">|</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            I craft <span className="text-cyan-400 font-bold">scalable web applications</span> and 
            <span className="text-purple-400 font-bold"> digital experiences</span> that blend 
            cutting-edge technology with stunning design principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group relative bg-white/10 backdrop-blur-lg text-white px-12 py-5 rounded-2xl font-bold text-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/20 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <FiCode className="ml-2 group-hover:rotate-45 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links with Hover Effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-8 mb-16"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/ammadzahid?tab=repositories', label: 'GitHub', color: 'hover:text-cyan-400' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ammad-zahid-615009318/', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: SiVercel, href: 'https://vercel.com/ammads-projects-e3744709', label: 'Vercel', color: 'hover:text-purple-400' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`group relative bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 ${social.color} transition-all duration-300 shadow-2xl`}
                whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon 
                  size={28} 
                  className="text-white transition-colors duration-300" 
                />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-cyan-400 whitespace-nowrap bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg font-semibold border border-cyan-400/20">
                    {social.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center text-cyan-400 cursor-pointer group"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-lg mb-3 font-semibold group-hover:text-white transition-colors">Explore More</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center group-hover:border-white transition-colors"
            >
              <FiArrowDown className="group-hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 400% 400%;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;