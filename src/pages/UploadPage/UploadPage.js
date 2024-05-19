import '../UploadPage/UploadPage.scss';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/images/publish.svg';
import { useNavigate } from 'react-router-dom';
import { API_URL, API_KEY } from '../../utilis';
import axios from 'axios';

function UploadPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert('Please fill out all fields');
            return;
        }
        alert('Uploaded');
        const uploadVideo = async () => {
            try {
                const response = await axios.post(`${API_URL}/videos?api_key=${API_KEY}`, {
                    title: e.target.title.value,
                    description: e.target.description.value,
                    image: 'http://localhost:8080/video-upload.jpg'
                });
                console.log(response);
            } catch (err) {
                console.error(err);
            }
        }
        uploadVideo();
        navigate("/");
    };
        

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
                    <button className="form__button" type="submit" onClick={handleSubmit}><img className="form__publish-icon" src={publishIcon} alt="publish icon"/>PUBLISH</button>
                </div>
                <div className="form__cancel">
                    <button type="button" className="form__cancel-button">CANCEL</button>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
