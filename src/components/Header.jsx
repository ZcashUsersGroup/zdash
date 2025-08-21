import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import './Header.css'; // Optional: for scoped styles

export default function Header({ onSearch, currency, setCurrency }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.hamburger-menu')) {
        setDropdownOpen(false);
      }
    };
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

      {/* Currency Toggle */}
      <div className="currency-toggle">
        <button
          onClick={() => setCurrency('USD')}
          className={currency === 'USD' ? 'active' : ''}
        >
          $
        </button>
        <button
          onClick={() => setCurrency('ZEC')}
          className={currency === 'ZEC' ? 'active' : ''}
        >
          Ⓩ
        </button>
      </div>

      
    </header>
  );
}

