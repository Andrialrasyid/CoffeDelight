import React, { useState, useRef } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: '',
    birthPlace: '',
    birthDate: '',
  });

  const [errors, setErrors] = useState({});

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const birthPlaceRef = useRef();
  const birthDateRef = useRef();

  const validate = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'username':
        if (!value) {
          newErrors.username = 'Username is required';
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          newErrors.username = 'Username hanya boleh huruf saja';
        } else {
          delete newErrors.username;
        }
        break;
      case 'email':
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          newErrors.email = 'Email is invalid';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (!value) {
          newErrors.password = 'Password is required';
        } else {
          delete newErrors.password;
        }
        break;
      case 'rePassword':
        if (value !== formData.password) {
          newErrors.rePassword = 'Passwords must match';
        } else {
          delete newErrors.rePassword;
        }
        break;
      case 'birthPlace':
        if (!value) {
          newErrors.birthPlace = 'Birth place is required';
        } else {
          delete newErrors.birthPlace;
        }
        break;
      case 'birthDate':
        if (!value) {
          newErrors.birthDate = 'Birth date is required';
        } else {
          delete newErrors.birthDate;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        birthPlace: '',
        birthDate: '',
      });
      setErrors({});
    } else {
      const firstErrorKey = Object.keys(errors)[0];
      switch (firstErrorKey) {
        case 'username':
          usernameRef.current.focus();
          break;
        case 'email':
          emailRef.current.focus();
          break;
        case 'password':
          passwordRef.current.focus();
          break;
        case 'rePassword':
          rePasswordRef.current.focus();
          break;
        case 'birthPlace':
          birthPlaceRef.current.focus();
          break;
        case 'birthDate':
          birthDateRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 className="text-center mb-4">Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3 row">
          <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
          <div className="col-sm-9">
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              id="username"
              name="username"
              ref={usernameRef}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
        </div>

        <div className="form-group mb-3 row">
          <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>

        <div className="form-group mb-3 row">
          <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-9">
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              ref={passwordRef}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
        </div>

        <div className="form-group mb-3 row">
          <label htmlFor="rePassword" className="col-sm-3 col-form-label">Re-Password</label>
          <div className="col-sm-9">
            <input
              type="password"
              className={`form-control ${errors.rePassword ? 'is-invalid' : ''}`}
              id="rePassword"
              name="rePassword"
              ref={rePasswordRef}
              value={formData.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && <div className="invalid-feedback">{errors.rePassword}</div>}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="birthPlace" className="col-sm-3 col-form-label">Tempat Lahir</label>
          <div className="col-sm-9">
            <input
              type="text"
              className={`form-control ${errors.birthPlace ? 'is-invalid' : ''}`}
              id="birthPlace"
              name="birthPlace"
              ref={birthPlaceRef}
              value={formData.birthPlace}
              onChange={handleChange}
            />
            {errors.birthPlace && <div className="invalid-feedback">{errors.birthPlace}</div>}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="birthDate" className="col-sm-3 col-form-label">Tanggal Lahir</label>
          <div className="col-sm-9">
            <input
              type="date"
              className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
              id="birthDate"
              name="birthDate"
              ref={birthDateRef}
              value={formData.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;