import React from 'react';
import { motion } from 'framer-motion';
import { Server as ServerIcon, Database, Code, Shield, Zap, Globe, Github, ExternalLink } from 'lucide-react';

const Server: React.FC = () => {
  const techStack = [
    { name: 'Express.js', logo: '🚀', description: 'Fast, unopinionated web framework' },
    { name: 'MongoDB', logo: '🍃', description: 'NoSQL database for modern apps' },
    { name: 'Node.js', logo: '💚', description: 'JavaScript runtime environment' },
    { name: 'JWT', logo: '🔐', description: 'Secure authentication tokens' },
    { name: 'Redis', logo: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', logo: '🐳', description: 'Containerization platform' }
  ];

  const features = [
    {
      icon: Database,
      title: 'Database Management',
      description: 'Scalable MongoDB integration with optimized queries and indexing'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'JWT authentication, rate limiting, and data encryption'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Redis caching and optimized API endpoints for fast responses'
    },
    {
      icon: Globe,
      title: 'RESTful API',
      description: 'Clean, documented API endpoints following REST principles'
    }
  ];

  const codeSnippet = `// Express.js API Endpoint
app.get('/api/books/recommendations', async (req, res) => {
  try {
    const { userId, genre, limit = 10 } = req.query;
    
    // Get user preferences from cache or database
    const userPrefs = await getUserPreferences(userId);
    
    // AI-powered recommendation algorithm
    const recommendations = await recommendationEngine
      .analyze(userPrefs)
      .filterByGenre(genre)
      .limit(limit)
      .execute();
    
    res.json({
      success: true,
      data: recommendations,
      meta: { count: recommendations.length }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl mb-8">
              <ServerIcon className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Backend
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with Express.js and MongoDB, our backend delivers lightning-fast 
              performance and scalable architecture for millions of book recommendations.
            </p>
            
            {/* GitHub Button */}
            <motion.a
              href="https://github.com/its-bismay/Book-service-backend"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)',
                background: 'linear-gradient(45deg, #00ff88, #00ffff)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-8 group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Backend Code</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Code Editor Mockup */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-green-400/40">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-medium">server.js</span>
                </div>
                <div className="text-gray-400 text-xs">Express.js Backend</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-gray-300 leading-relaxed">
                  <code dangerouslySetInnerHTML={{ __html: 
                    codeSnippet
                      .replace(/\/\/ .*/g, '<span class="text-green-400">$&</span>')
                      .replace(/app\.|await |async |const |try |catch /g, '<span class="text-cyan-400">$&</span>')
                      .replace(/'[^']*'/g, '<span class="text-yellow-300">$&</span>')
                      .replace(/\/api\/[^\s,]*/g, '<span class="text-green-300">$&</span>')
                  }} />
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Modern tools and frameworks powering our backend infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Backend Features
            </h2>
            <p className="text-xl text-gray-400">
              Robust architecture designed for scale and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API Documentation
            </h2>
            <p className="text-xl text-gray-400">
              Clean, well-documented REST API endpoints
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Endpoints */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">API Endpoints</h3>
              <div className="space-y-4">
                {[
                  { method: 'GET', endpoint: '/api/books/recommendations', desc: 'Get personalized book recommendations' },
                  { method: 'POST', endpoint: '/api/auth/login', desc: 'User authentication' },
                  { method: 'GET', endpoint: '/api/books/search', desc: 'Search books by title or author' },
                  { method: 'POST', endpoint: '/api/reviews', desc: 'Create book review' }
                ].map((api, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      api.method === 'GET' ? 'bg-green-400/20 text-green-400' : 'bg-cyan-400/20 text-cyan-400'
                    }`}>
                      {api.method}
                    </span>
                    <code className="text-gray-300 font-mono text-sm">{api.endpoint}</code>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Response Example */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Response Example</h3>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-gray-300">
{`{
  "success": true,
  "data": [
    {
      "id": "123",
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "rating": 4.8,
      "genre": "Fiction"
    }
  ],
  "meta": {
    "count": 10,
    "page": 1
  }
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Server;