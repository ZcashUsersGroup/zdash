import '../Modals.css';

const DESCRIPTIONS = {
  Analyze: "Understanding the problem, gathering requirements, and planning the work.",
  Design: "Architecting the solution and preparing specifications or prototypes.",
  Develop: "Writing and testing code or content to implement the solution.",
  Deploy: "Releasing the solution into production or public view.",
  Maintain: "Monitoring, fixing issues, and improving the system post-launch."
};

export default function MilestoneModal({ data, onClose }) {
  const name = data?.name || '';
  const description = DESCRIPTIONS[name] || 'No description available.';

  return (
    <div className="modal">
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
