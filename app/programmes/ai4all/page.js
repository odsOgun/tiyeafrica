import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'AI4All — TIYE',
  description:
    'AI4All introduces artificial intelligence to secondary schools, tertiary institutions, and local communities across Africa.',
};

export default function AI4All() {
  return (
    <>
      {/* HERO */}
      <section className="prog-hero-simple">
        <div className="wrap">
          <Link href="/programmes" className="back-link">← Back to programmes</Link>
        {/* <p className="eyebrow" style={{ color: 'var(--green)' }}>Pillar 02 — AI Literacy</p> */}
          <div>
            <p className="eyebrow" style={{ color: 'var(--green)' }}>Pillar 02 — AI Literacy</p>
          </div>
          <h1>AI4All</h1>
          <p className="lede" style={{ color: 'var(--ink-soft)' }}>Making artificial intelligence understandable for every young person — not just how to use it, but how to use it responsibly.</p>
          <div className="fact-bar">
            <div className="fact-chip fact-chip-light"><b>Cost</b>Free</div>
            <div className="fact-chip fact-chip-light"><b>Audience</b>Schools, tertiary, community</div>
            <div className="fact-chip fact-chip-light"><b>Format</b>[Workshop / classroom]</div>
            <div className="fact-chip fact-chip-light"><b>Location</b>[Add location]</div>
          </div>
        </div>
      </section>

      {/* HERO PHOTO */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="img-ph ratio-16x9 hero-photo-lg">
            <img src="/img/AIFORALL.JPG" alt="AI4All classroom session" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-tight">
        <div className="wrap narrow">
          <h2>About the programme</h2>
          <p>Artificial Intelligence is transforming every industry — and AI4All exists to make sure no community is left behind. We simplify AI and make it accessible through education, awareness programmes, workshops, and school outreach initiatives across secondary schools, tertiary institutions, and local communities.</p>
          <p>AI4All isn&apos;t just about how to use AI tools. Participants also learn about responsible AI, AI ethics, and AI safety — building the judgement to use these tools well, not just the ability to use them at all.</p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>Programme objectives</h2>
          <div className="objectives-list">
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>1</span>
              <p>To help every participant understand what AI is, how it works, and where it already shows up in everyday life.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>2</span>
              <p>To introduce AI careers, tools, and the future of work — practically, not theoretically.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>3</span>
              <p>To build responsible AI habits — ethics and safety alongside usage — from the very first session.</p>
            </div>
            <div className="obj-item">
              <span className="obj-num" style={{ background: 'var(--green)' }}>4</span>
              <p>To reach schools, tertiary institutions, and community groups that are typically left out of AI conversations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PHOTO GRID */}
      {/* <section className="section-tight">
        <div className="wrap">
          <div className="two-photo-grid">
            <div className="img-ph ratio-3x4">
              <img src="/img/student group.png" alt="AI4All student group" />
            </div>
            <div className="img-ph ratio-3x4">
              <img src="/img/teacherteaching.png" alt="AI4All facilitator teaching" />
            </div>
          </div>
        </div>
      </section> */}

      {/* SPOTLIGHT: TRACKS */}
      {/* <section className="section">
        <div className="wrap spotlight-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Three Tracks</span>
            <h2 style={{ marginTop: '16px' }}>Built for schools, teachers, and businesses</h2>
            <p>AI4All runs as three tailored tracks: <strong>AI for Schools</strong> delivers classroom-ready sessions for students, <strong>AI for Teachers</strong> helps educators responsibly bring AI into their own teaching, and <strong>AI for Businesses</strong> gives small businesses and community organisations practical AI literacy.</p>
            <a href="#contact" className="btn btn-blue" style={{ background: 'var(--green)' }}>Bring AI4All to your school →</a>
          </div>
          <div className="img-ph ratio-4x3">
            <img src="/img/workshopdelivery.png" alt="AI4All workshop delivery" />
          </div>
        </div>
      </section> */}

      {/* GALLERY */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '24px' }}>Gallery</h2>
          <div className="masonry-gallery">
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery21.JPG" alt="" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery22.JPG" alt="" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery23.JPG" alt="" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery24.JPG" alt="" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery25.JPG" alt="" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><img src="/img/gallery26.JPG" alt="" /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="section-tight donate" id="donate-ai4all">
        <div className="wrap donate-inner">
          <div>
            <h2>Bring AI4All to your community.</h2>
            <p>Schools, institutions, and community groups can request a session for students, teachers, or businesses.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Request a session</a>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
