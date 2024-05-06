import React from 'react';
import './NextVideos.scss';

function NextVideos({ videos, onVideoSelect }) {
  return (
    <div className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <div className="videos__list">
        {videos.map(video => (
          <div key={video.id} className="videos__item" onClick={() => onVideoSelect(video)}>
            <img src={video.image} alt={video.title} />
            <div className="videos__info">
              <h3 className="videos__info-title">{video.title}</h3>
              <p className="videos__info-channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NextVideos;
