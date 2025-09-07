import { useState } from 'react';
import './About.css';

/** GitHub (filled, exactly as provided) */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.16 8.98 7.54 10.43.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.06-3.07.67-3.72-1.31-3.72-1.31-.5-1.27-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.47-2.45-.28-5.02-1.23-5.02-5.47 0-1.21.43-2.19 1.12-2.97-.11-.28-.49-1.42.11-2.96 0 0 .92-.3 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.69.78 1.12 1.76 1.12 2.97 0 4.25-2.58 5.19-5.03 5.46.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.75.53 4.38-1.45 7.54-5.56 7.54-10.42C23.01 5.24 18.27.5 12 .5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Reddit (exact path you supplied) */
function RedditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M20 12.5c.64 0 1.16-.52 1.16-1.16S20.64 10.2 20 10.2c-.43 0-.8.23-1 .57-1.02-.67-2.34-1.1-3.82-1.17l.66-3.1 2.15.45a1.17 1.17 0 1 0 .19-1.15l-2.76-.58a.6.6 0 0 0-.7.45l-.9 3.98c-1.58.04-3.02.48-4.09 1.18a1.16 1.16 0 1 0-1.03-.6c-1.46.75-2.38 1.88-2.38 3.15 0 2.55 3.15 4.63 7.02 4.63 3.88 0 7.02-2.08 7.02-4.63 0-.2-.03-.4-.08-.59.15-.08.33-.12.51-.12ZM9.4 13.1a1.16 1.16 0 1 1 0-2.32 1.16 1.16 0 0 1 0 2.32Zm5.2 0a1.16 1.16 0 1 1 0-2.32 1.16 1.16 0 0 1 0 2.32ZM12 17.7c-1.33 0-2.48-.47-3.23-1.2a.4.4 0 1 1 .56-.57c.57.56 1.55.93 2.67.93 1.12 0 2.1-.37 2.67-.93a.4.4 0 0 1 .56.57c-.75.73-1.9 1.2-3.23 1.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Shopping (filled, exactly as provided) — used for Bonfire */
function ShoppingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 7V6a5 5 0 0 1 10 0v1h2a2 2 0 0 1 2 2l-1.3 9.1A3 3 0 0 1 16.72 21H7.28a3 3 0 0 1-2.98-2.9L3 9a2 2 0 0 1 2-2h2zm2 0h6V6a3 3 0 1 0-6 0v1z" />
    </svg>
  );
}

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
            A portion of each app&apos;s earnings is routed back to a general developer fund, which is used to support ongoing development across the ecosystem.
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
        <p className="qr-caption">t1MkgrZASAJbtNzEagDtUbapFKiS7sNQihm</p>

        {/* Footer credit with three links; icons are exactly your SVGs */}
        <div
          className="footer-credit"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            color: '#283748',
            marginTop: '16px'
          }}
        >
          <span>© 2025 ZDA</span>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
            {/* Bonfire -> ShoppingIcon */}
            <a href="https://bonfire.com/zcash" target="_blank" rel="noopener noreferrer" aria-label="Bonfire" title="Bonfire">
              <ShoppingIcon width={28} height={28} style={{ color: '#f2cda3' }} />
            </a>

            {/* Reddit -> RedditIcon */}
            <a href="https://reddit.com/r/zcash" target="_blank" rel="noopener noreferrer" aria-label="Reddit" title="Reddit">
              <RedditIcon width={28} height={28} style={{ color: '#f2cda3' }} />
            </a>

            {/* GitHub -> GithubIcon */}
            <a href="https://github.com/ZcashUsersGroup" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <GithubIcon width={28} height={28} style={{ color: '#f2cda3' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
