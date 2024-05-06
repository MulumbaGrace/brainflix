import './Comment.scss';
import React from 'react';

function Comment({ comment, timeFormat }) {
    return (
        <li className="video__comment">
            <div className="comment__header">
                <div className="comment__avatar" style={{ backgroundColor: '#E1E1E1' }}></div>
                <div className="comment__info">
                    <p className="video__comment-author">{comment.name}</p>
                    <p className="comment__date">{timeFormat(comment.timestamp)}</p>
                </div>
            </div>
            <div className="comment__details">
                <p className="video__comment-text">{comment.comment}</p>
            </div>
        </li>
    );
}

export default Comment;