import "./index.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="custom-footer">
                <div className="footer-section">
                    <h3>Connect with us</h3>
                    <ul className="social-links">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact us</h3>
                    <p>Email: contact@incredibleindia.com</p>
                    <p>Phone: +91 123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates and offers.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
