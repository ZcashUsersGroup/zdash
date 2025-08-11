import '../Modals.css';

export default function DetailsModal({ data, onClose }) {
  const {
    title = 'Details',
    description = '',
    tags = [],
    priority = 'N/A',
    milestones = []
  } = data || {};

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>{title}</h2>

      <div style={{ textAlign: 'left' }}>
        <p>{description || <em>No description available</em>}</p>

        {tags.length > 0 && (
          <p><strong>Tags:</strong> {tags.join(', ')}</p>
        )}

        <p><strong>Priority:</strong> {priority}</p>

        {milestones.length > 0 && (
          <>
            <p><strong>Milestones:</strong></p>
            <ul>
              {milestones.map((m, i) => {
                const icon =
                  m.status === 'COMPLETED' ? '✅' :
                  m.status === 'IN PROGRESS' ? '⏳' :
                  '🕓';

                return (
                  <li key={i}>
                    <strong>{m.name}</strong><br />
                    {icon} <em>Status:</em> {m.status} | <em>Stage:</em> {m.stage} | <em>Target:</em> {new Date(m.target_date).toLocaleDateString()}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>

    </div>
  );
}
