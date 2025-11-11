import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaStepForward, FaStepBackward } from 'react-icons/fa';

const BeatPlayerSection = ({ onViewAll }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // Track data with actual audio files
  const tracks = [
    {
      id: 1,
      title: "LC",
      bpm: 120,
      key: "Am",
      duration: "3:45",
      genre: "Hip-Hop",
      file: "/beats/LC.mp3"
    },
    {
      id: 2,
      title: "Alte",
      bpm: 105,
      key: "C#m",
      duration: "4:20",
      genre: "Afrobeats",
      file: "/beats/alte.mp3"
    },
    {
      id: 3,
      title: "Burna X Housemusic",
      bpm: 130,
      key: "Fm",
      duration: "3:15",
      genre: "Afrobeats",
      file: "/beats/burna x housemusic.mp3"
    },
    {
      id: 4,
      title: "Burnaboy X Jorja",
      bpm: 140,
      key: "Dm",
      duration: "2:55",
      genre: "Afrobeats",
      file: "/beats/burnaboy x jorja x london.mp3"
    },
    {
      id: 5,
      title: "Drill On Point",
      bpm: 110,
      key: "Em",
      duration: "4:10",
      genre: "Drill",
      file: "/beats/drill on point.mp3"
    },
    {
      id: 6,
      title: "Playboi Carti",
      bpm: 150,
      key: "Bm",
      duration: "3:30",
      genre: "Hip-Hop",
      file: "/beats/playboi carti.mp3"
    }
  ];

  // Handle play/pause
  const togglePlay = (index) => {
    if (currentTrack === index && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack !== index) {
        setCurrentTrack(index);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Handle track change
  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
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

  // Play next track
  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % tracks.length;
    changeTrack(nextIndex);
  };

  // Play previous track
  const prevTrack = () => {
    const prevIndex = (currentTrack - 1 + tracks.length) % tracks.length;
    changeTrack(prevIndex);
  };

  // Format time (seconds to mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Effect to handle track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].file;
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack]);

  return (
    <section className="section-padding" id="beats">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">Featured Beats</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest productions. Each beat is meticulously crafted for artists seeking premium sound quality.
          </p>
        </div>

        {/* Audio Player */}
        <div className="glass-effect rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gray-800 rounded-lg w-16 h-16 flex items-center justify-center mr-4">
                <div className="text-2xl font-heading text-gray-600">🎵</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{tracks[currentTrack].title}</h3>
                <p className="text-gray-400">{tracks[currentTrack].genre}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevTrack}
                className="glass-effect neon-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
              >
                <FaStepBackward className="text-accent" />
              </button>
              
              <button 
                onClick={() => togglePlay(currentTrack)}
                className="glass-effect neon-border w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
              >
                {isPlaying ? (
                  <FaPause className="text-accent" />
                ) : (
                  <FaPlay className="text-accent ml-1" />
                )}
              </button>
              
              <button 
                onClick={nextTrack}
                className="glass-effect neon-border w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all"
              >
                <FaStepForward className="text-accent" />
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
              <span>{tracks[currentTrack].duration}</span>
            </div>
          </div>
          
          {/* Volume Control */}
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
          
          {/* Hidden Audio Element */}
          <audio 
            ref={audioRef}
            onTimeUpdate={updateProgress}
            onEnded={nextTrack}
            onLoadedMetadata={() => {
              if (audioRef.current) {
                audioRef.current.volume = volume;
              }
            }}
          />
        </div>

        {/* Tracks Grid */}
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
          <button 
            onClick={onViewAll}
            className="glass-effect neon-border px-8 py-3 rounded-full font-medium hover:bg-accent/20 transition-all"
          >
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeatPlayerSection;