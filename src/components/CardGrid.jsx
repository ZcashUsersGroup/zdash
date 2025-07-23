import Card from './Card';
import './CardGrid.css';

export default function CardGrid({
  cards,
  searchQuery,
  sortOrder,
  statusFilters,
  currency,
  exchangeRate,
  onOpenModal
}) {
  const filtered = cards.filter(card => {
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.tags || []).some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesStatus =
      statusFilters.length === 0 || statusFilters.includes(card.status);

    return matchesSearch && matchesStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'progress-desc') return b.progress - a.progress;
    if (sortOrder === 'progress-asc') return a.progress - b.progress;
    if (sortOrder === 'alpha-asc') return a.title.localeCompare(b.title);
    if (sortOrder === 'alpha-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="card-grid">
      {sorted.map(card => (
        <Card
          key={card.id}
          card={card}
          currency={currency}
          exchangeRate={exchangeRate}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}
