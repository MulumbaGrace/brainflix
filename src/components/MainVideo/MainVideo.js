import React from 'react';
import './MainVideo.scss';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';
import Comment from '../Comment/Comment';


function MainVideo({ video }) {
    const timeFormat = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

  return (
    <div className="main-video">
      <video className="hero__video" controls poster={video.image}>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video__details">
        <h2 className="video__details-title">{video.title}</h2>
        <div className="video__items">
            <p className="video__items-channel">By {video.channel} <span className="video__items-date"> {timeFormat(video.timestamp)} </span></p>
            <div className="video__items-icons">
                <div className="video__items-icons--views"><img src={viewsIcon} alt="views icon"/> {video.views} </div>
                <div className="video__items-icons--likes"> <img src={likesIcon} alt="likes icon"/> {video.likes} </div>
            </div>
        </div>
        <p className="video__description">{video.description}</p>
        <div className="video__comment"> 
            <div className="video__comment-text"> <h3>{video.comments?.lenght ?? 0} Comments</h3> </div> 
        </div>
        <div className="video__input"> <div className="video__input-avatar"> <img className="video__input-avatar--img" src={avatar} alt="avatar"/></div> </div>
        <div className="video__form">
            <label className="video__form-lebal" htmlFor='comment'>JOIN THE CONVERSATION</label>
            <div className="video__form-items">
                <input className="video__form-items--input" type="text" id="comment" name="comment" placeholder="Add a new comment"/>
                <button classNAme="video__form-items--button" type="submit"> <img classNAme="video__form-items--button-img" src={commentIcon} alt="comment icon"/> COMMENT </button>
            </div>
        </div>
        <div className="video__comments-list">
            <ul className="video__comments-list--items">
                {video.comments?.map(comment => (
                    <Comment key={comment.id} comment={comment} timeFormat={timeFormat} />
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
