import { Link } from "react-router-dom";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {

    const [email, setEmail] = useState('');

    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer__data">
                    <div className="footer__cta">
                        <Link className="footer__logo-link" to="/">
                            <img className="footer__logo" src="/images/icons/logo-light.png" alt="logo" title="logo" />
                        </Link>

                        <div className="subscribe">
                            <p className="subscribe__title">Subscribe Now</p>

                            <div className="subscribe__field">
                                <img className="subscribe__field-icon" src="/images/icons/email-white.png" alt="email" title="email" />
                                <input
                                    className="subscribe__field-input"
                                    placeholder="Enter your Email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <button className="subscribe__field-button">Subscribe</button>
                        </div>
                    </div>

                    <div className="links">
                        <div className="links__block">
                            <p className="links__block-title">Information</p>
                            <ul className="links__list">
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">About Us</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Learn More</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Blog</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="links__block">
                            <p className="links__block-title">Helpful Links</p>
                            <ul className="links__list">
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Services</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Support</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Privacy Policy</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Terms</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="links__block">
                            <p className="links__block-title">Our Services</p>
                            <ul className="links__list">
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Book</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Blog</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Doctors</Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">Achievements</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="links__block">
                            <p className="links__block-title">Contact Us</p>
                            <ul className="links__list">
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">
                                        <img className="links__icon" src="/images/icons/email.png" alt="" />
                                        + 38(055) 675 7647
                                    </Link>
                                </li>
                                <li className="links__list-item">
                                    <Link className="links__list-link" to="">
                                        <img className="links__icon" src="/images/icons/phone.png" alt="" />
                                        ladnlame@gmail.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="footer__rights">All Rights Reserved Of Pet Doctor in 2023</p>
            </footer >
        </div >
    )
};

export default Footer;