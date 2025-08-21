import './Card.css';

export default function Card({ card, currency, exchangeRate, onOpenModal }) {
  const {
    id,
    title,
    date,
    raised,
    target,
    progress,
    creators,
    status,
    wallet_addresses,
    description,
    tags,
    priority,
    milestones
  } = card;

  const formatAmount = () => {
    const amt = currency === 'USD'
      ? `$${(raised * exchangeRate).toFixed(2)} of $${(target * exchangeRate).toFixed(2)} `
      : `${raised.toFixed(3)} of ${target.toFixed(3)} Ⓩ`;
    return `Raised ${amt}`;
  };

  const statusClass = {
    'COMPLETED': 'status-completed',
    'IN PROGRESS': 'status-inprogress',
    'BLOCKED': 'status-blocked',
    'NOT STARTED': 'status-notstarted',
  }[status] || '';

  const openDetails = () => {
    onOpenModal('details', {
      title,
      description,
      tags,
      priority,
      milestones,          // keep sending in case you still use it elsewhere
      address: wallet_addresses  // ✅ send address to details modal
    });
  };

  return (
    <div className="card" onClick={openDetails}>
      <button className="menu-button" onClick={openDetails}>?</button>
      <div className={`status-circle ${statusClass}`} title={status}></div>
      <h3>{title}</h3>
      <p><strong>{formatAmount()}</strong></p>

      <div className="progress-bar" data-progress={progress}>
        <div className="progress" style={{ width: `${progress}%` }}></div>

        {['Analyze', 'Design', 'Develop', 'Deploy', 'Maintain'].map((milestone, i) => {
          const left = [0, 25, 50, 75, 97.7][i];
          const isFilled = progress >= left;
          return (
            <div key={milestone}>
              <div
                className={`checkpoint ${isFilled ? 'filled' : ''}`}
                style={{ left: `${left}%` }}
                onClick={() => onOpenModal('milestone', { name: milestone })}
              ></div>
              <div
                className="checkpoint-label"
                style={{ left: `${left + 1}%` }}
              >
                <span
                  className="milestone-label"
                  onClick={() => onOpenModal('milestone', { name: milestone })}
                >
                  {milestone}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
