import { useState, useEffect } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import FilterBar from './components/FilterBar';
import CardGrid from './components/CardGrid';
import About from './components/About';
import Modals from './components/Modals';
import { fetchExchangeRate, fetchAllCards } from './utils/fetchData';
import './index.css';

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('ZEC');
  const [statusFilters, setStatusFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('progress-desc');
  const [exchangeRate, setExchangeRate] = useState(44.85); // fallback
  const [modal, setModal] = useState({ type: null, data: null });

  useEffect(() => {
    fetchExchangeRate().then(rate => setExchangeRate(rate));
    fetchAllCards().then(fetched => setCards(fetched));
  }, []);

  const toggleStatus = (status) => {
    setStatusFilters(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleModalOpen = (type, data) => setModal({ type, data });
  const handleModalClose = () => setModal({ type: null, data: null });

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <div className="page-section">
      <Stats cards={cards} currency={currency} exchangeRate={exchangeRate} onOpenModal={handleModalOpen} />
      <FilterBar
        currency={currency}
        setCurrency={setCurrency}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        toggleStatus={toggleStatus}
        statusFilters={statusFilters}
      />
      <CardGrid
        cards={cards}
        currency={currency}
        searchQuery={searchQuery}
        sortOrder={sortOrder}
        statusFilters={statusFilters}
        exchangeRate={exchangeRate}
        onOpenModal={handleModalOpen}
      />
      </div>
      <About />
      <Modals modal={modal} onClose={handleModalClose} />
    </>
  );
}

export default App;
