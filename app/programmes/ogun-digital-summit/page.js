import Link from 'next/link';
import Logo from '../../components/Logo';

export const metadata = {
  title: 'Ogun Digital Summit — TIYE',
  description:
    "Ogun Digital Summit is TIYE's flagship annual technology conference — one of the leading digital innovation events in Ogun State, Nigeria.",
};

function Speaker() {
  return (
    <div className="team-card">
      <div className="img-ph ratio-1x1 round"><img src="/img/speaker1.png" alt="Ogun Digital Summit speaker" /></div>
      <h4 style={{ marginTop: '12px' }}>[Speaker name]</h4>
      <span className="team-role" style={{ color: 'var(--orange)' }}>[Title, organisation]</span>
    </div>
  );
}

export default function OgunDigitalSummit() {
  return (
    <>
      {/* HERO */}
      <section className="prog-hero-simple">
        <div className="wrap">
          <Link href="/programmes" className="back-link">← Back to programmes</Link>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Pillar 03 — AI Safety &amp; Responsible Adoption</span>
          <h1>Ogun Digital Summit</h1>
          <p className="lede" style={{ color: 'var(--ink-soft)' }}>TIYE&apos;s flagship annual technology conference — one of the leading digital innovation events in Ogun State, Nigeria.</p>
          <div className="fact-bar">
            <div className="fact-chip fact-chip-light"><b>Date</b>[Add date]</div>
            <div className="fact-chip fact-chip-light"><b>Location</b>Ogun State, Nigeria</div>
            <div className="fact-chip fact-chip-light"><b>Format</b>[In-person / Hybrid]</div>
            <div className="fact-chip fact-chip-light"><b>Ticket</b>[Add price]</div>
          </div>
        </div>
      </section>

      {/* HERO PHOTO */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="img-ph ratio-16x9 hero-photo-lg">
            <img src="/img/ods3.png" alt="Ogun Digital Summit stage crowd" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-tight">
        <div className="wrap narrow">
          <h2>About the summit</h2>
          <p>Ogun Digital Summit convenes students, young professionals, entrepreneurs, technology leaders, government officials, investors, policymakers and industry experts for conversations around technology, innovation, artificial intelligence, entrepreneurship, the digital economy, responsible AI, and youth empowerment.</p>
          <p>Through keynotes, panel sessions, workshops, exhibitions, and networking opportunities, Ogun Digital Summit inspires the next generation of African innovators.</p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>Summit objectives</h2>
          <div className="objectives-list">
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--orange)' }}>1</span>
              <p>To create a shared platform for students, founders, technologists, and policymakers to shape Africa&apos;s digital economy together.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--orange)' }}>2</span>
              <p>To surface real conversations on responsible AI adoption, governance, and digital trust.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--orange)' }}>3</span>
              <p>To connect young innovators and entrepreneurs with investors and industry leaders.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--orange)' }}>4</span>
              <p>To position Ogun State as a leading hub for digital innovation in Nigeria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PHOTO GRID */}
      <section className="section-tight">
        <div className="wrap">
          <div className="two-photo-grid">
            <div className="img-ph ratio-3x4">
              <img src="/img/odsspeaker.png" alt="Ogun Digital Summit keynote stage" />
            </div>
            <div className="img-ph ratio-3x4">
              <img src="/img/ods3.png" alt="Ogun Digital Summit audience" />
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT: AGENDA */}
      <section className="section">
        <div className="wrap spotlight-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>On The Day</span>
            <h2 style={{ marginTop: '16px' }}>Keynotes, panels &amp; networking</h2>
            <p>The day runs from registration and opening remarks through keynote sessions, panels and hands-on workshops, closing with structured networking and exhibitions. [Add exact agenda, timings and speaker line-up once confirmed.]</p>
            <a href="#contact" className="btn btn-blue" style={{ background: 'var(--orange)' }}>Register interest →</a>
          </div>
          <div className="img-ph ratio-4x3">
            <img src="/img/speaker1.png" alt="Ogun Digital Summit panel session" />
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>Speakers</h2>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '24px' }}>Gallery — past editions</h2>
          <div className="masonry-gallery">
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ODS.png" alt="Ogun Digital Summit crowd" /></div>
            <div className="img-ph" style={{ aspectRatio: '3/4' }}><img src="/img/ODS.png" alt="Ogun Digital Summit speaker" /></div>
            <div className="img-ph" style={{ aspectRatio: '1/1' }}><img src="/img/ODS.png" alt="Ogun Digital Summit exhibition" /></div>
            <div className="img-ph" style={{ aspectRatio: '3/4' }}><img src="/img/ODS.png" alt="Ogun Digital Summit networking" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ODS.png" alt="Ogun Digital Summit panel discussion" /></div>
            <div className="img-ph" style={{ aspectRatio: '1/1' }}><img src="/img/ODS.png" alt="Ogun Digital Summit closing session" /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight donate" id="donate-ogun">
        <div className="wrap donate-inner">
          <div>
            <h2>Join us at the next Ogun Digital Summit.</h2>
            <p>Register your interest as an attendee, speaker, or sponsor.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Register interest</a>
        </div>
      </section>

      {/* KEEP EXPLORING */}
      <section className="section-tight bg-navy">
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>Keep Exploring</span>
          <h3 style={{ color: 'var(--white)', margin: '10px 0 22px' }}>Other TIYE programmes</h3>
          <div className="fact-bar">
            <Link href="/programmes/digitalskill4all" className="fact-chip" style={{ minWidth: '220px' }}><b>Pillar 01</b>DigitalSkill4All →</Link>
            <Link href="/programmes/ai4all" className="fact-chip" style={{ minWidth: '220px' }}><b>Pillar 02</b>AI4All →</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <Logo />
                TIYE
              </Link>
              <p>Empowering youth through technology — digital skills, AI literacy, and responsible AI adoption across Africa.</p>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><Link href="/about">About TIYE</Link></li>
                <li><Link href="/team">Meet the Team</Link></li>
                <li><Link href="/programmes">Our Programmes</Link></li>
                <li><Link href="/impact">Our Impact</Link></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get Involved</h5>
              <ul>
                <li><Link href="/#involved">Volunteer</Link></li>
                <li><Link href="/#involved">Partner With Us</Link></li>
                <li><Link href="/#donate">Donate</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:hello@tiye.org">hello@tiye.org</a></li>
                <li><a href="#">Ogun State, Nigeria</a></li>
                <li><a href="#">LinkedIn / Instagram / X</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Technology Initiative for Youth Empowerment (TIYE). All rights reserved.</span>
            <span>Digital Skills · AI Literacy · Responsible AI</span>
          </div>
        </div>
      </footer>
    </>
  );
}
