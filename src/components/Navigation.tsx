import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Download, BookOpenText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVER', path: '/server' },
    { name: 'CLIENT', path: '/client' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center"
            >
              <BookOpenText className="w-6 h-6 text-black" />
            </motion.div>
            <span className="text-xl font-bold text-white">BooKStream</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <span className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {item.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span>Download APK</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-green-400'
                  : 'text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-3 rounded-full font-medium w-full justify-center"
          >
            <Download className="w-4 h-4" />
            <span>Download APK</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;