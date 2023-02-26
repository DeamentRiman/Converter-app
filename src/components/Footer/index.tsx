import React from "react";
import '../Footer/index.scss';
// import '../Footer/icons/symbols.svg'

const Footer:React.FC = () => {
    return (
        <footer className="appFooter">
            <div className="appFooterContainer">
                <div className="appFooterSocial">
                    <div>
                        <svg width="28" height="29">
                            <use xlinkHref="../Footer/icons/symbols.svg#fb"/>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;