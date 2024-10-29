import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 d-flex flex-column align-items-start ms-5 mt-3 mb-3 ">
                        <img 
                            src="src/assets/logohalal.png" 
                            alt="Halal Logo" 
                            className="img-fluid mb-2" 
                            style={{ maxWidth: '50px' }} 
                        />
                        <img 
                            src="src/assets/brandofyear.png" 
                            alt="Award Logo" 
                            className="img-fluid" 
                            style={{ maxWidth: '50px' }} 
                        />
                    </div>

                    <div className="col-md-3 mt-3 mb-3">
                        <h5>Café Delight</h5>
                        <p>
                            123 Coffee St,<br />
                            Cityville, ST 12345<br />
                            Phone: (123) 456-7890<br />
                            Email: info@cafedelight.com
                        </p>
                    </div>

                    <div className="col-md-3 mt-3 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/menu" className="text-white">Menu</Link></li>
                            <li><Link to="/about" className="text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-white">Contact</Link></li>
                            
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3 mt-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                                <i className="bi bi-facebook"></i> Facebook
                            </a>
                            <br />
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                                <i className="bi bi-twitter"></i> Twitter
                            </a>
                            <br />
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                                <i className="bi bi-instagram"></i> Instagram
                            </a>
                            <br />
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="bi bi-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4" style={{ borderColor: 'white' }} />
                <div className="text-center mt-4">
                    <p>&copy; 2024 Café Delight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
