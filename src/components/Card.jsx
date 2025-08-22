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
    const amt =
      currency === 'USD'
        ? `$${(raised * exchangeRate).toFixed(2)} of $${(target * exchangeRate).toFixed(2)} `
        : `${Number(raised || 0).toFixed(3)} of ${Number(target || 0).toFixed(3)} Ⓩ`;
    return `Raised ${amt}`;
  };

  const statusClass =
    {
      'COMPLETED': 'status-completed',
      'IN PROGRESS': 'status-inprogress',
      'BLOCKED': 'status-blocked',
      'NOT STARTED': 'status-notstarted',
    }[status] || 'status-notstarted';

  const openDetails = () => {
    onOpenModal('details', {
      title,
      description,
      tags,
      priority,
      milestones,
      address: wallet_addresses,
    });
  };

  const milestonesList = ['Analyze', 'Design', 'Develop', 'Deploy', 'Maintain'];
  const milestonePercents = [0, 25, 50, 75, 97.7];

  return (
    <div className="card" onClick={openDetails}>
      {/* Title row with status circle on the left */}
      <div className="card-header">
        <span className={`status-circle ${statusClass}`} title={status} />
        <h3 className="card-title">{title}</h3>
      </div>

      <p><strong>{formatAmount()}</strong></p>

      <div className="progress-bar" data-progress={progress}>
        <div className="progress" style={{ width: `${progress}%` }}></div>

        {milestonesList.map((name, i) => {
          const left = milestonePercents[i];
          const isFilled = (progress || 0) >= left;

          const openMilestone = (e) => {
            e.stopPropagation(); // prevent opening Details as well
            onOpenModal('milestone', { name });
          };

          return (
            <div key={name}>
              <div
                className={`checkpoint ${isFilled ? 'filled' : ''}`}
                style={{ left: `${left}%` }}
                onClick={openMilestone}
              />
              <div className="checkpoint-label" style={{ left: `${left + 1}%` }}>
                <span className="milestone-label" onClick={openMilestone}>
                  {name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
