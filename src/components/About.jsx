import { useState } from 'react';
import './About.css';

export default function About() {
  const [openIndex, setOpenIndex] = useState(0); // start with first open (change to null for all closed)

  const sections = [
    {
      title: 'What we do',
      content: (
        <>
          <p>
            We are a team of developers funded with ZEC by the community to build applications that support the Zcash ecosystem.
          </p>
          <p>
            Each app is assigned a shielded (z) address. A view key is provided so anyone can see what the app earns.
          </p>
          <p>
            A portion of each app's earnings is routed back to a general developer fund, which is used to support ongoing development across the ecosystem.
          </p>
        </>
      ),
    },
    {
      title: 'How it works',
      content: (
        <>
          <p>
            Transparency is central to our mission. We demonstrate this by building apps that generate revenue transparently and return a share to fund more development.
          </p>
          <p>
            We start with nearly zero ZEC every time. Each grant uses a transparent (t) address for collecting funds.
          </p>
          <p>
            We also maintain a central t address for the general developer fund. These addresses make all inflows and outflows fully visible and traceable.
          </p>
          <p>
            Funds are used exclusively to pay developers. If any funding is needed beyond that purpose, we issue a separate grant.
          </p>
          <p>
            All developer payouts are shielded by default. Incoming transparent funds are automatically shielded (t to z) to maintain user and developer anonymity.
          </p>
          <p>
            All earnings percentages and developer payouts are logged on-chain and can be viewed via project view keys.
          </p>
        </>
      ),
    },
    {
      title: 'Coming Soon',
      content: (
        <p>
          We plan to enable contributors to share in the earnings of the apps they fund. This feature is under active development and will launch when the required components are ready.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <>
          <p style={{ wordBreak: 'break-word' }}>
            u1qtt59kdhca9vtsshqwl6gu47m3camcet0v56a8x6ruwqeyfa0degeppd2wvsd723tmshhd52e3u45vtda0te40u69w63stda68rn6rfwyk4l5t4vsktjl9a4kgf3lpj8u46hcrgz4d3pmf3dqn76p77kjs3ukr4j025zu6ahj8hjf5a2x6u9gv5wrmm3w68pytrnc2kj3453vvmudts
          </p>

          
        </>
      ),
    },
  ];

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="about-section" className="about-section">
      <div className="about-inner">
        
        
        <div className="qr-container">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=283748&bgcolor=f2cda3&data=t1MkgrZASAJbtNzEagDtUbapFKiS7sNQihm"
              alt="ZDA General Fund QR"
              className="qr-image"
            />
          </div>
          <p className="qr-caption">ZDA GENERAL FUND</p>
        <p className="footer-credit">
          © 2025 ZDA.{' '}
          <a href="https://coff.ee/jaxf" target="_blank" rel="noopener noreferrer">
            Created by Jax.
          </a>
        </p>
      </div>
    </section>
  );
}
