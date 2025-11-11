/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaBars, FaTimes } from 'react-icons/fa';

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'Beats', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-royal rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-30 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-heading font-bold gradient-text"
          >
            CRISPIN BEATZ
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect neon-border px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/20 transition-all hidden md:block"
          >
            Book Session
          </motion.button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 z-30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-0 left-0 right-0 bg-primary/95 backdrop-blur-lg z-20 pt-20 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-accent transition-colors duration-300 text-lg py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="glass-effect neon-border px-6 py-3 rounded-full text-lg font-medium hover:bg-accent/20 transition-all w-full max-w-xs mx-auto">
                Book Session
              </button>
            </div>
          </motion.div>
        )}
      </nav>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 flex flex-col lg:flex-row items-center justify-between pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 gradient-text">
            CRISPIN BEATZ
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10">
            Crafting sonic excellence for the modern era
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button className="glass-effect neon-border px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center space-x-2 hover:bg-accent/20 transition-all duration-300 group">
              <FaPlay className="text-accent group-hover:scale-110 transition-transform" />
              <span>Listen to Latest Release</span>
            </button>
            
            <button className="glass-effect px-8 py-4 rounded-full text-lg font-medium hover:bg-accent/20 transition-all duration-300">
              View Beats
            </button>
          </motion.div>
        </motion.div>
        
        {/* Profile Picture Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative elements around profile */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-2xl"></div>
            
            {/* Profile image container */}
            <div className="glass-effect neon-border rounded-full p-1 relative overflow-hidden">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center relative">
               
                <img src="images/producer.jpg" alt="Crispin Beatz" className="w-64 h-64 md:w-80 md:h-80 rounded-full" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-ping opacity-20"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-royal rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          duration: 1, 
          delay: 1,
          y: {
            duration: 2, 
            repeat: Infinity
          }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-1 h-10 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;