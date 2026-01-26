import { ReactNode } from 'react';

const Highlight = ({ children, color = 'orange' }: { children: ReactNode; color?: 'orange' | 'yellow' }) => {
  const colorMap: Record<string, string> = {
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
  <div style={{
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
  }}>
    <span style={{ marginRight: '8px', fontSize: '20px' }}>🐾</span>
    {children}
  </div>
);

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2C2C2C', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* BANNER */}
      <div style={{ width: '100%', height: 'auto' }}>
        <img
          src="/fatbanner.png"
          alt="Fat Calico - Build Your Creator Portfolio Website"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* HERO */}
      <section style={{ padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0', lineHeight: '1.3', letterSpacing: '-1px' }}>
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
            <Card>Clients <Highlight color="orange">can't see</Highlight> your best work.</Card>
            <Card>Your link-in-bio is just a <Highlight color="orange">messy list</Highlight>.</Card>
            <Card>You <Highlight color="orange">look like everyone</Highlight> else online.</Card>
            <Card>"<Highlight color="orange">DM me</Highlight>" is too much work for them.</Card>
            <Card>The <Highlight color="orange">algorithm</Highlight> decides if you get seen.</Card>
            <Card>Your best posts <Highlight color="orange">disappear in 2 days</Highlight>.</Card>
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
            <Card>Give them one <Highlight color="orange">clean link</Highlight> to click.</Card>
            <Card>It loads <Highlight color="orange">fast—under 2 seconds</Highlight>!</Card>
            <Card>Show your <Highlight color="orange">best content</Highlight> first.</Card>
            <Card>Let them know your <Highlight color="orange">niche</Highlight> right away.</Card>
            <Card>Show your <Highlight color="orange">real talent</Highlight> in seconds.</Card>
            <Card>Brands can <Highlight color="orange">find and hire</Highlight> you faster.</Card>
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
            <img src="/why1.jpg" alt="Creator portfolio website example" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why2.jpg" alt="Professional portfolio for content creators" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why3.jpg" alt="Influencer portfolio website design" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why4.jpg" alt="Creator portfolio template" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why5.jpg" alt="Portfolio website for freelancers" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img src="/why6.jpg" alt="Best portfolio website builder" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* YOU CAN ADD MORE */}
      <section style={{ padding: '24px 24px', backgroundColor: '#FFFFFF' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#2C2C2C' }}>
          YOU CAN ADD <Highlight color="orange">MORE</Highlight> ACCORDING TO YOUR NEEDS!
        </h2>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Brand Collaborations
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Comp Cards
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Rate Card
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Photoshoot Experiences
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Social Media Metrics
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Social Reviews
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Client Testimonials
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Media Kit Download Button
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Quick Form
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Prefilled WhatsApp Message
            </div>
            <div style={{ gridColumn: '1 / -1', backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Many more — <span style={{ color: '#E8956F', fontWeight: 'bold' }}>everything can be included</span> and is discussable.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: '48px 24px', backgroundColor: '#2C2C2C' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px', color: '#FAFAFA' }}>
          FAT CALICO & CO <Highlight color="yellow">PACKAGES</Highlight>
        </h2>

        <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          {/* RM100 Card */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px 16px', borderRadius: '16px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#E8956F', margin: '0 0 20px 0', textAlign: 'center' }}>
              RM100
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Free domain (yourname.vercel.app)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Free hosting — no hidden fees</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Basic SEO (custom title + description)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Mobile-perfect & fast-loading (under 2 seconds)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Single page scrollable portfolio</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Live in 48 hours after material submission</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Minimum 5 sections (bio, work, rates, reviews, contact — your choice)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Gather & organize your content from your socials</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Social links + affiliate/CTA buttons included</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>One-tap contact button</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Fully customized: colors, fonts, vibe — just for you</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '0px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Up to 3 revisions</span>
              </li>
            </ul>
          </div>

          {/* RM150 Card */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '24px 16px', borderRadius: '16px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#E8956F', margin: '0 0 20px 0', textAlign: 'center' }}>
              RM150
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Your own .com domain (yourname.com)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Free domain setup & connection and hosting</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Basic SEO (custom title + description)</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Mobile-perfect & fast-loading</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Single page scrollable portfolio</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Live in 24 hours after material submission</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Minimum 7 sections</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Gather & organize your content from your socials</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Social links + affiliate/CTA buttons included</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>One-tap contact button</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Fully customized: colors, fonts, vibes</span>
              </li>
              <li style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: '0px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✨</span>
                <span>Up to 4 revisions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '16px' }}>
            READY TO GET <Highlight color="orange">DISCOVERED</Highlight>?
          </h2>
          <p style={{ fontSize: '18px', color: '#2C2C2C', lineHeight: '1.6', margin: '0' }}>
            Stop waiting. Your portfolio is just one message away. <Highlight color="orange">Let's build something amazing together.</Highlight>
          </p>
        </div>

        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/fatcalicodev.jpg"
              alt="Fat Calico"
              style={{ width: '200px', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="mailto:fatcalico.co@gmail.com?subject=Let's build my website!&body=Hi Fat Calico! Let's build my website!"
              style={{
                padding: '16px 24px',
                backgroundColor: '#E8956F',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                display: 'block'
              }}
            >
              📧 Email
            </a>

            <a
              href="https://wa.me/60176218234?text=Hi%20Fat%20Calico!%20Let's%20build%20my%20website!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 24px',
                backgroundColor: '#E8956F',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                display: 'block'
              }}
            >
              💬 WhatsApp
            </a>

            <a
              href="https://instagram.com/fatcalico.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 24px',
                backgroundColor: '#E8956F',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                display: 'block'
              }}
            >
              📷 Instagram DM
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 24px', backgroundColor: '#2C2C2C', textAlign: 'center', borderTop: '1px solid #E8956F' }}>
        <p style={{ fontSize: '14px', color: '#FAFAFA', margin: '0' }}>
          © 2025 FatCalico&Co engineered by FatCalico&Co for FatCalico&Co
        </p>
      </footer>
    </div>
  );
}
