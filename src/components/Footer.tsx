// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brain-logo.jpeg';
import theme from '../theme';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        padding: '3rem 2rem',
        borderTop: `1px solid ${theme.colors.secondary}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Branding */}
        <div style={{ flex: '1 1 200px', marginBottom: '1.5rem' }}>
          <img src={logo} alt="The Software Consulting" style={{ width: '150px', borderRadius: '50%' }} />
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Empowering businesses to unlock the full potential of technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ flex: '1 1 150px', marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/about" style={{ color: theme.colors.text, textDecoration: 'none' }}>About Us</Link></li>
            {/* <li><Link to="/careers" style={{ color: theme.colors.text, textDecoration: 'none' }}>Careers</Link></li> */}
            <li><Link to="/contact" style={{ color: theme.colors.text, textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px', marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/services" style={{ color: theme.colors.text, textDecoration: 'none' }}>All Services</Link></li>
            <li><Link to="/industries" style={{ color: theme.colors.text, textDecoration: 'none' }}>Industries</Link></li>
            {/* <li><Link to="/portfolio" style={{ color: theme.colors.text, textDecoration: 'none' }}>Portfolio</Link></li> */}
          </ul>
        </div>

        <div style={{ flex: '1 1 150px', marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Insights</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/insights" style={{ color: theme.colors.text, textDecoration: 'none' }}>Blogs</Link></li>
            <li><Link to="/insights" style={{ color: theme.colors.text, textDecoration: 'none' }}>Case Studies</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 150px', marginBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.text }}>
              {/* <i className="fab fa-linkedin"></i> */}
              <FaLinkedin size={20}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.text }}>
              <FaX size={20}/>
              {/* <i className="fab fa-twitter"></i> */}
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.text }}>
              <FaFacebook size={20}/>
              {/* <i className="fab fa-facebook"></i> */}
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div
        style={{
          borderTop: `1px solid ${theme.colors.secondary}`,
          marginTop: '2rem',
          paddingTop: '1rem',
          textAlign: 'center',
          fontSize: '0.8rem',
        }}
      >
        <p>© {new Date().getFullYear()} The Software Consulting. All rights reserved.</p>
        <p>
          <Link to="/" style={{ color: theme.colors.text, textDecoration: 'none', marginRight: '1rem' }}>
            Privacy Policy
          </Link>
          <Link to="/" style={{ color: theme.colors.text, textDecoration: 'none' }}>
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;