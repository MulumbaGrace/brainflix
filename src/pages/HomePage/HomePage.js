import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import MainVideo from '../../components/MainVideo/MainVideo';
import NextVideos from '../../components/NextVideo/NextVideos';
import Header from '../../components/Header/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL, API_KEY } from '../../utilis';

const timeFormat = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function HomePage() {
    const [video, setVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
                const videoDetails = response.data;
                setVideos(videoDetails);
                
                const videoId = id || videoDetails[0].id; 
                const fullVideoDetails = await axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`);
                setVideo(fullVideoDetails.data);
            } catch (err) {
                console.error('Error fetching videos:', err);
            }
        }
        fetchVideos();
    }, [id]);

    if (!video) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <Header />
            <div className="home__video">
                <Hero video={video.image} />
            </div>
            <div className="home__main">
                <MainVideo video={video} timeFormat={timeFormat} />
                <NextVideos videos={videos.filter(v => v.id !== video.id)} selectedVideoId={video.id} />
            </div>
        </div>
    );
}

export default HomePage;
