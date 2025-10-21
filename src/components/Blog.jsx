// src/components/Blog.jsx
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight, FiEye, FiHeart, FiMessageSquare } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering React Hooks: Advanced Patterns and Best Practices',
    excerpt: 'Deep dive into React Hooks with practical examples, custom hooks, and performance optimization techniques for modern React development.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    slug: 'mastering-react-hooks',
    views: 1242,
    likes: 89,
    comments: 23,
    image: '/images/react-hooks.jpg',
    tags: ['React', 'Hooks', 'JavaScript', 'Performance']
  },
  {
    id: 2,
    title: 'Building Scalable Node.js Microservices Architecture',
    excerpt: 'Comprehensive guide to building scalable microservices with Node.js, Docker, Kubernetes, and cloud-native patterns for enterprise applications.',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Node.js',
    slug: 'scalable-nodejs-microservices',
    views: 856,
    likes: 67,
    comments: 18,
    image: '/images/microservices.jpg',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture']
  },
  {
    id: 3,
    title: 'Advanced Tailwind CSS: Beyond the Basics',
    excerpt: 'Explore advanced Tailwind CSS techniques including plugin development, design systems, and performance optimization for large-scale applications.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'CSS',
    slug: 'advanced-tailwind-css',
    views: 1543,
    likes: 124,
    comments: 42,
    image: '/images/tailwind-advanced.jpg',
    tags: ['Tailwind', 'CSS', 'Design System', 'Performance']
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>

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
            LATEST ARTICLES
          </motion.span>
          <h2 className="text-6xl font-black text-white mb-6">Tech Blog & Insights</h2>
          <div className="w-32 h-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6)] mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Sharing knowledge, insights, and experiences about web development, programming, and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-lg"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-bold border border-cyan-400/30 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                  <div className="flex items-center space-x-4 backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <FiEye size={14} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiHeart size={14} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMessageSquare size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-xs border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;