import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer-grid">
            <div className="footer-logo-social">
                <a href="#home">
                    <img
                        src="Logo-White.svg"
                        alt="logo"
                        className="footer-logo"
                    />
                </a>
                <a
                    href="https://www.facebook.com/puntobanana/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="footer-circle footer-facebook float-right">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FFace.svg?alt=media&token=4496e785-ee1e-4db3-b85d-0430def9fea3"
                            alt="Facebook"
                            className="footer-icon footer-icon-facebook"
                        />
                    </div>
                </a>
                <a
                    href="https://wa.me/+528120167803/?text=!Quiero crear mi sitio web! 🍌"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="footer-circle">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2Fwhats.svg?alt=media&token=85ec7866-a4ec-4d3b-872c-339d06ef6d91"
                            alt="Whatsapp"
                            className="footer-icon"
                        />
                    </div>
                </a>
                <a href="http://m.me/puntobanana" target="_blank" rel="noreferrer">
                    <div className="footer-circle">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/sass-b1d5f.appspot.com/o/Recursos%2FMessenger.svg?alt=media&token=024d428c-d13a-452c-9b61-df3de679e0fa"
                            alt="Messenger"
                            className="footer-icon"
                        />
                    </div>
                </a>
            </div>
            <div className="footer-second">
                <a className="footer-a" href="#company">
                    <p className="footer-options">Download Now</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">License</p>
                </a>
            </div>
            <div className="footer-nav">
                <a className="footer-a" href="#company">
                    <p className="footer-options">About</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">Features</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">Pricing</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">Careers</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">Help</p>
                </a>
                <a className="footer-a" href="#company">
                    <p className="footer-options">Privacy</p>
                </a>
            </div>
            <div className="footer-credits">
                <span className="footer-text">© 2020 Landify UI Kit. All rights reserved</span>
            </div>
        </div>
    )
}
