/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaDownload, FaHeadphones } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetails = ({ project, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // Sample project data (in a real app, this would come from props or API)
  const projectData = project || {
    id: 1,
    title: "Urban Legends",
    artist: "Various Artists",
    year: "2024",
    genre: "Hip-Hop Compilation",
    bpm: "120 BPM",
    key: "Am",
    status: "Uploaded",
    description: "A groundbreaking compilation featuring some of the hottest emerging talent in hip-hop. Each track showcases a unique blend of classic boom-bap elements with modern trap influences, creating a cohesive yet diverse listening experience. This project represents months of collaboration with artists from across the globe, each bringing their unique style to create something truly special.",
    tags: ["Hip-Hop", "Energetic", "120 BPM", "Am"],
    image: "",
    audioFile: "/beats/LC.mp3"
  };

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Update progress bar
  const updateProgress = (e) => {
    const { currentTime, duration } = e.target;
    setProgress((currentTime / duration) * 100);
  };

  // Set progress when user clicks on progress bar
  const setProgressTime = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Format time (seconds to mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Effect to handle audio setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary to-secondary text-white py-12"
    >
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="glass-effect neon-border px-4 py-2 rounded-full mb-8 hover:bg-accent/20 transition-all"
        >
          ← Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Artwork and Player */}
          <div>
            <div className="glass-effect rounded-2xl overflow-hidden mb-8">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="text-8xl font-heading text-gray-600">{projectData.title.charAt(0)}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{projectData.title}</h3>
                  <p className="text-gray-400">{projectData.artist}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={togglePlay}
                    className="glass-effect neon-border w-14 h-14 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
                  >
                    {isPlaying ? (
                      <FaPause className="text-accent text-xl" />
                    ) : (
                      <FaPlay className="text-accent text-xl ml-1" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div 
                  className="h-2 bg-gray-700 rounded-full cursor-pointer"
                  onClick={setProgressTime}
                >
                  <div 
                    className="h-full bg-accent rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{audioRef.current ? formatTime(audioRef.current.currentTime || 0) : "0:00"}</span>
                  <span>{projectData.duration || "3:45"}</span>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaVolumeUp className="text-gray-400 mr-2" />
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume * 100}
                    onChange={handleVolumeChange}
                    className="w-24 accent-accent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button className="glass-effect neon-border px-4 py-2 rounded-full text-sm hover:bg-accent/20 transition-all">
                    <FaHeadphones className="inline mr-2" /> Listen
                  </button>
                  <button className="glass-effect neon-border px-4 py-2 rounded-full text-sm hover:bg-accent/20 transition-all">
                    <FaDownload className="inline mr-2" /> License
                  </button>
                </div>
              </div>
              
              {/* Hidden Audio Element */}
              <audio 
                ref={audioRef}
                onTimeUpdate={updateProgress}
                onEnded={() => setIsPlaying(false)}
                onLoadedMetadata={() => {
                  if (audioRef.current) {
                    audioRef.current.volume = volume;
                  }
                }}
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <h1 className="text-4xl font-heading font-bold mb-2 gradient-text">{projectData.title}</h1>
              <p className="text-xl text-gray-400 mb-6">{projectData.artist} • {projectData.year}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="glass-effect px-3 py-1 rounded-full text-sm">{projectData.bpm}</span>
                <span className="glass-effect px-3 py-1 rounded-full text-sm">{projectData.key}</span>
                <span className="glass-effect px-3 py-1 rounded-full text-sm">{projectData.genre}</span>
                <span className="glass-effect px-3 py-1 rounded-full text-sm bg-accent/20 text-accent">
                  {projectData.status}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">About This Beat</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {projectData.description}
              </p>
              
              <h3 className="text-xl font-bold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="glass-effect px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button className="glass-effect neon-border py-4 rounded-xl font-medium hover:bg-accent/20 transition-all flex items-center justify-center">
                <FaHeadphones className="mr-2" /> Listen Full Track
              </button>
              <button className="glass-effect neon-border py-4 rounded-xl font-medium hover:bg-accent/20 transition-all flex items-center justify-center">
                <FaDownload className="mr-2" /> Buy License - $49.99
              </button>
            </div>
            
            <button className="glass-effect w-full py-4 rounded-xl font-medium hover:bg-accent/20 transition-all mt-6 flex items-center justify-center">
              Contact for Custom Production
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;