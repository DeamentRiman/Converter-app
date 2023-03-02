import React from 'react'
import '../Footer/index.scss'
import FB from '../Footer/icons/fb.svg';
import Instargam from '../Footer/icons/instagram.svg';
import Youtube from '../Footer/icons/youtube.svg';

const Footer: React.FC = () => {
    return (
        <footer className="appFooter">
            <div className="appFooterContainer">
                <div className="appFooterSocial">
                    <a href="#" className="appFooterSocialIcon">
                        <img className="appFooterSocialFB" src={FB} alt="FB Logo" />
                    </a>
                    <a href="#" className="appFooterSocialIcon">
                        <img className="appFooterSocialInstagram" src={Instargam} alt="FB Logo" />
                    </a>
                    <a href="#" className="appFooterSocialIcon">
                        <img className="appFooterSocialYoutube" src={Youtube} alt="FB Logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
