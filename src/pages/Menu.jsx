import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Coffee');

    useEffect(() => {
        fetch('/src/assets/menu.txt')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error loading menu:', error));
    }, []);

    const categories = [
        { name: 'Coffee', icon: 'bi bi-cup' },
        { name: 'Tea', icon: 'bi bi-cup-hot' },
        { name: 'Milk', icon: 'bi bi-cup-straw' },
        { name: 'Frappe', icon: 'bi bi-cloud-drizzle' },
        { name: 'Snacks', icon: 'bi bi-basket' },
    ];

    return (
        <div className="container-fluid" style={{ marginTop: '120px' }}>
            <div className="row">
                {/* Left Navigation for Categories */}
                <div className="col-md-3">
                    <ul className="list-group">
                        {categories.map(({ name, icon }) => (
                            <li key={name} className="list-group-item">
                                <button 
                                    className={`btn btn-link text-left ${activeCategory === name ? 'bg-brown text-white' : 'text-secondary'}`} 
                                    onClick={() => setActiveCategory(name)}
                                    style={{ 
                                        width: '100%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        fontSize: '1.25rem', 
                                        fontWeight: 'normal', 
                                        borderRadius: '5px', 
                                    }}
                                >
                                    <i className={icon} style={{ marginRight: '10px' }}></i>
                                    {name} Series
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section for Product Cards */}
                <div className="col-md-9">
                    <div className="row justify-content-center">
                        {items
                            .filter(item => item.category === activeCategory)
                            .map((item) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <MenuItem 
                                        name={item.name} 
                                        price={item.price} 
                                        description={item.description} 
                                        image={item.image} 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Menu;
