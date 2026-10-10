import Link from 'next/link';
import CloudinaryImage from '../../components/CloudinaryImage';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'DigitalSkill4All — TIYE',
  description:
    "DigitalSkill4All is TIYE's flagship digital inclusion initiative, providing free technology and digital skills training to underserved communities.",
};

export default function DigitalSkill4All() {
  return (
    <>
      {/* HERO */}
      <section className="prog-hero-simple">
        <div className="wrap">
          <Link href="/programmes" className="back-link">← Back to programmes</Link>
          {/* <div><span className="eyebrow" style={{ color: 'var(--blue)' }}>Pillar 01 — Digital Skills Development</span></div> */}
          <h1>DigitalSkill4All</h1>
          <p className="lede" style={{ color: 'var(--ink-soft)' }}>One of Nigeria largest digital skill campaigns for underserved communities driving learning and  inclusion in Nigeria's digital economy.</p>
          {/* <div className="fact-bar">
            <div className="fact-chip fact-chip-light"><b>Cost</b>Free</div>
            <div className="fact-chip fact-chip-light"><b>Format</b>[Add format]</div>
            <div className="fact-chip fact-chip-light"><b>Duration</b>[Add duration]</div>
            <div className="fact-chip fact-chip-light"><b>Location</b>[Add location]</div>
          </div> */}
        </div>
      </section>

      {/* HERO PHOTO */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="img-ph ratio-16x9 hero-photo-lg">
            <CloudinaryImage width="1600" height="900" src="DSkill4all" alt="DigitalSkill4All training session" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-tight">
        <div className="wrap narrow">
          <h2>About the programme</h2>
          <p>DigitalSkill4All  advances national digital inclusion by equipping underserved youths with practical digital, technology and AI literacy skills. It's the entry point into TIYE's Digital Skills Development pillar, turning digital literacy into a real, sustainable livelihood.</p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '28px' }}>Programme objectives</h2>
          <div className="objectives-layout">
            <div className="objectives-list">
              <div className="obj-item">
                <span className="obj-num" style={{ background: 'var(--blue)' }}>1</span>
                <p>To unlock access to digital literacy for underserved people.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num" style={{ background: 'var(--blue)' }}>2</span>
                <p>To create an inclusive pathway for young people facing additional barriers to employment.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num" style={{ background: 'var(--blue)' }}>3</span>
                <p>To strengthen the National Digital Literacy Framework.</p>
              </div>
              <div className="obj-item">
                <span className="obj-num" style={{ background: 'var(--blue)' }}>4</span>
                <p>To influence and Strengthen National Digital Basic Education program.</p>
              </div>
            </div>
            <div className="objectives-media">
              <CloudinaryImage width="1600" height="900" src="programObjectives" alt="DigitalSkill4All training session" />
            </div>
          </div>
        </div>
      </section>

      {/* TWO PHOTO GRID */}
      {/* <section className="section-tight">
        <div className="wrap">
          <div className="two-photo-grid">
            <div className="img-ph ratio-3x4">
              <img src="/img/learnerwithlaptop.png" alt="Learner at laptop" />
            </div>
            <div className="img-ph ratio-3x4">
              <img src="/img/teacherteaching.png" alt="Facilitator teaching photo" />
            </div>
          </div>
        </div>
      </section> */}

      {/* SPOTLIGHT: HOW IT'S DELIVERED */}
      {/* <section className="section">
        <div className="wrap spotlight-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>How It Works</span>
            <h2 style={{ marginTop: '16px' }}>From learning to earning</h2>
            <p>DigitalSkill4All takes learners through a simple, supported journey: apply with no prior experience needed, learn through hands-on training, practice through guided projects and mentorship, then graduate with a portfolio and direct support connecting to remote work or entrepreneurship.</p>
            <a href="#contact" className="btn btn-blue">Apply for the next cohort →</a>
          </div>
          <div className="img-ph ratio-4x3">
            <img src="/img/programmedelivery.png" alt="Digital skills programme delivery" />
          </div>
        </div>
      </section> */}

      {/* GALLERY */}
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '24px' }}>Gallery</h2>
          <div className="masonry-gallery">
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery11" alt="Digital skills training session" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery12" alt="Learner using a laptop" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery13" alt="Digital skills classroom" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery14" alt="Digital skills graduation" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery15" alt="Digital skills learner group" /></div>
            <div className="img-ph" style={{ aspectRatio: '4/3' }}><CloudinaryImage width="1200" height="900" src="gallery16" alt="Digital skills mentorship session" /></div>
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      {/* <section className="section-tight donate" id="donate-dsa">
        <div className="wrap donate-inner">
          <div>
            <h2>Ready to build your digital skills?</h2>
            <p>Applications are open to underserved young people with no prior digital experience required.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Apply now</a>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
