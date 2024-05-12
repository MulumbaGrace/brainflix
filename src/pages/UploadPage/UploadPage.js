import '../UploadPage/UploadPage.scss';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/images/publish.svg';

function UploadPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <Header />
            <div className="main">
                <h2 className="main__title">Upload Video</h2>
            </div>
            <div className="main-container">
                <div>
                    <p className="main__text">VIDEO THUMBNAIL </p>
                    <img className="main__image" src={thumbnail} alt="Sprinter in starting position on track" />
                </div>
                <form className="form form__upload">
                    <div className="form__upload-title">
                        <label className="form__label">TITLE YOUR VIDEO</label>
                    </div>
                    <div className="form__input">
                        <input className="form__input-title" type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Add a title to your video" />
                    </div>
                    <div className="form__description">
                        <label className="form__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="form__textarea" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Add a description to your video" rows="4" cols="50"></textarea>
                    </div>
                </form>
            </div>
            <div>
                <div className="form__publish">
                    <button className="form__button" type="submit"><img className="form__publish-icon" src={publishIcon} alt="publish icon"/>PUBLISH</button>
                </div>
                <div className="form__cancel">
                    <button type="button" className="form__cancel-button">CANCEL</button>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
