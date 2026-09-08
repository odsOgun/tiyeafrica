import Link from 'next/link';
import Footer from './components/Footer';
import PixelGrid from './components/PixelGrid';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div>
            <span className="eyebrow hero-eyebrow">Digital Skills · AI Literacy · Responsible AI</span>
            <h1>Building pathways into Africa's digital economy</h1>
            <p className="lede">Every young person deserves the digital skills and real opportunity to build a future in the industries reshaping the world.</p>
            <div className="hero-actions">
              <Link href="/programmes" className="btn btn-primary">Explore Our Programmes</Link>
              <a href="#involved" className="btn btn-outline">Get Involved</a>
          </div>
            <div className="mini-stat-row" style={{ JustifyContent: 'center' }}>
              <div className="mini-stat"><div className="ms-num">23,856+</div><div className="ms-label">Young people reached</div></div>
              <div className="mini-stat"><div className="ms-num">40+</div><div className="ms-label">Communities served</div></div>
              <div className="mini-stat"><div className="ms-num">7,865+</div><div className="ms-label">Summit attendees</div></div>
            </div>
          </div>

          <div className="hero-collage">
            <div className="pixel-accent"><PixelGrid /></div>
              <img className="hc-main" src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780650/one.jpg" alt="A TIYE learner" />
              <img className="hc-sub" src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782123/two.jpg" alt="Students in a TIYE classroom session" />
              <img className="hc-sub2" src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780665/three.jpg" alt="A TIYE hands-on workshop" />
            <div className="hc-badge"><b>3 Pillars</b>Digital Skills · AI Literacy · Responsible AI</div>
          </div>
        </div>
      {/* <div className="hero-strip" aria-label="TIYE focus areas">
          <div className="hero-strip-window">
            <div className="hero-strip-track">
              <div className="hero-strip-group">
                <span><strong>Digital Skills</strong> — literacy to livelihoods</span>
                <span><strong>AI Literacy</strong> — for schools &amp; communities</span>
                <span><strong>Responsible AI</strong> — safety, ethics, governance</span>
              </div>
              <div className="hero-strip-group" aria-hidden="true">
                <span><strong>Digital Skills</strong> — literacy to livelihoods</span>
                <span><strong>AI Literacy</strong> — for schools &amp; communities</span>
                <span><strong>Responsible AI</strong> — safety, ethics, governance</span>
              </div>
            </div>
        </div>
        </div> */}
      </section>

      {/* ABOUT TEASER */}
      <section className="section" id="about">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>About TIYE</span>
          <h2 style={{ margin: '16px 0 24px' }}>Bridging technology and underserved communities.</h2>
            <p>TIYE is a nonprofit organization dedicated to empowering young and underserved populations with technology and digital creative knowledge and skills, adoption and responsible use of AI, and connecting them to work and opportunities in the digital economy.</p>
            <p>We believe every young person should have access to the knowledge and opportunities needed to thrive in the digital economy, and as artificial intelligence continues to transform industries, we ensure that underserved communities are not left behind through education. Advocacy, community engagement, strategic partnership.</p>
            <Link href="/about" className="btn btn-dark-outline" style={{ marginTop: '8px' }}>Meet the team &amp; our story →</Link>
          </div>
          <div className="about-photo-wrap">
            <div className="img-ph">
            <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782127/Bridging.jpg" alt="TIYE connecting young people with technology"/>
            </div>
            <div className="about-overlap-card">
              <div className="vm-row">
                <div className="vm-item">
                  <span className="eyebrow">Our Vision</span>
                  <h4 style={{ fontSize: '0.98rem', marginTop: '6px' }}>An Africa where every young person can thrive in a digital world</h4>
                </div>
                <hr className="soft" />
                <div className="vm-item">
                  <span className="eyebrow">Our Mission</span>
                  <h4 style={{ fontSize: '0.98rem', marginTop: '6px' }}>Empowering youth through digital skills, AI literacy &amp; responsible AI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS — photo cards */}
      <section className="section bg-navy" id="pillars">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Moments that matter</span>
            <h2 style={{ marginTop: '16px' }}>Events that capture the people, places, and progress behind our work.</h2>
          </div>
          <div className="pillar-photo-gallery" aria-label="TIYE community moments">
            <div className="pillar-photo-track">
              <div className="pillar-photo-group">
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782124/3ways1.jpg" alt="Digital skills training in a TIYE community" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780648/3ways2.jpg" alt="AI literacy learning session" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782152/threeways.jpg" alt="Responsible AI community session" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780793/momentOne.jpg" alt="TIYE community moment" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782210/momentsTwo.jpg" alt="TIYE learning moment" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780789/momentsThree.jpg" alt="TIYE programme moment" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782142/momentsFour.jpg" alt="TIYE workshop moment" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782151/momentsFive.jpg" alt="TIYE participant moment" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782205/momentsSix.jpg" alt="TIYE community gathering" />
              </div>
              <div className="pillar-photo-group" aria-hidden="true">
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782124/3ways1.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780648/3ways2.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782152/threeways.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780793/momentOne.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782210/momentsTwo.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788780789/momentsThree.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782142/momentsFour.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782151/momentsFive.jpg" alt="" />
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782205/momentsSix.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED BANNER DIVIDER */}
      <section className="section-tight">
        <div className="wrap">
          <div className="photo-overlay-block">
            <div className="img-ph on-dark">
              <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782150/Real_programme.jpg" alt="TIYE programme participants" />
            </div>
            <div className="overlay-content">
              <span className="eyebrow" style={{ color: 'var(--white)' }}>Our Programmes</span>
              {/* <h2 style={{ marginTop: '12px' }}>Real programmes for real communities.</h2> */}
              <p style={{ color: 'var(--white)' }}>Our programs equip young people with AI-native digital skills, close opportunity gaps, and create pathways to economic inclusion across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES TEASER */}
      <section className="section" id="programmes" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="prog-grid">
            <div className="prog-card c1">
              <div className="img-ph ratio-4x3">
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782138/Digital_literacy.jpg" alt="DigitalSkill4All training session" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>DigitalSkill4All</h3>
                <p>We empower individuals with the digital and technology skills they need to thrive in tomorrow's economy, including a dedicated track to support young people living with sickle cell disease.</p>
                <Link href="/programmes/digitalskill4all" className="link">View programme →</Link>
              </div>
            </div>
            <div className="prog-card c2">
              <div className="img-ph ratio-4x3">
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782212/ai4allPreview.jpg" alt="AI4All classroom session" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#10B981" strokeWidth="2" /><path d="M12 8v4l3 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>AI4All</h3>
                <p>AI education for secondary schools, tertiary institutions, and local communities, teaching not just how to use AI, but how to use it responsibly.</p>
                <Link href="/programmes/ai4all" className="link">View programme →</Link>
              </div>
            </div>
            <div className="prog-card c3">
              <div className="img-ph ratio-4x3">
                <img src="https://res.cloudinary.com/amb0f0i2/image/upload/v1788782153/odsPreview.jpg" alt="Ogun Digital Summit event" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 6.9L21 12l-6.5 2.1L12 21l-2.5-6.9L3 12l6.5-2.1L12 3z" stroke="#F97316" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
                <h3>OgunDigitalSummit</h3>
                <p>Our flagship annual technology conference, bringing together students, entrepreneurs, investors, and policymakers to shape Africa&apos;s digital economy.</p>
                <Link href="https://www.ogundigitalsummit.com/" className="link" target="_blank" rel="noopener noreferrer">View programme →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT TEASER */}
      <section className="section impact" id="impact">
        <div className="wrap">
          <span className="eyebrow">Our Impact</span>
          {/* <h2>Thousands of young people. One digital future.</h2> */}
          <p>Our programmes transform lives by turning digital skills and AI literacy into real opportunities for young people. See the numbers and the stories behind the work.</p>
          <div className="mini-stat-row" style={{ justifyContent: 'center' }}>
            <div className="mini-stat"><div className="ms-num">23,856+</div><div className="ms-label">Young people reached</div></div>
            <div className="mini-stat"><div className="ms-num">40+</div><div className="ms-label">Communities served</div></div>
            <div className="mini-stat"><div className="ms-num">7,865+</div><div className="ms-label">Ogun Digital Summit attendees</div></div>
          </div>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <Link href="/impact#report" className="btn btn-outline">Download impact report</Link>
          </div>
          {/* <div className="impact-dots"><span></span><span></span><span></span><span></span><span></span></div> */}
        </div>
      </section>

      {/* STORY / VIDEO SPOTLIGHT */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Voices From The Community</span>
            <h2 style={{ marginTop: '16px' }}>Real people, real change.</h2>
          </div>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '18px', background: '#000' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
              src="https://www.youtube.com/embed/E5Y0KjFYG2Q?si=gVQgAujSe5ZlmUQA&controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PARTNERS / TRUST STRIP */}
      <section className="section-tight" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Partners</span>
            <h2 style={{ marginTop: '16px' }}>Building this together.</h2>
          </div>
          <div className="logo-marquee" aria-label="Partner logos carousel">
            <div className="logo-marquee-track">
              <div className="logo-slot"><img src="/img/ogunGov.svg" alt="Ogun state government logo" /></div>
              <div className="logo-slot"><img src="/img/parner1.svg" alt="ODS logo" /></div>
              <div className="logo-slot"><img src="/img/Patner3.png" alt="Partner 3 logo" /></div>
              <div className="logo-slot"><img src="/img/patner4.png" alt="Ogun state bureau of ict logo" /></div>
              <div className="logo-slot"><img src="https://3mtt.nitda.gov.ng/wp-content/uploads/2023/10/Group-5-181x101.png" alt="3MTT logo" /></div>
              <div className="logo-slot"><img src="/img/Afexcard1.png" alt="AFEX logo" /></div>
              <div className="logo-slot"><img src="/img/Grazacblue.png" alt="Grazac logo" /></div>
              {/* <div className="logo-slot"><img src="/img/smallogundaily.png" alt="Small Ogun Daily logo" /></div> */}
              {/* <div className="logo-slot"><img src="/img/smalltech.png" alt="small tech logo" /></div> */}
              <div className="logo-slot"><img src="/img/ogunGov.svg" alt="Ogun state government logo" /></div>
              <div className="logo-slot"><img src="/img/parner1.svg" alt="ODS logo" /></div>
              <div className="logo-slot"><img src="/img/Patner3.png" alt="Partner 3 logo" /></div>
              <div className="logo-slot"><img src="/img/patner4.png" alt="Ogun state bureau of ict logo" /></div>
              <div className="logo-slot"><img src="https://3mtt.nitda.gov.ng/wp-content/uploads/2023/10/Group-5-181x101.png" alt="3MTT logo" /></div>
              <div className="logo-slot"><img src="/img/Afexcard1.png" alt="AFEX logo" /></div>
              <div className="logo-slot"><img src="/img/Grazacblue.png" alt="Grazac logo" /></div>
              {/* <div className="logo-slot"><img src="/img/smallogundaily.png" alt="Small Ogun Daily logo" /></div> */}
              {/* <div className="logo-slot"><img src="/img/smalltech.png" alt="small tech logo" /></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section" id="involved">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Get Involved</span>
            <h2 style={{ marginTop: '16px' }}>There&apos;s a place for you at TIYE.</h2>
            <p>Whether you give time, expertise, resources, or an invitation, every contribution moves the mission forward.</p>
          </div>
          <div className="involve-grid">
            <div className="involve-card">
              <div className="dot"></div>
              <h4>Volunteer</h4>
              <p>Join our community of volunteers and help deliver impactful programmes across Africa.</p>
              <a href="/contact" className="link">Volunteer with us →</a>
            </div>
            <div className="involve-card">
              <div className="dot"></div>
              <h4>Partner With Us</h4>
              <p>Collaborate with us to expand digital skills and responsible AI education.</p>
              <a href="/contact" className="link">Start a partnership →</a>
            </div>
            <div className="involve-card">
              <div className="dot"></div>
              <h4>Sponsor Our Programmes</h4>
              <p>Support initiatives that create opportunities for underserved communities and prepare young people for the future.</p>
              <a href="/contact" className="link">Become a sponsor →</a>
            </div>
            <div className="involve-card">
              <div className="dot"></div>
              <h4>Invite Us</h4>
              <p>Invite TIYE to deliver AI literacy, digital skills training, or a keynote at your school or organisation.</p>
              <a href="/contact" className="link">Send an invite →</a>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE — photo CTA band */}
      <section className="section-tight" id="donate">
        <div className="wrap">
          <div className="cta-photo-band">
            <div className="img-ph on-dark">
              <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /></svg>
              <span>Wide community photo</span>
            </div>
            <div className="cta-content">
              <div>
                <h2>Your gift builds Africa&apos;s digital future.</h2>
                <p>Every donation helps TIYE reach more young people with digital skills, AI literacy, and the tools to thrive responsibly in a digital world.</p>
              </div>
              <a href="#contact" className="btn btn-white">Donate now</a>
            </div>
          </div>
        </div>
      </section>

      {/* MOMENTS GALLERY STRIP */}
      {/* <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Moments</span>
            <h3 style={{ marginTop: '10px' }}>The people, places, and progress behind our work.</h3>
          </div>
          <div className="moments-strip">
            <div className="img-ph"><img src="/img/momentOne.jpg" alt="TIYE community moment" /></div>
            <div className="img-ph"><img src="/img/momentsTwo.JPG" alt="TIYE learning moment" /></div>
            <div className="img-ph"><img src="/img/momentsThree.jpg" alt="TIYE programme moment" /></div>
            <div className="img-ph"><img src="/img/momentsFour.JPG" alt="TIYE workshop moment" /></div>
            <div className="img-ph"><img src="/img/momentsFive.JPG" alt="TIYE participant moment" /></div>
            <div className="img-ph"><img src="/img/momentsSix.JPG" alt="TIYE community gathering" /></div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
