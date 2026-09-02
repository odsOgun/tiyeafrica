import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Our Programmes — TIYE',
  description:
    "Explore TIYE's programmes — DigitalSkill4All, AI4All, and the Ogun Digital Summit.",
};

export default function Programmes() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          {/* <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Programmes</span></div> */}
          <h1 style={{ maxWidth: '18ch' }}>Three programmes. One digital future.</h1>
          <p className="lede">All our programmes connect to one of our three pillars, digital skills, AI literacy, or responsible AI adoption, turning a mission statement into real training, real events, and real opportunity.</p>
          <div className="fact-bar">
            <div className="fact-chip"><b>Pillar 01</b>Digital Skills Development</div>
            <div className="fact-chip"><b>Pillar 02</b>AI Literacy</div>
            <div className="fact-chip"><b>Pillar 03</b>AI Safety &amp; Responsible Adoption</div>
          </div>
        </div>
      </section>

      {/* PROGRAMME LIST */}
      <section className="section">
        <div className="wrap">
          <div className="prog-grid">
            <div className="prog-card c1">
              <div className="img-ph ratio-4x3">
                <img src="/img/Digital literacy.jpg" alt="DigitalSkill4All" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>DigitalSkill4All</h3>
                <p>Free technology and digital skills training for underserved communities, building real pathways to work, income, and independence. One of our most impactful editions supported young people living with sickle cell disease with skills for remote work and entrepreneurship.</p>
                <Link href="/programmes/digitalskill4all" className="link">View programme details →</Link>
              </div>
            </div>

            <div className="prog-card c2">
              <div className="img-ph ratio-4x3">
                <img src="/img/AI4ALLInner.jpg" alt="AI4All" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#10B981" strokeWidth="2" /><path d="M12 8v4l3 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" /></svg></div>
                <h3>AI4All</h3>
                <p>AI education for secondary schools, tertiary institutions, and young people in local communities, teaching not just how to use AI, but how to use it responsibly. Participants learn what AI is, how it works, real-world applications, and the ethics behind it.</p>
                <Link href="/programmes/ai4all" className="link">View programme details →</Link>
              </div>
            </div>

            <div className="prog-card c3">
              <div className="img-ph ratio-4x3">
                <img src="/img/ODS.png" alt="Ogun Digital Summit 2025" />
              </div>
              <div className="prog-card-body">
                <div className="prog-mark"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 6.9L21 12l-6.5 2.1L12 21l-2.5-6.9L3 12l6.5-2.1L12 3z" stroke="#F97316" strokeWidth="1.8" strokeLinejoin="round" /></svg></div>
                <h3>Ogun Digital Summit</h3>
                <p>Our annual technology conference, bringing together students, entrepreneurs, technology leaders, government officials, investors, and policymakers to shape conversations on innovation, AI, and Africa&apos;s digital economy.</p>
                <a href="https://www.ogundigitalsummit.com/" className="link" target="_blank" rel="noopener noreferrer">View programme details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
