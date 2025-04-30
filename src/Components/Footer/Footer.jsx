import React from "react";
import "./Footer.css";
import clarki3 from "../../assets/clarki3.png";

const Footer = () => {
    return (
        <div di='footer' className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={clarki3} alt="" />
                    <p>"I am a frontend developer and web designer from the Philippines, passionate about creating user-friendly and visually appealing websites. As a fresh graduate, I’m eager to learn, grow, and build innovative web solutions.".</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder="Enter your email" />
                    </div><div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Clark Auguis. All rights</p>
                <div className="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;