/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-dark to-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-2xl"></div>
              
              {/* Profile image container with creative styling */}
              <div className="glass-effect neon-border rounded-2xl overflow-hidden relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full flex items-center justify-center aspect-square relative overflow-hidden">
                  {/* Profile image placeholder - replace with your actual image */}
                  <div className="text-8xl font-heading text-gray-600">CB</div>
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-4 left-4 w-4 h-4 bg-royal rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">About Crispin</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              With over a decade of experience in music production, I've crafted sonic landscapes for artists across genres. 
              My approach blends technical precision with creative innovation, resulting in beats that resonate with both artists and audiences.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Specializing in hip-hop, R&B, and electronic music, I bring a unique perspective to each project, 
              ensuring every beat tells a story and evokes emotion.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-effect p-5 rounded-xl">
                <h3 className="text-2xl font-bold text-accent mb-2">150+</h3>
                <p className="text-gray-400">Beats Produced</p>
              </div>
              <div className="glass-effect p-5 rounded-xl">
                <h3 className="text-2xl font-bold text-accent mb-2">50+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Production Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['Hip-Hop', 'Trap', 'R&B', 'Drill', 'Boom Bap', 'Electronic', 'Pop'].map((skill, index) => (
                  <span 
                    key={index} 
                    className="glass-effect neon-border px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;