import './Stats.css';

export default function Stats({ cards, currency, exchangeRate, onOpenModal }) {
  let totalEarned = 0;
  let totalSpent = 0;
  let totalRequested = 0;
  let totalReceived = 0;
  let totalAvailable = 0;

  for (const card of cards) {
    const received = card.received || 0;
    const requested = card.target || 0;
    const spent = card.spent || 0;
    const available = card.available || 0;
    const earned = card.earned || 0;

    totalEarned += earned;
    totalSpent += spent;
    totalRequested += requested;
    totalReceived += received;
    totalAvailable += available;
  }

  const format = (zec) => {
  const safeZec = typeof zec === 'number' && !isNaN(zec) ? zec : 0;
  return currency === 'USD'
    ? `$${(safeZec * exchangeRate).toFixed(2)} USD`
    : `${safeZec.toFixed(3)} ZEC`;
};


  return (
    <div className="stats-box">
      <div className="stats-inner">
        <div onClick={() => onOpenModal('available')}>
          <div className="stats-label">Available</div>
          <div className="stats-value">{format(totalAvailable)}</div>
        </div>
        <div onClick={() => onOpenModal('requested')}>
          <div className="stats-label">Total Requested</div>
          <div className="stats-value">{format(totalRequested)}</div>
        </div>
        <div onClick={() => onOpenModal('received')}>
          <div className="stats-label">Total Received</div>
          <div className="stats-value">{format(totalReceived)}</div>
        </div>
        <div onClick={() => onOpenModal('spent')}>
          <div className="stats-label">Total Spent</div>
          <div className="stats-value">{format(totalSpent)}</div>
        </div>
        <div onClick={() => onOpenModal('earned')}>
          <div className="stats-label">Total Earned</div>
          <div className="stats-value">{"---"}</div>
        </div>
      </div>
    </div>
  );
}
