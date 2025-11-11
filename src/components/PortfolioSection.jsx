/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Urban Legends",
    artist: "Various Artists",
    year: "2024",
    genre: "Hip-Hop Compilation"
  },
  {
    id: 2,
    title: "Neon Nights",
    artist: "Luna Eclipse",
    year: "2023",
    genre: "R&B Album"
  },
  {
    id: 3,
    title: "Digital Dreams",
    artist: "Synth Collective",
    year: "2023",
    genre: "Electronic EP"
  },
  {
    id: 4,
    title: "Street Symphony",
    artist: "MC Phoenix",
    year: "2022",
    genre: "Trap Album"
  },
  {
    id: 5,
    title: "Midnight Chronicles",
    artist: "Shadow Records",
    year: "2022",
    genre: "Drill Compilation"
  },
  {
    id: 6,
    title: "Vintage Vibes",
    artist: "Retro Soul Band",
    year: "2021",
    genre: "Boom Bap Album"
  }
];

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of projects I've produced, mixed, and mastered for artists across various genres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300">
                {/* Album cover placeholder */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="text-5xl font-heading text-gray-600 z-10">{project.title.charAt(0)}</div>
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-accent text-sm">{project.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{project.artist}</p>
                  <span className="text-xs px-2 py-1 glass-effect rounded-full">{project.genre}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-effect neon-border px-8 py-3 rounded-full font-medium hover:bg-accent/20 transition-all">
            View Complete Discography
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;