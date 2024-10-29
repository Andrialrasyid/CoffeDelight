import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

const Order = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [buyerName, setBuyerName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const [errors, setErrors] = useState({
        name: '',
        address: '',
        phone: '',
        items: ''
    });

    // Mengambil data menu dalam format JSON
    useEffect(() => {
        fetch('/src/assets/menu.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Mengambil data sebagai JSON
            })
            .then(data => setItems(data)) // Mengatur state items dengan data JSON
            .catch(error => console.error('Error loading menu:', error));
    }, []);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, e.target.value);
        setQuantity(value);
        validateForm();
    };

    const handleItemChange = (e) => {
        const itemName = e.target.value;
        const item = items.find(item => item.name === itemName);
        setSelectedProduct(item);
        validateForm(); 
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setPhoneNumber(value);
        validateForm(); 
    };

    const addToSelectedItems = () => {
        if (selectedProduct) {
            const existingItem = selectedItems.find(selectedItem => selectedItem.name === selectedProduct.name);
            if (existingItem) {
                existingItem.quantity += quantity;
                setSelectedItems([...selectedItems]);
            } else {
                setSelectedItems([...selectedItems, { ...selectedProduct, quantity }]);
            }
            setSelectedProduct(null);
            setQuantity(1);
            calculateTotalPrice([...selectedItems, { ...selectedProduct, quantity }]);
            validateForm(); 
        }
    };

    const calculateTotalPrice = (items) => {
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalPrice(total);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', address: '', phone: '', items: '' };

        if (!buyerName.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!address.trim()) {
            newErrors.address = 'Address is required';
            valid = false;
        }

        const phoneRegex = /^[0-9]{10,14}$/; 
        if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
            newErrors.phone = 'Phone number must be between 10 to 14 digits and contain only numbers';
            valid = false;
        }

        if (selectedItems.length === 0) {
            newErrors.items = 'At least one item must be selected';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setBuyerName('');
        setAddress('');
        setPhoneNumber('');
        setSelectedItems([]);
        setQuantity(1);
        setTotalPrice(0);
    };

    const formattedOrderDetails = (
        <>
            <p><strong>Name:</strong> {buyerName}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phoneNumber}</p>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <p><strong>Total Price:</strong> Rp {totalPrice.toLocaleString('id-ID')}</p>
        </>
    );

    return (
        <div className="container-fluid" style={{ marginTop: '120px', width: '1519px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="card shadow-lg border-0 mb-5" style={{ width: '100%' }}>
                        <div className="card-header text-center bg-brown text-white">
                            <h2>Order Form</h2>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit} className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={buyerName}
                                            onChange={(e) => {
                                                setBuyerName(e.target.value);
                                                validateForm(); 
                                            }}
                                            required
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                            value={address}
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                                validateForm(); 
                                            }}
                                            required
                                            placeholder="Enter your address"
                                        />
                                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange} 
                                            required
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>

                                <div className="col-md-6"> 
                                    <div className="mb-3">
                                        <label className="form-label">Select Product</label>
                                        <select className="form-select" onChange={handleItemChange} required>
                                            <option value="">Select a product</option>
                                            {items.map(item => (
                                                <option key={item.name} value={item.name}>
                                                    {item.name} - Rp {item.price.toLocaleString('id-ID')}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {selectedProduct && (
                                        <div>
                                            <h6>Selected Product: {selectedProduct.name} - Rp {selectedProduct.price.toLocaleString('id-ID')}</h6>
                                            <div className="mb-3 d-flex align-items-end"> 
                                                <div className="me-2" style={{ width: '205px' }}> 
                                                    <label className="form-label">Quantity</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={quantity}
                                                        onChange={handleQuantityChange}
                                                        min="1"
                                                        required
                                                    />
                                                </div>
                                                <button type="button" className="btn btn-primary" onClick={addToSelectedItems}>
                                                    Add to Selected Items
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <h5>Selected Items:</h5>
                                    <ul className="list-group mb-3">
                                        {selectedItems.length > 0 ? (
                                            selectedItems.map((item, index) => (
                                                <li key={index} className="list-group-item">
                                                    {item.name} - Quantity: {item.quantity} - Price: Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="list-group-item">-</li>
                                        )}
                                    </ul>
                                    {errors.items && <div className="text-danger">{errors.items}</div>} 
                                </div>
                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <h5>Total Price: <span className="text-success fw-bold">Rp {totalPrice.toLocaleString('id-ID')}</span></h5>
                            <button type="submit" className="btn-brown w-100" onClick={handleSubmit}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Order Details</h5>
                            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            {formattedOrderDetails} 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
