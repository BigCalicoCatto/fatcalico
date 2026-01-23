import React from 'react';

export default function PortfolioPitch() {
  const calico = "#E0C097";
  const darkText = "#2D2D2D";
  const lightBg = "#FAF9F6"; // Off-white/Alabaster for a luxury feel

  return (
    <main style={{ 
      fontFamily: 'system-ui, sans-serif', 
      backgroundColor: lightBg, 
      color: darkText, 
      padding: '40px 20px',
      lineHeight: '1.6'
    }}>
      
      {/* 2. HERO SECTION */}
      <section style={{ textAlign: 'center', marginBottom: '80px', paddingTop: '40px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '800', 
          letterSpacing: '-1px', 
          margin: '0',
          textTransform: 'uppercase'
        }}>
          GET <span style={{ color: calico }}>DISCOVERED</span>.<br />
          GET <span style={{ color: calico }}>PICKED</span>.
        </h1>
        <p style={{ fontSize: '20px', marginTop: '20px', opacity: 0.8 }}>
          Being ‘just another content creator’ does not get you picked.
        </p>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section style={{ 
        backgroundColor: '#fff', 
        padding: '40px', 
        borderRadius: '24px', 
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ fontSize: '14px', color: calico, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
          Section: You are not visible enough
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px' }}>
          {[
            "It’s too hard for clients to find your best work.",
            "Your link-in-bio is just a messy list of buttons.",
            "You are just another creator profile on their feed.",
            "‘DM for inquiries’ is one step too many for them.",
            "The algorithm decides if you get seen or not.",
            "Your best work 'disappears' after 48 hours."
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#FF6B6B', marginRight: '10px' }}>✕</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section style={{ 
        backgroundColor: darkText, 
        color: '#fff', 
        padding: '40px', 
        borderRadius: '24px', 
        marginBottom: '60px'
      }}>
        <h2 style={{ fontSize: '14px', color: calico, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
          Section: Make yourself visible
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px' }}>
          {[
            "Let them click on your professional link.",
            "Everything loads in 2 seconds.",
            "Show them your best work first.",
            "Show your niches instantly.",
            "Showcase your true talent in an instant.",
            "Get screened and hired for campaigns fast.",
            "Your portfolio is always ready on your profile."
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: calico, marginRight: '10px' }}>✓</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* THE SHILL / IMAGE SECTION */}
      <section style={{ textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>This is the result:</p>
        
        {/* IMAGE PLACEHOLDER - Replace with your actual image component */}
        <div style={{ 
          border: `4px solid ${calico}`, 
          borderRadius: '30px', 
          overflow: 'hidden',
          maxWidth: '400px',
          margin: '0 auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <img 
            src="/your-annotated-image.png" 
            alt="Website Breakdown" 
            style={{ width: '100%', display: 'block' }} 
          />
        </div>

        <button style={{
          marginTop: '60px',
          backgroundColor: calico,
          color: '#fff',
          padding: '20px 40px',
          borderRadius: '50px',
          fontSize: '20px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          boxShadow: `0 10px 20px rgba(224, 192, 151, 0.4)`
        }}>
          WHATSAPP ME TO START
        </button>
      </section>

    </main>
  );
}
