import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here, e.g., API call, authentication, etc.
    console.log('Login clicked:', { email, password });
    // Close the modal after login attempt
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <div className="auth-card">
          <h2>Login</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <Link to="/">Forgot Password?</Link>
          </div>
          <button onClick={handleLogin}>Login</button>
          <div className="signup-text">
            <p>If you are new, <Link to='/'>sign up here</Link>.</p>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
