import './FilterBar.css';
import { useState, useRef, useEffect } from 'react';

export default function FilterBar({
  currency,
  setCurrency,
  sortOrder,
  setSortOrder,
  statusFilters,
  toggleStatus
}) {
  const [sortOpen, setSortOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { label: 'Checkpoints Reached (High → Low)', value: 'progress-desc' },
    { label: 'Checkpoints Reached (Low → High)', value: 'progress-asc' },
    { label: 'Alphabetical (A → Z)', value: 'alpha-asc' },
    { label: 'Alphabetical (Z → A)', value: 'alpha-desc' },
  ];

  const statuses = ['NOT STARTED', 'IN PROGRESS', 'COMPLETED', 'BLOCKED'];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-bar">
      {/* Sort Dropdown */}
      <div className="sort-dropdown" ref={dropdownRef}>
        <button className="sort-button" onClick={() => setSortOpen(prev => !prev)}>
          ⇅ Sort
        </button>
        {sortOpen && (
          <div className="dropdown-menu">
            {sortOptions.map(option => (
              <div
                key={option.value}
                className={sortOrder === option.value ? 'selected' : ''}
                onClick={() => {
                  setSortOrder(option.value);
                  setSortOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status Filters */}
      <div className="status-toggle">
        {statuses.map(status => (
          <button
            key={status}
            className={statusFilters.includes(status) ? 'active' : ''}
            onClick={() => toggleStatus(status)}
          >
            {status.replace('IN ', '')}
          </button>
        ))}
      </div>

      {/* Currency Toggle */}
      <div className="currency-toggle">
        <button
          onClick={() => setCurrency('USD')}
          className={currency === 'USD' ? 'active' : ''}
        >
          USD
        </button>
        <button
          onClick={() => setCurrency('ZEC')}
          className={currency === 'ZEC' ? 'active' : ''}
        >
          ZEC
        </button>
      </div>
    </div>
  );
}
