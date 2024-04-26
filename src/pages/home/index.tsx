import { songs } from "@/assets/song";
import MusicPlayer from "@/components/playmusic";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleSongClick = (idx: number) => {
    setCurrentSongIndex(idx);
    setIsPlaying(true);
    setOpen(true);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1) % songs.length);
  };

  return (
    <div className="  mr-10 ">
      <div className=" flex items-center justify-between">
        <h4 className=" text-white font-bold text-2xl ">All Songs</h4>
        <Link
          className=" hover:text-red-600 text-white font-semibold text-sm"
          to={"/see-all"}
        >
          sell all
        </Link>
      </div>

      <div className=" mt-5 grid grid-cols-5 gap-5">
        {songs.map((song, index) => {
          return (
            <div key={index}>
              <div
                key={index}
                onClick={() => handleSongClick(index)}
                className=" col-span-1"
              >
                <img
                  src={song.song_image}
                  alt={song.name}
                  className=" rounded-[10px] h-[180px] w-full object-cover"
                />
                <div className=" mt-4">
                  <h5 className=" font-semibold  text-white/80 text-center">
                    {song.name}
                  </h5>
                  <p className=" text-center text-white/60 text-sm ">
                    {song.artist}
                  </p>
                </div>
                {/* audio */}
              </div>

              {isOpen &&
                currentSongIndex === index &&
                currentSongIndex !== null && (
                  <MusicPlayer
                    setCurrentSongIndex={setCurrentSongIndex}
                    song={songs[currentSongIndex]}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    playNext={playNext}
                    playPrev={playPrev}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
