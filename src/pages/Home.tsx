import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Star,
  Users,
  BookOpen,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Recommendations",
      description:
        "AI-powered book suggestions based on your reading history and preferences.",
    },
    {
      icon: Users,
      title: "Community Reviews",
      description:
        "Connect with fellow readers and discover books through community insights.",
    },
    {
      icon: Star,
      title: "Personal Library",
      description:
        "Track your reading progress and build your digital book collection.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Optimized for mobile devices with offline reading capabilities.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Book Reviews" },
    { value: "1M+", label: "Recommendations" },
    { value: "4.9★", label: "App Rating" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Book Recommendation
              <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                made simple
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover your next favorite read with our intelligent
              recommendation system. Built with cutting-edge technology for the
              modern reader.
            </p>

            <motion.button
              onClick={() => {
                const downloadUrl =
                  "https://www.dropbox.com/scl/fi/32hwr2f2w10lt8w5xs69v/BooKStream.apk?rlkey=ayfspei0mrvz0t4aaqmyvvaqf&st=yisoslx4&dl=1";
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = "BooKStream.apk";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-6 h-6" />
              <span>Download APK</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Mockups */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-4 lg:right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="relative">
            {/* Phone 1 */}
            <div className="relative w-56 lg:w-64 h-[480px] lg:h-[520px] bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
              {/* Phone Frame */}
              <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[2rem] relative overflow-hidden border border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 lg:w-28 h-4 lg:h-5 bg-black rounded-b-xl z-20"></div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-4 lg:p-5 pt-6 lg:pt-8">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-white text-xs mb-4 lg:mb-6">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                      </div>
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-2.5 h-1 bg-green-400 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-3 lg:w-4 h-3 lg:h-4 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm lg:text-base">
                          BookApp
                        </h3>
                        <p className="text-gray-400 text-xs">Discover Books</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 lg:p-3 mb-4 lg:mb-6 border border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <div className="h-2 bg-gray-600 rounded flex-1"></div>
                    </div>
                  </div>

                  {/* Book Recommendations */}
                  <div className="space-y-2 lg:space-y-3">
                    <h4 className="text-white font-semibold text-xs lg:text-sm mb-2 lg:mb-3">
                      Recommended for You
                    </h4>

                    {/* Book Card 1 */}
                    <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 backdrop-blur-sm rounded-xl p-2 lg:p-3 border border-green-400/20">
                      <div className="flex space-x-2 lg:space-x-3">
                        <div className="w-10 lg:w-12 h-12 lg:h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-md shadow-lg"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 lg:h-3 bg-white/90 rounded w-3/4"></div>
                          <div className="h-1.5 lg:h-2 bg-gray-400 rounded w-1/2"></div>
                          <div className="flex space-x-0.5 mt-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-400 rounded-full"
                              ></div>
                            ))}
                          </div>
                          <div className="h-1 lg:h-1.5 bg-green-400/50 rounded w-2/3 mt-1"></div>
                        </div>
                      </div>
                    </div>

                    {/* Book Card 2 */}
                    <div className="bg-gradient-to-r from-cyan-400/10 to-green-400/10 backdrop-blur-sm rounded-xl p-2 lg:p-3 border border-cyan-400/20">
                      <div className="flex space-x-2 lg:space-x-3">
                        <div className="w-10 lg:w-12 h-12 lg:h-16 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-md shadow-lg"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 lg:h-3 bg-white/90 rounded w-4/5"></div>
                          <div className="h-1.5 lg:h-2 bg-gray-400 rounded w-3/5"></div>
                          <div className="flex space-x-0.5 mt-1">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-400 rounded-full"
                              ></div>
                            ))}
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          </div>
                          <div className="h-1 lg:h-1.5 bg-cyan-400/50 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 lg:w-24 h-0.5 lg:h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* Phone 2 - Overlapped */}
            <div className="absolute -left-16 lg:-left-20 top-12 lg:top-16 w-48 lg:w-56 h-[400px] lg:h-[450px] bg-black rounded-[2rem] p-1.5 shadow-2xl transform rotate-12 scale-90">
              {/* Phone Frame */}
              <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[1.5rem] relative overflow-hidden border border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 lg:w-24 h-3 lg:h-4 bg-black rounded-b-lg z-20"></div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-3 lg:p-4 pt-5 lg:pt-6">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-white text-xs mb-4">
                    <span className="font-semibold">9:41</span>
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-2.5 h-1 bg-green-400 rounded-sm m-0.5"></div>
                    </div>
                  </div>

                  {/* Reading Progress Circle */}
                  <div className="text-center mb-4 lg:mb-6">
                    <div className="w-16 lg:w-20 h-16 lg:h-20 mx-auto mb-2 lg:mb-3 relative">
                      <div className="w-full h-full border-2 lg:border-3 border-gray-700 rounded-full"></div>
                      <div
                        className="absolute inset-0 border-2 lg:border-3 border-cyan-400 rounded-full"
                        style={{
                          background: `conic-gradient(from 0deg, #00ffff 0deg, #00ffff 270deg, transparent 270deg)`,
                        }}
                      ></div>
                      <div className="absolute inset-2 lg:inset-3 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-cyan-400 font-bold text-sm lg:text-base">
                          75%
                        </span>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-sm lg:text-base mb-1">
                      Reading Progress
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm">
                      The Midnight Library
                    </p>
                    <p className="text-gray-500 text-xs">by Matt Haig</p>
                  </div>

                  {/* Reading Stats */}
                  <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-6">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center border border-gray-700">
                      <div className="text-cyan-400 font-bold text-sm lg:text-lg">
                        12
                      </div>
                      <div className="text-gray-400 text-xs">Books Read</div>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center border border-gray-700">
                      <div className="text-green-400 font-bold text-sm lg:text-lg">
                        156
                      </div>
                      <div className="text-gray-400 text-xs">Pages Today</div>
                    </div>
                  </div>

                  {/* Continue Reading Button */}
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg p-2 lg:p-3 text-center">
                    <span className="text-black font-semibold text-xs lg:text-sm">
                      Continue Reading
                    </span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 lg:w-20 h-0.5 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to discover, track, and enjoy your reading
              journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Screenshots
            </h2>
            <p className="text-xl text-gray-400">
              Take a look at our beautiful and intuitive interface
            </p>
          </motion.div>
          {/* app screenshots with logic*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index: number) => {
              const imageSources: Record<number, string> = {
                1: "/homeSc_SS-portrait.png",
                2: "/createSc_SS-portrait.png",
                3: "/profileSc_SS-portrait.png",
              };
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center"
                >
                  <div className="relative h-[500px] md:h-[600px] md:w-[300px] flex items-center justify-center rounded-[1.5rem] border border-gray-700 bg-black/80 shadow-2xl transition-all duration-300 group hover:shadow-green-400/40">
                    <img
                      src={imageSources[index]}
                      alt={`App Screenshot ${index + 1}`}
                      className="w-full h-full object-fit rounded-[1.2rem]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
