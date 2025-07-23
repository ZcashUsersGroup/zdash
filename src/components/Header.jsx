import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import './Header.css'; // Optional: for scoped styles

export default function Header({ onSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  // Close dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.hamburger-menu')) {
      setDropdownOpen(false);
    }
  };

  // Attach global click handler
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search projects by title/tags..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <nav className="hamburger-menu">
        <button className="hamburger-icon" onClick={toggleDropdown}>☰</button>
        {dropdownOpen && (
          <div className="hamburger-dropdown">
            <a href="#about-section">About</a>
          </div>
        )}
      </nav>
    </header>
  );
}
