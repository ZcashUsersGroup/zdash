import SummaryModal from './modals/SummaryModal';
import QRModal from './modals/QRModal';
import MilestoneModal from './modals/MilestoneModal';
import DetailsModal from './modals/DetailsModal';
import './Modals.css';

export default function Modals({ modal, onClose }) {
  const overlayVisible = modal.type !== null;

  const summaryContent = {
    available: {
      title: 'Available',
      description: 'This is the total amount currently available to be allocated.'
    },
    requested: {
      title: 'Requested',
      description: 'Sum of all funding requests across active and completed projects.'
    },
    received: {
      title: 'Received',
      description: 'Total amount that has been received by project creators.'
    },
    spent: {
      title: 'Spent',
      description: 'All funds that have already been used for project milestones.'
    },
    earned: {
      title: 'Earned',
      description: 'ZEC or USD earned by creators for completed milestones.'
    }
  };

  const isBasicSummary = Object.keys(summaryContent).includes(modal.type);
  const content = summaryContent[modal.type];

  return (
    <>
      {overlayVisible && (
        <div className="modal-overlay" onClick={onClose}></div>
      )}

      {modal.type === 'summary' && (
        <SummaryModal data={modal.data} onClose={onClose} />
      )}
      {modal.type === 'qr' && (
        <QRModal data={modal.data} onClose={onClose} />
      )}
      {modal.type === 'milestone' && (
        <MilestoneModal data={modal.data} onClose={onClose} />
      )}
      {modal.type === 'details' && (
        <DetailsModal data={modal.data} onClose={onClose} />
      )}

      {isBasicSummary && (
        <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>×</button>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      )}
    </>
  );
}
