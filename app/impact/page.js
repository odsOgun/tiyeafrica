import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Our Impact — TIYE',
  description: "See TIYE's impact across Africa and download our full impact report.",
};

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#DBEAFE" /><path d="M8 12.5l2.5 2.5L16 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

export default function Impact() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Impact</span></div>
          <h1 style={{ maxWidth: '16ch' }}>Thousands of young people. One digital future.</h1>
          <p className="lede">TIYE has impacted thousands of young people through technology education, digital skills programmes, AI awareness campaigns, and community-driven initiatives. Here&apos;s a look at what that means in practice — and our full report to download.</p>
          <div className="hero-actions" style={{ marginTop: '28px' }}>
            <a href="#report" className="btn btn-primary">Download impact report</a>
            <a href="#stories" className="btn btn-outline">Read impact stories</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>By The Numbers</span>
            <h2 style={{ marginTop: '16px' }}>Our reach so far.</h2>
            <p>These figures are placeholders — replace each with your verified totals when the data is ready.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-num">1000+</div>
              <div className="stat-label">Young people reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">50+</div>
              <div className="stat-label">Communities served</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">70+</div>
              <div className="stat-label">AI4All sessions delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">5000+</div>
              <div className="stat-label">Ogun Digital Summit attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT BY PILLAR */}
      <section className="section bg-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Impact By Pillar</span>
            <h2 style={{ marginTop: '16px' }}>Where the impact shows up.</h2>
          </div>
          <div className="pillar-grid">
            <div className="pillar-card p1">
              <span className="pillar-num">01 / Digital Skills Development</span>
              <h3>Skills to livelihoods</h3>
              <p>Digital literacy and job-ready training delivered through DigitalSkill4All, opening pathways into remote work, employment and entrepreneurship.</p>
            </div>
            <div className="pillar-card p2">
              <span className="pillar-num">02 / AI Literacy</span>
              <h3>AI made understandable</h3>
              <p>AI4All sessions delivered in schools, tertiary institutions and communities — building AI understanding at every level.</p>
            </div>
            <div className="pillar-card p3">
              <span className="pillar-num">03 / AI Safety &amp; Responsible Adoption</span>
              <h3>Trust in how AI is used</h3>
              <p>Ogun Digital Summit and community outreach promoting responsible, ethical and safe AI adoption across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="section" id="stories">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Impact Stories</span>
            <h2 style={{ marginTop: '16px' }}>In their own words.</h2>
          </div>
          <div className="story-grid">
            <div className="story-card">
              <div className="img-ph ratio-4x3">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/graduate.jpg" alt="TIYE programme graduate" />
              </div>
              <div className="story-body">
                <blockquote>&quot;[Add a short quote about the impact of a TIYE programme on this person&apos;s life.]&quot;</blockquote>
                <cite>[Mercy John], [Programme], [UK]</cite>
              </div>
            </div>
            <div className="story-card">
              <div className="img-ph ratio-4x3">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/teacher.webp" alt="Teacher participating in a TIYE programme" />
              </div>
              <div className="story-body">
                <blockquote>&quot;[Add a short quote about the impact of a TIYE programme on this person&apos;s life.]&quot;</blockquote>
                <cite>[Name], [Programme], [Location]</cite>
              </div>
            </div>
            <div className="story-card">
              <div className="img-ph ratio-4x3">
                <Image fill sizes="(max-width: 900px) 100vw, 33vw" src="/img/partner.jpg" alt="TIYE partner supporting programme delivery" />
              </div>
              <div className="story-body">
                <blockquote>&quot;[Add a short quote about the impact of a TIYE programme on this person&apos;s life.]&quot;</blockquote>
                <cite>[Name], [Programme], [Location]</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT DOWNLOAD */}
      <section className="section-tight" id="report">
        <div className="wrap">
          <div className="report-card">
            <div className="report-left">
              <div className="report-icon">
                <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M14 3H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V8l-4-5z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /><path d="M14 3v5h4" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <h3>TIYE Impact Report</h3>
                <p>A full breakdown of our reach, programmes, and outcomes across Africa.</p>
                <div className="report-meta">PDF · [Add file size] · [Add report year]</div>
              </div>
            </div>
            <a href="/reports/TIYE-Impact-Report.pdf" download className="btn btn-white">Download report (PDF)</a>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '14px' }}>Note for TIYE team: upload the report PDF to <code>/reports/TIYE-Impact-Report.pdf</code> so this button downloads the real file.</p>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="section-tight bg-white" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap about-grid" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>What&apos;s Inside</span>
            <h3 style={{ marginTop: '12px' }}>What the impact report covers</h3>
          </div>
          <ul className="check-list">
            <li><CheckIcon />Full-year reach across all three pillars</li>
            <li><CheckIcon />Programme-by-programme outcomes</li>
            <li><CheckIcon />Partner &amp; donor acknowledgements</li>
            <li><CheckIcon />Plans and goals for the year ahead</li>
          </ul>
        </div>
      </section>

      {/* DONATE */}
      <section className="section-tight donate" id="donate">
        <div className="wrap donate-inner">
          <div>
            <h2>Help us grow this impact.</h2>
            <p>Every donation helps TIYE reach more young people with digital skills, AI literacy, and the tools to thrive responsibly in a digital world.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Donate now</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
