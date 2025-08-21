import '../Modals.css';

export default function DetailsModal({ data, onClose }) {
  const {
    title = 'Details',
    description = '',
    tags = [],
    priority = 'N/A',
    // milestones = [],  // ❌ we won't render milestones here anymore
    address: passedAddress
  } = data || {};

  // Support either `address` or `wallet_addresses` if caller changes later
  const address = passedAddress || data?.wallet_addresses || '';
  const qrUrl = address
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=283748&bgcolor=f2cda3&data=${encodeURIComponent(address)}`
    : '';

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

        {/* ✅ Replaced milestones area with QR + address */}
        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Contribute</h3>
          {address ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <img
                  src={qrUrl}
                  alt="Contribution QR Code"
                  className="qr-code"
                  style={{ width: '200px', height: '200px', border: '2px solid #283748', borderRadius: '2px' }}
                />
              </div>
              <p style={{ wordBreak: 'break-word' }}>
                <strong>Address:</strong> <code>{address}</code>
              </p>
            </>
          ) : (
            <p><em>No wallet address available</em></p>
          )}
        </div>
      </div>
    </div>
  );
}
