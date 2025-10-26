// src/components/Contact.jsx (FIXED)
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiVercel } from "react-icons/si";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Contact Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-cyan-400/20"
      >
        <FiMail size={48} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-20 text-purple-400/20"
      >
        <FiSend size={48} />
      </motion.div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-semibold text-lg mb-4 block tracking-widest"
          >
            LET'S CONNECT
          </motion.span>
          <h2 className="text-6xl font-black text-white mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-white mb-6">Let's Build Something Great</h3>
              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: FiMail,
                  title: 'Email',
                  value: 'ammadzahid53@gmail.com',
                  href: 'mailto:hello@gauravbits.in',
                  color: 'cyan'
                },
                {
                  icon: FiPhone,
                  title: 'Phone',
                  value: '+92311 7338244',
                  href: 'tel:+92311 7338244',
                  color: 'blue'
                },
                {
                  icon: FiMapPin,
                  title: 'Location',
                  value: 'Chiniot Punjab,Pakistan',
                  href: '#',
                  color: 'purple'
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center space-x-6 p-6 bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-${contact.color}-400/30 transition-all duration-300 group`}
                >
                  <div className={`p-4 bg-${contact.color}-500/10 text-${contact.color}-400 rounded-xl group-hover:bg-${contact.color}-400 group-hover:text-white transition-all duration-300`}>
                    <contact.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-1">{contact.title}</h4>
                    <p className={`text-gray-400 group-hover:text-${contact.color}-400 transition-colors font-light text-lg`}>
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex space-x-6 pt-6"
            >
              {[
                { icon: FiGithub,  href: 'https://github.com/ammadzahid?tab=repositories',   color: 'hover:text-cyan-400' },
                { icon: FiLinkedin,  href: 'https://www.linkedin.com/in/ammad-zahid-615009318/' , color: 'hover:text-blue-400' },
                { icon: SiVercel,  href: 'https://vercel.com/ammads-projects-e3744709' , color: 'hover:text-purple-400' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-4 bg-white/5 rounded-2xl border border-white/10 ${social.color} transition-all duration-300 backdrop-blur-lg`}
                  whileHover={{ scale: 1.1, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10 p-8 shadow-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-black text-white mb-3">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-black text-white mb-3">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-black text-white mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-black text-white mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg resize-none"
                  placeholder="Tell me about your project, ideas, or how we can collaborate..."
                ></textarea>
              </div>

              {/* Submit Status - FIXED: Remove AnimatePresence */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center space-x-3 text-green-400 bg-green-400/10 p-4 rounded-2xl border border-green-400/20"
                >
                  <FiCheck size={24} />
                  <span className="font-black text-lg">Message sent successfully!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex items-center space-x-3 text-red-400 bg-red-400/10 p-4 rounded-2xl border border-red-400/20"
                >
                  <FiAlertCircle size={24} />
                  <span className="font-black text-lg">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 px-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 border border-cyan-400/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="text-lg">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={24} />
                    <span className="text-lg">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;