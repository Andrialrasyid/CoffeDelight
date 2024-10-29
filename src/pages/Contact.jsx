import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const validateFields = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Name is required';
        }
        
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!message) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validateFields();

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setShowModal(true);
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div className="container-fluid" style={{ marginTop: '120px', width: '1519px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow-sm mb-5">
                        <div className="card-header text-center bg-brown text-white">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            validateFields();
                                        }}
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            validateFields();
                                        }}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your Message</label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        rows="4"
                                        placeholder="Write your message here"
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            validateFields();
                                        }}
                                    ></textarea>
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-brown">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank You!</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Hello {name}, Thank you for reaching out! We have received your message and will get back to you soon.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
