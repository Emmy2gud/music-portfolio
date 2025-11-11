/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Mabel",
    artist: "FTM",
    year: "2024",
    genre: "Afrobeat",
    status: "unreleased",
    tags: ["Afrobeat", "R&B", "98 BPM", "Am"],
    image: "",
    file: "/songs/fitty.mp3"
  },
  {
    id: 2,
    title: "Jordan vibe",
    artist: "Vybes Tha king",
    year: "2023",
    genre: "Afro-R&B ",
    status: "unreleased",
    tags: ["Afrobeat", "R&B", "95 BPM", "C#m"],
    image: "",
    file: "/songs/Jordan Vibe.mp3"
  },
  {
    id: 3,
    title: "Salamaleku",
    artist: "Vybes Tha king",
    year: "2023",
    genre: "Afrobeat",
    status: "unreleased",
    tags: ["Afrobeat", "Alte", "130 BPM", "Fm"],
    image: "",
    file: "/songs/SalaMaleku.wav"
  },
  {
    id: 4,
    title: "Electric",
    artist: "Ched1",
    year: "2022",
    genre: "Afrobeat",
    status: "unreleased",
    tags: ["Afrobeat", "Aggressive", "100 BPM", "Dm"],
    image: "",
    file: "/songs/ched2.mp3"
  },
  {
    id: 5,
    title: "Electric Dance",
    artist: "Venoe ft Dreamy",
    year: "2022",
    genre: "Dancehall",
    status: "unreleased",
    tags: ["Afrobeats", "Summer", "100 BPM", "Em"],
    image: "",
    file: "/songs/Electric.mp3"
  },
  {
    id: 6,
    title: "OwoOwo",
    artist: "Venoe",
    year: "2021",
    genre: "AfroHouse",
    status: "unreleased",
    tags: ["Aforbeat", "Edm", "90 BPM", "Bm"],
    image: "",
    file: "/songs/OwoOwo.m4a"
  },
  {
    id: 7,
    title: "Party  Tonight",
    artist: "Jesse Wav",
    year: "2024",
    genre: "Afrobeats",
    status: "unreleased",
    tags: ["Afrobeats", "Vibrant", "125 BPM", "Gm"],
    image: "",
    file: "/songs/Party Tonight.mp3"
  },
  {
    id: 8,
    title: "WineRough",
    artist: "Vybes Tha king",
    year: "2023",
    genre: "AfroSoul",
    status: "unreleased",
    tags: ["Afrobeat", "Soul", "85 BPM", "Am"],
    image: "",
    file: "/songs/WineRough.mp3"
  },
  {
    id: 8,
    title: "WineRough",
    artist: "Vybes Tha king",
    year: "2023",
    genre: "AfroSoul",
    status: "uploaded",
    tags: ["Afrobeat", "Energy", "100 BPM", "Am"],
    image: "",
    file: "/songs/WineRough.mp3"
  }
];

const PortfolioSection = ({ onProjectClick }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeTab);

  return (
    <section className="section-padding bg-linear-to-b from-secondary to-dark" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of projects I've produced, mixed, and mastered for artists across various genres.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-1 flex">
            {['all', 'uploaded', 'unreleased'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-accent text-primary'
                    : 'text-gray-300 hover:text-accent'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => onProjectClick && onProjectClick(project)}
            >
              <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 h-full">
                <div className="aspect-square bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
                  <div className="text-5xl font-heading text-gray-600 z-10">{project.title.charAt(0)}</div>
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="glass-effect neon-border px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-accent text-sm">{project.year}</span>
                  </div>
                  <p className="text-gray-400 mb-3">{project.artist}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 glass-effect rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <span className="text-xs px-2 py-1 glass-effect rounded-full">
                    {project.genre}
                  </span>
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