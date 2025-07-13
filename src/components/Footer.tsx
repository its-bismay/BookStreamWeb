import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, X, Instagram, BookOpenText } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/its-bismay', label: 'GitHub' },
    { icon: X, href: 'https://x.com/RewatchRoom', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/bismay_11', label: 'Instagram' },
    { icon: Mail, href: 'mailto:bismaybibhabasu33@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Download', 'Pricing', 'Support']
    },
    {
      title: 'Technology',
      links: ['React Native', 'Express.js', 'MongoDB', 'Expo']
    }
  ];

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <BookOpenText className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">BooKStream</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Book recommendations made simple. Discover your next favorite read with our intelligent recommendation system powered by modern technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-400 hover:to-cyan-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BookApp. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;