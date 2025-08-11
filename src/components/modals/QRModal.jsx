import '../Modals.css';

export default function QRModal({ data, onClose }) {
  const address = data?.address || '';
  const qrUrl = address
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=283748&bgcolor=f2cda3&data=${encodeURIComponent(address)}`
    : '';

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Contribute</h2>
      {address ? (
        <>
          <img src={qrUrl} alt="QR Code" className="qr-code" style={{ width: '200px', height: '200px', marginBottom: '1rem' }} />
          <p><code>{address}</code></p>
        </>
      ) : (
        <p><em>No wallet address available</em></p>
      )}
    </div>
  );
}
