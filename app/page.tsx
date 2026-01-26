import { ReactNode } from 'react';

const styles = `
  .card-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease;
  }
`;


const Highlight = ({ children, color = 'orange' }: { children: ReactNode; color?: 'orange' | 'yellow' }) => {
  const colorMap = {
    orange: '#E8956F',
    yellow: '#F4D35E'
  };
  return (
    <span style={{ color: colorMap[color], fontWeight: 'bold' }}>
      {children}
    </span>
  );
};

const Card = ({ children }: { children: ReactNode }) => (
  <div 
    className="card-item"
    style={{
      backgroundColor: '#FFFFFF',
      padding: '8px 12px',
      borderRadius: '12px',
      marginBottom: '16px',
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#2C2C2C',
      border: '2px solid #E8956F',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    }}
  >
    <span style={{ marginRight: '8px', fontSize: '20px' }}>🐾</span>
    {children}
  </div>
);

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2C2C2C', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{styles}</style>
      {/* BANNER */}
      <div style={{ width: '100%', height: 'auto' }}>
        <img
          src="/fatbanner.png"
          alt="Calico Banner"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* HERO */}
      <section style={{ padding: '48px 24px', textAlign: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '42px', fontWeight: 'bold', margin: '0', lineHeight: '1.3', letterSpacing: '-1px' }}>
          <div style={{ color: '#E8956F', marginBottom: '8px' }}>GET DISCOVERED</div>
          <div style={{ color: '#F4D35E' }}>GET CHOSEN</div>
        </h1>
      </section>

      {/* YOU ARE NOT VISIBLE ENOUGH */}
      <section style={{ padding: '48px 24px', backgroundColor: '#2C2C2C' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '36px', textAlign: 'center', color: '#FAFAFA' }}>
          YOU ARE <Highlight color="orange">NOT VISIBLE</Highlight> ENOUGH
        </h2>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Card>
              Clients <Highlight color="orange">can't see</Highlight> your best work.
            </Card>
            <Card>
              Your link-in-bio is just a <Highlight color="orange">messy list</Highlight>.
            </Card>
            <Card>
              You <Highlight color="orange">look like everyone</Highlight> else online.
            </Card>
            <Card>
              "<Highlight color="orange">DM me</Highlight>" is too much work for them.
            </Card>
            <Card>
              The <Highlight color="orange">algorithm</Highlight> decides if you get seen.
            </Card>
            <Card>
              Your best posts <Highlight color="orange">disappear in 2 days</Highlight>.
            </Card>
          </div>
        </div>
      </section>

      {/* MAKE YOURSELF VISIBLE */}
      <section style={{ padding: '48px 24px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '36px', textAlign: 'center', color: '#2C2C2C' }}>
          <Highlight color="orange">MAKE YOURSELF</Highlight> VISIBLE
        </h2>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Card>
              Give them one <Highlight color="orange">clean link</Highlight> to click.
            </Card>
            <Card>
              It loads <Highlight color="orange">fast—under 2 seconds</Highlight>!
            </Card>
            <Card>
              Show your <Highlight color="orange">best content</Highlight> first.
            </Card>
            <Card>
              Let them know your <Highlight color="orange">niche</Highlight> right away.
            </Card>
            <Card>
              Show your <Highlight color="orange">real talent</Highlight> in seconds.
            </Card>
            <Card>
              Brands can <Highlight color="orange">find and hire</Highlight> you faster.
            </Card>
          </div>
        </div>
      </section>

      {/* THIS IS WHAT GETS YOU CHOSEN */}
      <section style={{ padding: '48px 24px', backgroundColor: '#2C2C2C' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', color: '#FAFAFA' }}>
          THIS IS WHAT <Highlight color="yellow">GETS YOU CHOSEN</Highlight>
        </h2>
        <div style={{ maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '450px', aspectRatio: '828 / 1534' }}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dbcghcpes&public_id=Portfolio_preview_rhcsd2&autoplay=true&loop=true&muted=true&controls=false"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '16px', display: 'block', pointerEvents: 'none' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              title="Portfolio Preview"
            />
          </div>
        </div>
      </section>

      {/* WHY THIS GETS YOU CHOSEN */}
      <section style={{ padding: '48px 24px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#2C2C2C' }}>
          WHY THIS <Highlight color="orange">GETS YOU</Highlight> CHOSEN
        </h2>
        
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why1.jpg" alt="Creator portfolio website example - showcase niche instantly" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why2.jpg" alt="Professional portfolio for content creators with organized links" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why3.jpg" alt="Influencer portfolio website design - get discovered online" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why4.jpg" alt="Creator portfolio template - convert followers to clients" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why5.jpg" alt="Portfolio website for freelancers and digital creators" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why6.jpg" alt="Best portfolio website builder for content creators and influencers" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
