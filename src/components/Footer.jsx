// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp, FiCoffee } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 30s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ammad
            </motion.h3>
            <p className="text-gray-400 font-light text-lg">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/gauravbits', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/gauravbits', label: 'LinkedIn' },
              { icon: FiTwitter, href: 'https://twitter.com/gauravbits', label: 'Twitter' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="group relative bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon 
                  size={24} 
                  className="text-white group-hover:text-cyan-400 transition-colors duration-300" 
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowUp size={20} />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2 text-lg font-light">
            <span>© {currentYear} AmmadBite. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-400 mx-1" />
            </motion.span>
            <span>and</span>
            <FiCoffee className="text-yellow-400 mx-1" />
            <span>by Ammad</span>
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-40px, -40px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;