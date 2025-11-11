import { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

const BeatPlayerSection = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample track data
  const tracks = [
    {
      id: 1,
      title: "Midnight Vibes",
      bpm: 120,
      key: "Am",
      duration: "3:45",
      genre: "Hip-Hop"
    },
    {
      id: 2,
      title: "Neon Dreams",
      bpm: 105,
      key: "C#m",
      duration: "4:20",
      genre: "Trap"
    },
    {
      id: 3,
      title: "Urban Echoes",
      bpm: 130,
      key: "Fm",
      duration: "3:15",
      genre: "R&B"
    },
    {
      id: 4,
      title: "Cyber Pulse",
      bpm: 140,
      key: "Dm",
      duration: "2:55",
      genre: "Electronic"
    },
    {
      id: 5,
      title: "Dark Matter",
      bpm: 110,
      key: "Em",
      duration: "4:10",
      genre: "Drill"
    },
    {
      id: 6,
      title: "Velocity",
      bpm: 150,
      key: "Bm",
      duration: "3:30",
      genre: "Boom Bap"
    }
  ];

  const togglePlay = (index) => {
    if (currentTrack === index && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Featured Beats</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest productions. Each beat is meticulously crafted for artists seeking premium sound quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={track.id} 
              className={`glass-effect rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                currentTrack === index && isPlaying ? 'neon-border ring-2 ring-accent/30' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{track.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span>{track.bpm} BPM</span>
                    <span>•</span>
                    <span>{track.key}</span>
                    <span>•</span>
                    <span>{track.genre}</span>
                  </div>
                </div>
                <div className="text-gray-400">{track.duration}</div>
              </div>

              {/* Waveform visualization */}
              <div className="mb-6">
                <div className="h-20 flex items-end justify-between gap-1">
                  {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-accent/20 to-accent/60 rounded-t"
                      style={{ 
                        height: `${Math.random() * 60 + 10}%`,
                        opacity: currentTrack === index && isPlaying ? (i % 3 === 0 ? 1 : 0.7) : 0.5
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button 
                  onClick={() => togglePlay(index)}
                  className="glass-effect neon-border w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
                >
                  {currentTrack === index && isPlaying ? (
                    <FaPause className="text-accent" />
                  ) : (
                    <FaPlay className="text-accent ml-1" />
                  )}
                </button>
                
                <div className="flex items-center space-x-2 text-gray-400">
                  <FaVolumeUp />
                  <div className="w-24 h-1 bg-gray-700 rounded-full">
                    <div className="h-full bg-accent rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-effect neon-border px-8 py-3 rounded-full font-medium hover:bg-accent/20 transition-all">
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeatPlayerSection;