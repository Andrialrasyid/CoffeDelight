import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

const Header = () => {
    const location = useLocation(); // Get current location

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/menu', name: 'Menu' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/order', name: 'Order' },
        { path: '/privacy-policy', name: 'Privacy Policy' },
        { path: '/terms-and-conditions', name: 'Terms and Conditions' },
    ];

    return (
        <header className="bg-dark text-white p-3 fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h2">Café Delight</h1>
                <nav>
                    <ul className="nav">
                        {navItems.map(item => (
                            <li key={item.path} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
                                <Link className="nav-link text-white fs-5" to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
