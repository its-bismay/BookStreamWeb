import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Zap,
  Globe,
  Users,
  Star,
  Github,
  ExternalLink,
} from "lucide-react";

const Client: React.FC = () => {
  const technologies = [
    {
      name: "React Native",
      icon: "⚛️",
      description: "Cross-platform mobile development",
      features: ["iOS & Android", "Native Performance", "Hot Reload"],
    },
    {
      name: "Expo",
      icon: "🚀",
      description: "Development platform for React Native",
      features: ["Fast Development", "OTA Updates", "Easy Deployment"],
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "Type-safe JavaScript development",
      features: ["Type Safety", "Better IDE Support", "Fewer Bugs"],
    },
    {
      name: "Redux Toolkit",
      icon: "🔄",
      description: "Predictable state management",
      features: ["Centralized State", "DevTools", "Time Travel"],
    },
  ];

  const developmentWorkflow = [
    {
      step: "01",
      title: "Design & Prototype",
      description: "Create beautiful UI designs and interactive prototypes",
      icon: "🎨",
    },
    {
      step: "02",
      title: "Develop & Test",
      description: "Build components with TypeScript and comprehensive testing",
      icon: "💻",
    },
    {
      step: "03",
      title: "Deploy & Monitor",
      description: "Deploy to app stores and monitor performance metrics",
      icon: "📱",
    },
  ];

  const appFeatures = [
    {
      icon: Users,
      title: "Social Reading",
      description:
        "Connect with friends, share recommendations, and join reading clubs",
    },
    {
      icon: Star,
      title: "Smart Reviews",
      description:
        "AI-powered review analysis and personalized rating predictions",
    },
    {
      icon: Zap,
      title: "Offline Mode",
      description:
        "Download books and access your library without internet connection",
    },
    {
      icon: Globe,
      title: "Multi-language",
      description: "Support for 15+ languages with localized content",
    },
  ];

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-green-400 rounded-2xl mb-8">
              <Smartphone className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mobile-First
              <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with React Native and Expo, delivering native performance
              across iOS and Android with a single codebase.
            </p>

            <motion.a
              href="https://github.com/its-bismay/Book-recommend-app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
                background: "linear-gradient(45deg, #00ff88, #00ffff)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 mt-8 group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Frontend Code</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Mobile Development Showcase */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Phone Mockup 1 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="flex justify-center"
              >
                <div className="relative h-[500px] md:h-[600px] md:w-[300px] flex items-center justify-center rounded-[1.5rem] border border-gray-700 bg-black/80 shadow-2xl transition-all duration-300 group hover:shadow-green-400/40">
                  <img
                    src="/appss1.png"
                    alt="App Screenshot 1"
                    className="w-full h-full object-fit rounded-[1.2rem]"
                  />
                </div>
              </motion.div>

              {/* Center Content */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-6"
                >
                  <Code className="w-12 h-12 text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cross-Platform Excellence
                </h3>
                <p className="text-gray-400">
                  One codebase, native performance on both iOS and Android
                  platforms
                </p>
              </div>

              {/* Phone Mockup 2 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                className="flex justify-center"
              >
                <div className="relative h-[500px] md:h-[600px] md:w-[300px] flex items-center justify-center rounded-[1.5rem] border border-gray-700 bg-black/80 shadow-2xl transition-all duration-300 group hover:shadow-green-400/40">
                  <img
                    src="/appss1.png"
                    alt="App Screenshot 2"
                    className="w-full h-full object-fit rounded-[1.2rem]"
                  />
                </div>
              </motion.div>
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
              Mobile Technologies
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge tools for modern mobile app development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {tech.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development Workflow
            </h2>
            <p className="text-xl text-gray-400">
              From concept to app store - our streamlined development process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentWorkflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {index < developmentWorkflow.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transform translate-x-1/2"></div>
                )}

                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mb-6 text-black font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Features
            </h2>
            <p className="text-xl text-gray-400">
              Rich functionality designed for the modern mobile user
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center">
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
    </motion.div>
  );
};

export default Client;
