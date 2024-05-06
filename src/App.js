import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import NextVideos from './components/NextVideo/NextVideos';
import MainVideo from './components/MainVideo/MainVideo';
import videoData from './data/video-details.json';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainVideo video={currentVideo} />
        <NextVideos videos={videoData.filter(video => video.id !== currentVideo.id)} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}

export default App;
