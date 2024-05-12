import './Header.scss';
import logoImage from '../../assets/images/BrainFlix-logo.svg';
import searchIcon from '../../assets/images/search.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/images/upload.svg';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to ="/" className="header__logo-link">
                    <img className="header__logo-img" src={logoImage} alt="brainflix logo" />
                </Link>
            </div>
            <div className="header__action">
                <div className="header__action--searchbar">
                    <img className="header__action--searchbar-icon" src={searchIcon} alt="search icon" />
                    <input className="header__action--searchbar-input" type="text" placeholder="search"/>
                </div>
                <div className="header__action--upload">
                <Link to ="/upload" className="header__action--upload-link">
                    <button className="header__action--upload-button">
                            <img className="header__action--upload-button-icon" src={uploadIcon} alt="upload icon" />
                        UPLOAD
                    </button>  
                </Link>  
                </div>
                <div className="header__action--avatar">
                    <img className="header__action--avatar-image" src={avatar} alt="avatar" />
                </div>
            </div>
        </header>
    )
}

export default Header;