import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;