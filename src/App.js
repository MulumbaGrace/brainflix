import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import NextVideos from './components/NextVideo/NextVideos';
import MainVideo from './components/MainVideo/MainVideo';
import videoData from './data/video-details.json';
import Hero from './components/Hero/Hero';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const timeFormat = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="App">
      <Header />
      <Hero  video={currentVideo.image}/>
      <div className="container">
        <MainVideo video={currentVideo} timeFormat={timeFormat} />
        <NextVideos videos={videoData.filter(video => video.id !== currentVideo.id)} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}

export default App;

