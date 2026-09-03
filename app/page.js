import Link from 'next/link';
import Image from 'next/image';
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
            <h1>Digital skills and AI literacy for Africa&apos;s next generation</h1>
            <p className="lede">TIYE is a nonprofit empowering young people across Africa with practical digital skills, artificial intelligence literacy, and responsible use of AI for free.<br />Every young person deserves the digital skills and real opportunity to build a future in the industries reshaping the world.</p>
            <div className="hero-actions">
              <Link href="/programmes" className="btn btn-primary">Explore our programmes</Link>
              <a href="#involved" className="btn btn-outline">See How to Get Involved</a>
          </div>
            <div className="mini-stat-row" style={{ JustifyContent: 'center' }}>
              <div className="mini-stat"><div className="ms-num">5,856+</div><div className="ms-label">Young people reached</div></div>
              <div className="mini-stat"><div className="ms-num">40+</div><div className="ms-label">Communities served</div></div>
              <div className="mini-stat"><div className="ms-num">5,000+</div><div className="ms-label">Ogun Digital Summit attendees</div></div>
            </div>
          </div>

          <div className="hero-collage">
            <div className="pixel-accent"><PixelGrid /></div>
            <Image className="hc-main" width={700} height={520} priority sizes="(max-width: 960px) 50vw, 40vw" src="/img/3pillars1.jpg" alt="A TIYE learner" />
        <Image className="hc-sub" width={500} height={380} priority sizes="(max-width: 960px) 50vw, 30vw" src="/img/3pillars2.jpg" alt="Students in a TIYE classroom session" />
          <Image className="hc-sub2" width={500} height={380} priority sizes="(max-width: 960px) 50vw, 30vw" src="/img/3pillars3.PNG" alt="A TIYE hands-on workshop" />
            <div className="hc-badge"><b>3 Pillars</b>Digital Skills · AI Literacy · Responsible AI</div>
          </div>
        </div>
      <div className="hero-strip" aria-label="TIYE focus areas">
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
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" id="about">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>About TIYE</span>
            <h2 style={{ margin: '16px 0 24px' }}>Bridging technology and underserved communities.</h2>
            <p>Technology Initiative for Youth Empowerment (TIYE) is a non-profit organisation dedicated to empowering young people across Africa through digital skills, artificial intelligence education, and responsible AI.</p>
            <p>We believe every young person should have access to the knowledge and opportunities needed to thrive in the digital economy through education, advocacy, community engagement, and strategic partnerships.</p>
            <Link href="/about" className="btn btn-dark-outline" style={{ marginTop: '8px' }}>Meet the team &amp; our story →</Link>
          </div>
          <div className="about-photo-wrap">
            <div className="img-ph">
            {/* <Image src="/img/Bridging.jpg" alt="TIYE connecting young people with technology" width={100} height={100}/> */}
            <img src="/img/Bridging.jpg" alt="TIYE connecting young people with technology"/>
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
            <span className="eyebrow" style={{ color: 'var(--green)' }}>What We Do</span>
            <h2 style={{ marginTop: '16px' }}>Three ways we&apos;re building Africa&apos;s digital future.</h2>
            <p>Technology is changing every industry, but access to it isn&apos;t equal. TIYE closes that gap through three connected pillars: practical digital skills, AI literacy, and responsible AI adoption.
              <br />Together, we give young people the tools to participate in the digital economy and the judgment to use technology safely and ethically.
            </p>
          </div>
          <div className="pillar-photo-grid">
            <div className="pillar-photo-card">
              <div className="img-ph pp-photo">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/3ways1.jpg" alt="Digital skills training in a TIYE community" />
              </div>
              <div className="pp-body">
                <span className="pp-tag" style={{ background: 'var(--blue)' }}>01 — Digital Skills</span>
                <h3>Practical skills for the digital economy</h3>
                <p>We equip young Africans with practical technology and digital skills that prepare them for employment, entrepreneurship, and lifelong success.</p>
                <Link href="/programmes/digitalskill4all" className="link">See DigitalSkill4All →</Link>
              </div>
            </div>
            <div className="pillar-photo-card">
              <div className="img-ph pp-photo">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/3ways2.jpg" alt="AI literacy learning session" />
              </div>
              <div className="pp-body">
                <span className="pp-tag" style={{ background: 'var(--green)' }}>02 — AI Literacy</span>
                <h3>Making AI understandable for everyone</h3>
                <p>We simplify AI and make it accessible through education, awareness programmes, workshops, and school outreach.</p>
                <Link href="/programmes/ai4all" className="link">See AI4All →</Link>
              </div>
            </div>
            <div className="pillar-photo-card">
              <div className="img-ph pp-photo">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/3ways3.JPG" alt="Responsible AI community session" />
                {/* <img src="/img/3ways3.JPG" alt="Responsible AI community session" /> */}
              </div>
              <div className="pp-body">
                <span className="pp-tag" style={{ background: 'var(--orange)' }}>03 — AI Safety</span>
                <h3>AI that is safe, ethical, and trusted</h3>
                <p>We work with communities, educators, organisations, governments and policymakers to promote responsible AI practices.</p>
                <Link href="/programmes/ogun-digital-summit" className="link">See the Summit →</Link>
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
              <Image fill sizes="100vw" src="/img/Real programme.jpg" alt="TIYE programme participants" />
            </div>
            <div className="overlay-content">
              <span className="eyebrow" style={{ color: 'var(--white)' }}>Our Programmes</span>
              <h2 style={{ marginTop: '12px' }}>Real programmes for real communities.</h2>
              <p style={{ color: 'var(--white)' }}>Our three programmes turn our mission into action, either in classrooms, communities, or on stage.</p>
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
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/Digital literacy.jpg" alt="DigitalSkill4All training session" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>DigitalSkill4All</h3>
                <p>Free technology and digital skills training for underserved communities across Africa, including a dedicated track supporting young people living with sickle cell disease.</p>
                <Link href="/programmes/digitalskill4all" className="link">View programme →</Link>
              </div>
            </div>
            <div className="prog-card c2">
              <div className="img-ph ratio-4x3">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/ai4allPreview.JPG" alt="AI4All classroom session" />
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
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/odsPreview.JPG" alt="Ogun Digital Summit event" />
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
          <h2>Thousands of young people. One digital future.</h2>
          <p>Across Africa, our programmes are turning digital skills and AI literacy into real opportunity for young people across . See the numbers, and the stories, behind the work.</p>
          <div className="mini-stat-row" style={{ justifyContent: 'center' }}>
            <div className="mini-stat"><div className="ms-num">5,856+</div><div className="ms-label">Young people reached</div></div>
            <div className="mini-stat"><div className="ms-num">40+</div><div className="ms-label">Communities served</div></div>
            <div className="mini-stat"><div className="ms-num">5,000+</div><div className="ms-label">Ogun Digital Summit attendees</div></div>
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
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/ogunGov.svg" alt="Ogun state government logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/parner1.svg" alt="ODS logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Patner3.png" alt="Partner 3 logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/patner4.png" alt="Ogun state bureau of ict logo" /></div>
              <div className="logo-slot"><Image width={181} height={101} sizes="181px" src="https://3mtt.nitda.gov.ng/wp-content/uploads/2023/10/Group-5-181x101.png" alt="3MTT logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Afexcard1.png" alt="AFEX logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Grazacblue.png" alt="Grazac logo" /></div>
              {/* <div className="logo-slot"><img src="/img/smallogundaily.png" alt="Small Ogun Daily logo" /></div> */}
              {/* <div className="logo-slot"><img src="/img/smalltech.png" alt="small tech logo" /></div> */}
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/ogunGov.svg" alt="Ogun state government logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/parner1.svg" alt="ODS logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Patner3.png" alt="Partner 3 logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/patner4.png" alt="Ogun state bureau of ict logo" /></div>
              <div className="logo-slot"><Image width={181} height={101} sizes="181px" src="https://3mtt.nitda.gov.ng/wp-content/uploads/2023/10/Group-5-181x101.png" alt="3MTT logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Afexcard1.png" alt="AFEX logo" /></div>
              <div className="logo-slot"><Image width={180} height={100} sizes="180px" src="/img/Grazacblue.png" alt="Grazac logo" /></div>
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
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Moments</span>
            <h3 style={{ marginTop: '10px' }}>The people, places, and progress behind our work.</h3>
          </div>
          <div className="moments-strip">
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments1.jpg" alt="TIYE community moment" /></div>
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments2.jpg" alt="TIYE learning moment" /></div>
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments3.jpg" alt="TIYE programme moment" /></div>
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments4.jpg" alt="TIYE workshop moment" /></div>
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments5.jpg" alt="TIYE participant moment" /></div>
            <div className="img-ph"><Image fill sizes="(max-width: 640px) 50vw, 17vw" src="/img/moments6.jpg" alt="TIYE community gathering" /></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
