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
  const [statusOpen, setStatusOpen] = useState(false);

  const sortRef = useRef(null);
  const statusRef = useRef(null);

  const sortOptions = [
    { label: 'Checkpoints Reached (High → Low)', value: 'progress-desc' },
    { label: 'Checkpoints Reached (Low → High)', value: 'progress-asc' },
    { label: 'Alphabetical (A → Z)', value: 'alpha-asc' },
    { label: 'Alphabetical (Z → A)', value: 'alpha-desc' },
  ];

  const statuses = ['NOT STARTED', 'IN PROGRESS', 'COMPLETED', 'BLOCKED'];
  const allSelected = statusFilters.length === statuses.length;
  const noneSelected = statusFilters.length === 0;

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
      if (statusRef.current && !statusRef.current.contains(e.target)) setStatusOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleAllStatuses = () => {
    if (allSelected) {
      // deselect all
      statuses.forEach((s) => {
        if (statusFilters.includes(s)) toggleStatus(s);
      });
    } else {
      // select all
      statuses.forEach((s) => {
        if (!statusFilters.includes(s)) toggleStatus(s);
      });
    }
  };

  const statusButtonLabel = () => {
    if (allSelected) return 'Status: All';
    if (noneSelected) return 'Status: None';
    return `Status: ${statusFilters.length} selected`;
    // Optional: show names -> `Status: ${statusFilters.join(', ')}`
  };

  return (
    <div className="filter-bar">
      {/* Sort Dropdown */}
      <div className="sort-dropdown" ref={sortRef}>
        <button className="sort-button" onClick={() => setSortOpen((p) => !p)}>
          ⇅ Sort
        </button>
        {sortOpen && (
          <div className="dropdown-menu">
            {sortOptions.map((option) => (
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

      {/* Status Multi-Select Dropdown */}
      <div className="multi-dropdown" ref={statusRef}>
        <button
          className="status-button"
          aria-haspopup="true"
          aria-expanded={statusOpen}
          onClick={() => setStatusOpen((p) => !p)}
        >
          {statusButtonLabel()}
          <span className="chevron">▾</span>
        </button>

        {statusOpen && (
          <div className="multi-menu" role="menu" aria-label="Filter by status">
            <label className="multi-item select-all">
              <input
                type="checkbox"
                checked={allSelected}
                aria-checked={allSelected}
                onChange={toggleAllStatuses}
              />
              <span>{allSelected ? 'Deselect all' : 'Select all'}</span>
            </label>

            <div className="multi-sep" />

            {statuses.map((status) => {
              const checked = statusFilters.includes(status);
              return (
                <label className="multi-item" key={status}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleStatus(status)}
                  />
                  <span>{status.replace('IN ', 'IN ')}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
