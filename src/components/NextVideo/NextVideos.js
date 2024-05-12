// NextVideos.js
import React from 'react';
import './NextVideos.scss';
import { Link } from 'react-router-dom';

function NextVideos({ videos, selectedVideoId }) {
    return (
        <div className="videos">
            <h2 className="videos__title">NEXT VIDEOS</h2>
            <div className="videos__list">
                {videos.map(video => (
                    <Link key={video.id} to={`/videos/${video.id}`} style={{ textDecoration: 'none' }}>
                        <div className="videos__item">
                            <img src={video.image} alt={video.title} />
                            <div className="videos__info">
                                <h3 className="videos__info-title">{video.title}</h3>
                                <p className="videos__info-channel">{video.channel}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NextVideos;
