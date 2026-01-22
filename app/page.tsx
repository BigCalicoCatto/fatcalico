'use client';

import React from 'react';

const colors = {
  brown: '#8B6F47',
  orange: '#D4844E',
  cream: '#F5E6D3',
  desertPink: '#E8B4C8',
  softPink: '#F4D9E5',
  darkText: '#2C2416',
  white: '#FFFFFF',
  instagramPink: '#E4405F',
  tiktokBlack: '#000000',
  youtubeRed: '#FF0000',
  whatsappGreen: '#25D366',
};

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <circle cx="17.5" cy="6.5" r="1.5"></circle>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.7a2.4 2.4 0 1 1-2.4-2.4c.4 0 .8.1 1.1.3V7.3a6.04 6.04 0 0 0-1.1-.1A6 6 0 1 0 17 13.6V9.62a7.82 7.82 0 0 0 2.59 1.07V6.69Z"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a5.5 5.5 0 1 0 5.504 5.5 5.467 5.467 0 0 0-5.5-5.5" transform="scale(1.2)"></path>
  </svg>
);

export default function FatCalicoPortfolio() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0 }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }
      `}</style>

      {/* Banner */}
      <div style={{ width: '100%', height: '200px', backgroundImage: 'url(https://i.imgur.com/NbKjb5g.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Hero Section */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.imgur.com/XRbDzZH.png" alt="Fat Calico" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: colors.darkText, margin: '0 0 8px 0' }}>Fat Calico</h1>
              <p style={{ fontSize: '16px', color: colors.orange, marginBottom: '14px', fontWeight: '600' }}>Travel and Foodie Meowger</p>
              <p style={{ fontSize: '14px', color: colors.darkText, lineHeight: '1.6', marginBottom: '18px' }}>Not your average catfluencer 🐾 I review mamak stalls 🍜, chase sunsets 🌅, and nap in boutique hotels 💤. Travel light ✈️ Eat everything 🍛 Judge nothing (except bad teh tarik ☕️).</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://instagram.com/fatcalico" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', backgroundColor: colors.instagramPink, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <InstagramIcon /> Instagram
                </a>
                <a href="https://tiktok.com/@fatcalico" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', backgroundColor: colors.tiktokBlack, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <TikTokIcon /> TikTok
                </a>
                <a href="https://youtube.com/@fatcalico" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', backgroundColor: colors.youtubeRed, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <YouTubeIcon /> YouTube
                </a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button style={{ width: '100%', padding: '12px 16px', backgroundColor: colors.orange, color: colors.white, border: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>10% with FatCalico code on HungryCatto Cafe</button>
                <button style={{ width: '100%', padding: '12px 16px', backgroundColor: colors.desertPink, color: colors.darkText, border: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>RM20 voucher for TravelNeko</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Favourite Work */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.darkText, marginBottom: '18px', textAlign: 'center' }}>My Favourite Work</h2>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', WebkitOverflowScrolling: 'touch' }}>
            {['https://i.imgur.com/r9I72OQ.png', 'https://i.imgur.com/AnmSPH2.png', 'https://i.imgur.com/HZ29Qxb.png'].map((img, idx) => (
              <div key={idx} style={{ flexShrink: 0, width: '160px', aspectRatio: '4/5', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img src={img} alt={`Work ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foodie Vlog */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.darkText, marginBottom: '18px', textAlign: 'center' }}>Foodie Vlog!</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '12px', gridAutoRows: 'minmax(0, 1fr)' }}>
            <div style={{ aspectRatio: '4/5', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/r9I72OQ.png" alt="Foodie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ gridColumn: '2', gridRow: '1 / 3', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/JkV2l6n.png" alt="Foodie Large" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '4/5', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/HZ29Qxb.png" alt="Foodie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Travel Lens */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.darkText, marginBottom: '18px', textAlign: 'center' }}>Travel Lens!</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '12px', gridAutoRows: 'minmax(0, 1fr)' }}>
            <div style={{ aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/AnmSPH2.png" alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ gridColumn: '2', gridRow: '1 / 3', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/nOoMeIX.png" alt="Travel Large" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="https://i.imgur.com/HYIzRpY.png" alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Work With Me */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.softPink }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.darkText, marginBottom: '18px', textAlign: 'center' }}>Work With Me</h2>
          <div>
            {[
              { rate: 'RM 150', service: '1 IG Reels (+/- TikTok post) + 1 IG Story', desc: 'Draft submission and revision' },
              { rate: 'RM 250', service: '1 IG Reels + 1 IG Post + 1 IG Story', desc: 'Draft submission and revision' },
              { rate: 'Gifted Review', service: 'No draft, honest review', desc: '' },
              { rate: 'Live Host', service: 'Rate from RM80/hour', desc: '+ sales commission' },
              { rate: 'Event Appearance', service: 'Free', desc: '' },
              { rate: 'Private Coaching', service: 'From RM90/class', desc: '' },
              { rate: 'Small Group Coaching', service: 'RM30/class', desc: '' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '14px 0', borderBottom: idx < 6 ? `1px solid ${colors.desertPink}` : 'none' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: colors.darkText, margin: '0 0 6px 0' }}>{item.rate}</p>
                <p style={{ fontSize: '13px', fontWeight: '600', color: colors.darkText, margin: '0 0 3px 0' }}>{item.service}</p>
                {item.desc && <p style={{ fontSize: '12px', color: colors.darkText, opacity: 0.7, margin: 0 }}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Clients Say */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.darkText, marginBottom: '18px', textAlign: 'center' }}>What Clients Say</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { name: 'Sarah Tan', position: 'Marketing Manager at Mamak Express', quote: 'We didn\'t even know one of our menu items was actually the star of our restaurant until Fat Calico posted it online! Sales went up 40%.' },
              { name: 'James Lee', position: 'Travel Agency Director at WanderAsia Co.', quote: 'Fat Calico\'s authentic travel content brought our boutique hotel to life. Guests specifically asked to stay in the rooms featured in the posts!' },
              { name: 'Maya Krishnan', position: 'Brand Head at TravelNeko Tours', quote: 'Partnering with Fat Calico was the best decision. The engagement rate was insane and the audience felt genuine and loyal.' },
            ].map((review, idx) => (
              <div key={idx} style={{ backgroundColor: colors.white, padding: '14px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '13px', color: colors.orange, marginBottom: '8px', margin: '0 0 8px 0' }}>⭐⭐⭐⭐⭐</p>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: colors.darkText, lineHeight: '1.5', marginBottom: '10px', margin: '0 0 10px 0' }}>"{review.quote}"</p>
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: colors.orange, margin: '0 0 2px 0' }}>{review.name}</p>
                <p style={{ fontSize: '11px', color: colors.darkText, opacity: 0.6, margin: 0 }}>{review.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ width: '100%', padding: '24px 16px', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.darkText, marginBottom: '14px', lineHeight: '1.3' }}>Come and say hi to your warmest Calico and see what we can achieve together</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                <a href="mailto:fatcalico@example.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 16px', backgroundColor: colors.orange, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <MailIcon /> Email
                </a>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 16px', backgroundColor: colors.whatsappGreen, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href="https://instagram.com/fatcalico" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 16px', backgroundColor: colors.instagramPink, color: colors.white, textDecoration: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600' }}>
                  <InstagramIcon /> DM on Instagram
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.imgur.com/XRbDzZH.png" alt="Fat Calico" style={{ width: '180px', height: '180px', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.brown, color: colors.white, padding: '18px 16px', textAlign: 'center', fontSize: '12px' }}>
        © 2025 Fat Calico engineered by FatCalicoBoy
      </footer>
    </div>
  );
}
