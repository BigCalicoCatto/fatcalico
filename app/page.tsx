import { ReactNode } from 'react';

const Highlight = ({ children, color = 'orange' }: { children: ReactNode; color?: 'orange' | 'yellow' }) => {
  const colorMap = {
    orange: '#FF6B35',
    yellow: '#FFD60A'
  };
  return (
    <span style={{ color: colorMap[color], fontWeight: 'bold' }}>
      {children}
    </span>
  );
};

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#000000', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* BANNER */}
      <div style={{ width: '100%', height: 'auto' }}>
        <img
          src="/fatbanner.png"
          alt="Calico Banner"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* HERO */}
      <section style={{ padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 16px 0', lineHeight: '1.2' }}>
          <span style={{ color: '#FF6B35' }}>GET DISCOVERED</span>
          <br />
          <span style={{ color: '#FFD60A' }}>GET CHOSEN</span>
        </h1>
      </section>

      {/* YOU ARE NOT VISIBLE ENOUGH */}
      <section style={{ padding: '48px 24px', backgroundColor: '#000000', color: '#FFFFFF' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center' }}>
          YOU ARE <Highlight color="orange">NOT VISIBLE</Highlight> ENOUGH
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>
            Clients <Highlight color="orange">can't see</Highlight> your best work.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>
            Your link-in-bio is just a <Highlight color="orange">messy list</Highlight>.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>
            You <Highlight color="orange">look like everyone</Highlight> else online.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>
            "<Highlight color="orange">DM me</Highlight>" is too much work for them.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>
            The <Highlight color="orange">algorithm</Highlight> decides if you get seen.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '0px', lineHeight: '1.6' }}>
            Your best posts <Highlight color="orange">disappear in 2 days</Highlight>.
          </li>
        </ul>
      </section>

      {/* MAKE YOURSELF VISIBLE */}
      <section style={{ padding: '48px 24px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center', color: '#000000' }}>
          <Highlight color="orange">MAKE YOURSELF</Highlight> VISIBLE
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#000000' }}>
            Give them one <Highlight color="orange">clean link</Highlight> to click.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#000000' }}>
            It loads <Highlight color="yellow">fast—under 2 seconds</Highlight>!
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#000000' }}>
            Show your <Highlight color="orange">best content</Highlight> first.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#000000' }}>
            Let them know your <Highlight color="orange">niche</Highlight> right away.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6', color: '#000000' }}>
            Show your <Highlight color="orange">real talent</Highlight> in seconds.
          </li>
          <li style={{ fontSize: '18px', marginBottom: '0px', lineHeight: '1.6', color: '#000000' }}>
            Brands can <Highlight color="orange">find and hire</Highlight> you faster.
          </li>
        </ul>
      </section>

      {/* THIS IS WHAT GETS YOU CHOSEN */}
      <section style={{ padding: '48px 24px', backgroundColor: '#000000' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', color: '#FFFFFF' }}>
          THIS IS WHAT <Highlight color="yellow">GETS YOU CHOSEN</Highlight>
        </h2>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dbcghcpes&public_id=Portfolio_preview_rhcsd2"
            width="100%"
            height="400"
            style={{ border: 'none', borderRadius: '12px' }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            title="Portfolio Preview"
          />
        </div>
      </section>

      {/* WHY THIS GETS YOU CHOSEN */}
      <section style={{ padding: '48px 24px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: '#000000' }}>
          WHY THIS <Highlight color="orange">GETS YOU</Highlight> CHOSEN
        </h2>
      </section>
    </div>
  );
}
