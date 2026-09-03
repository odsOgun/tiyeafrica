import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us — TIYE',
  description:
    'TIYE is a non-profit organisation empowering young people across Africa through digital skills, AI literacy, and responsible AI adoption.',
};

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          {/* <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></div> */}
          <span className="eyebrow" style={{ color: 'var(--green)' }}>Who We Are</span>
          <h1 style={{ marginTop: '16px', maxWidth: '18ch' }}>Empowering Africa&apos;s digital generation.</h1>
          <p className="lede">TIYE is a nonprofit dedicated to empowering young people across Africa through digital skills, artificial intelligence education, and responsible AI because every young person deserves a real path into the digital economy, regardless of where they are located.</p>
        </div>
      </section>

      {/* PHOTO MOSAIC */}
      <section className="section-tight" style={{ paddingTop: '56px' }}>
        <div className="wrap" style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <span className="eyebrow" style={{ color: 'var(--green)', paddingBottom: '10px' }}>Our belief</span>
          <p className="lede">Technology Initiative for Youth Employability (TIYE) is a non-profit organisation working across Africa to close the digital divide. We bridge the gap between technology and underserved communities by equipping young people with practical skills, while championing the safe, ethical, and responsible use of artificial intelligence. Our work runs through education, advocacy, community engagement, and strategic partnerships.</p>
        </div>
        <div className="wrap">
          <div className="mosaic-grid">
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief1.jpg" alt="TIYE community learning session" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief2.jpg" alt="TIYE participants learning together" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief3.jpg" alt="Young people taking part in TIYE activities" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief4.jpg" alt="TIYE digital skills workshop" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief5.jpg" alt="TIYE community members collaborating" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/ourbelief6.jpg" alt="TIYE group photo" /></div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-tight">
        <div className="wrap narrow">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>Our Mission</span>
          <h2 style={{ margin: '16px 0 20px' }}>Empowering youth through digital skills, AI literacy &amp; responsible AI adoption</h2>
          <p>We believe every young person should have access to the knowledge and opportunities needed to thrive in the digital economy. we&apos;re building a future where technology is accessible, inclusive, and used responsibly for social and economic development.</p>
        </div>
      </section>

      {/* VISION */}
      <section className="section-tight bg-white" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap about-grid" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Vision</span>
            <h2 style={{ margin: '16px 0 20px' }}>An Africa where every young person can thrive in a digital world.</h2>
            <p>An Africa where every young person has the knowledge, skills, and opportunities to thrive in a digital world with opportunity within reach of everyone, everywhere, regardless of where they start.</p>
          </div>
          <div className="img-ph ratio-4x3">
            <img src="/img/ourVision.JPG" alt="Young people learning with technology" />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-tight">
        <div className="wrap narrow">
          <span className="eyebrow" style={{ color: 'var(--green)' }}>Our Approach</span>
          <h2 style={{ margin: '16px 0 20px' }}>Bridging technology and underserved communities.</h2>
          <p>Everything we do runs through three connected pillars: Digital Skills Development, teaching the practical, job-ready skills that lead to real work; AI Literacy, making artificial intelligence understandable for schools, teachers, and businesses; and AI Safety &amp; Responsible Adoption, working with communities, educators, and policymakers to make sure AI is used safely, ethically, and fairly.</p>
          <Link href="/programmes" className="btn btn-dark-outline" style={{ marginTop: '8px' }}>See our programmes →</Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Our Values</span>
            <h2 style={{ marginTop: '16px' }}>The values behind every programme.</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="num">01</div>
              <h4>Access</h4>
              <p>Every young person deserves a real path into the digital economy regardless of their location.</p>
            </div>
            <div className="value-card">
              <div className="num">02</div>
              <h4>Inclusion</h4>
              <p>We design first for the communities others overlook.</p>
            </div>
            <div className="value-card">
              <div className="num">03</div>
              <h4>Responsibility</h4>
              <p>We teach ethical, safe technology and AI use from day one.</p>
            </div>
            <div className="value-card">
              <div className="num">04</div>
              <h4>Community</h4>
              <p>Real change happens through partnership with learners, educators, and institutions working together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT BEING PART OF TIYE MEANS */}
      <section className="section-tight bg-white" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Community</span>
            <h2 style={{ marginTop: '16px' }}>What being part of TIYE means.</h2>
          </div>
          <div className="objectives-list">
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--blue)' }}>1</span>
              <div><h4>Skill development</h4><p>Beginner or advanced, there&apos;s a pathway for everyone across our digital skills and AI programmes.</p></div>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>2</span>
              <div><h4>Mentorship</h4><p>Participants gain access to guidance and support as they move from learning into real opportunity.</p></div>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--orange)' }}>3</span>
              <div><h4>Peer-to-peer learning</h4><p>We foster a community-centred environment where members learn from and support each other.</p></div>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--blue)' }}>4</span>
              <div><h4>Inclusive by design</h4><p>We actively welcome people from diverse backgrounds and socioeconomic levels across Africa.</p></div>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>5</span>
              <div><h4>Responsible innovation</h4><p>Everything we teach is grounded in the safe, ethical, and responsible use of technology and AI.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PEOPLE TEASER */}
      <section className="section-tight">
        <div className="wrap">
          <div className="people-teaser">
            <div className="tp-photo img-ph ratio-1x1">
              <img src="/img/ourPeople.JPG" alt="TIYE team at work" />
            </div>
            <div className="people-teaser-text">
              <span className="eyebrow" style={{ color: 'var(--blue)' }}>Our People</span>
              <h3 style={{ marginTop: '10px' }}>Meet the people powering our mission</h3>
              <p>A small, focused team working to make sure every young person in Africa has the skills and opportunity to thrive.</p>
              <Link href="/team" className="btn btn-blue">Meet the team →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT TEASER */}
      {/* <section className="section-tight">
        <div className="wrap">
          <div className="impact-teaser-band">
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Impact</span>
              <h3 style={{ margin: '10px 0 8px' }}>Thousands of young people. One digital future.</h3>
              <p>See our full reach across all three pillars, and download our impact report.</p>
            </div>
            <Link href="/impact" className="btn btn-primary">View our impact →</Link>
          </div>
        </div>
      </section> */}

      {/* JOIN THE TEAM */}
      <section className="section-tight bg-white" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Join Us</span>
            <h3 style={{ marginTop: '10px' }}>Want to work or volunteer with TIYE?</h3>
          </div>
          <Link href="/#involved" className="btn btn-blue">See how to get involved →</Link>
        </div>
      </section>

      {/* DONATE */}
      {/* <section className="section-tight donate" id="donate-about">
        <div className="wrap donate-inner">
          <div>
            <h2>Your gift builds Africa&apos;s digital future.</h2>
            <p>Every donation helps TIYE reach more young people with digital skills, AI literacy, and the tools to thrive responsibly in a digital world.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Donate now</a>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
