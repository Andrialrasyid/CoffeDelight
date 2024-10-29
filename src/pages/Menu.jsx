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


};

export default Menu;
