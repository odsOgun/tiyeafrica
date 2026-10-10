import Link from 'next/link';
import Footer from '../components/Footer';
import PixelGrid from '../components/PixelGrid';
import RotatingWord from './RotatingWord';

export const metadata = {
  title: 'AI Training — TIYE',
  description:
    'Free AI training from TIYE for students, working professionals, and educators across Africa — practical skills, responsible use, and a community to grow with.',
};

const INTEREST_HREF = '/contact#ai-literacy-training';

const heroWords = ['builders', 'teachers', 'founders', 'policymakers', 'creatives', 'researchers'];

const fields = [
  { title: 'Education', text: 'Bring AI into classrooms responsibly and help learners keep up.' },
  { title: 'Agriculture', text: 'Use data and AI tools to improve yields, logistics, and markets.' },
  { title: 'Healthcare', text: 'Support diagnosis, records, and outreach in under-served clinics.' },
  { title: 'Fintech', text: 'Build fairer credit, payments, and fraud tools for African users.' },
  { title: 'Creative & media', text: 'Write, design, and produce faster without losing your voice.' },
  { title: 'Public policy', text: 'Shape how governments adopt and regulate AI across the continent.' },
  { title: 'Software & product', text: 'Ship AI-powered products that solve real local problems.' },
  { title: 'Data & research', text: 'Collect, clean, and study the data African AI depends on.' },
  { title: 'Entrepreneurship', text: 'Start and scale businesses with AI as a co-worker.' },
  { title: 'Law & ethics', text: 'Work on privacy, accountability, and the rights of AI users.' },
  { title: 'Operations', text: 'Automate the busywork so teams can focus on people.' },
  { title: 'Civic tech', text: 'Use AI to make public services more open and accessible.' },
];

const reasons = [
  {
    label: 'Careers',
    title: 'If you care about your career',
    text: 'AI skills are becoming a baseline expectation in almost every industry. Learning them early opens doors that are still closed to most.',
  },
  {
    label: 'Impact',
    title: 'If you care about impact',
    text: 'The way Africa adopts AI is being decided now. Trained, responsible people in every community help make sure it works for everyone.',
  },
  {
    label: 'Community',
    title: 'If you care about community',
    text: 'Learn alongside peers, facilitators, and mentors who share your curiosity — and stay connected long after the sessions end.',
  },
];

const programmes = [
  {
    audience: 'Students',
    title: 'AI Fellowship',
    text: 'A guided cohort covering what AI is, how to use it well, and how to use it responsibly. Led by an experienced facilitator — no coding background needed.',
    // meta: ['[Number] weekly sessions', '[Location / online]', 'Free'],
    tone: 'blue',
  },
  {
    audience: 'Working professionals',
    title: 'AI Intensive',
    text: 'A focused programme built to fit around a full-time job. Apply AI tools to your own work and leave with a clear plan for using them in your role.',
    // meta: ['[Schedule]', '[Location / online]', '[Cost]'],
    tone: 'green',
  },
  {
    audience: 'Educators',
    title: 'AI for Teachers',
    text: 'Practical training for teachers and school leaders on bringing AI into lessons safely — with ready-to-use activities for the classroom.',
    // meta: ['[Format]', '[Location / online]', 'Free'],
    tone: 'orange',
  },
];

export default function AITrainingPage() {
  return (
    <>
      {/* HERO */}
      <section className="ait-hero">
        <div className="wrap ait-hero-grid">
          <div>
            <span className="eyebrow hero-eyebrow">AI Training · Responsible AI</span>
            <h1>
              Africa&apos;s AI future needs more{' '}
              <span className="sr-only">skilled people</span>
              <RotatingWord words={heroWords} />
            </h1>
            <p className="lede">
              Free, practical AI training for students, professionals, and educators — so the
              people shaping Africa&apos;s future know how to use AI well, and use it responsibly.
            </p>
            <div className="hero-actions">
              <Link href={INTEREST_HREF} className="btn btn-primary">Express interest</Link>
              <a href="mailto:hello@tiyeafrica.org?subject=Join%20the%20TIYE%20AI%20mailing%20list" className="btn btn-outline">
                Join our mailing list
              </a>
            </div>
          </div>
          <div className="ait-hero-art" aria-hidden="true">
            <PixelGrid />
          </div>
        </div>
      </section>

      {/* WHAT IS RESPONSIBLE AI */}
      <section className="section">
        <div className="wrap ait-explain-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>The challenge</span>
            <h2 style={{ marginTop: '16px' }}>What is responsible AI?</h2>
          </div>
          <div className="ait-explain-body">
            <p className="ait-callout">
              AI is being adopted faster than people are being prepared to use it well.
            </p>
            <p>
              Tools that write, translate, analyse, and decide are already in our schools, offices,
              and phones. Used well, they can unlock enormous opportunity. Used carelessly, they can
              spread misinformation, leak private data, and deepen the gaps between those who have
              access and those who don&apos;t.
            </p>
            <p>
              Responsible AI means knowing both sides: how to get real value from these tools, and
              how to question their outputs, protect people&apos;s data, and recognise bias. That is
              what every TIYE AI training is built around.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE AI SKILLS CAN TAKE YOU */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--green)' }}>Every field</span>
            <h2 style={{ marginTop: '16px' }}>Where can AI skills take you?</h2>
            <p>AI isn&apos;t just for engineers. Every sector across Africa needs people who understand it.</p>
          </div>
          <div className="ait-field-grid">
            {fields.map((f) => (
              <div key={f.title} className="ait-field">
                <span className="ait-dot" />
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <p className="ait-field-note">
            Not sure where you fit? <Link href={INTEREST_HREF}>Talk to us →</Link>
          </p>
        </div>
      </section>

      {/* WHY GET INVOLVED */}
      <section className="section bg-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why get involved?</span>
            <h2 style={{ marginTop: '16px' }}>Africa has the youngest population in the world. It should help lead the AI era.</h2>
            <p>
              That takes talent from every background — not just computer science, but education,
              law, business, health, and the arts. TIYE exists to find people like you and give you
              a way in.
            </p>
          </div>
          <div className="ait-why-grid">
            {reasons.map((r) => (
              <div key={r.label} className="ait-why-card">
                <span className="eyebrow">{r.label}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section" id="programmes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>Programmes</span>
            <h2 style={{ marginTop: '16px' }}>Find the training that fits you.</h2>
          </div>
          <div className="ait-prog-grid">
            {programmes.map((p) => (
              <div key={p.title} className={`ait-prog ait-prog-${p.tone}`}>
                <span className="ait-audience">{p.audience}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
               
                <div className="ait-prog-actions">
                  <Link href={INTEREST_HREF} className="btn btn-blue btn-sm">Express interest</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight donate">
        <div className="wrap donate-inner">
          <div>
            <h2>Ready to help build Africa&apos;s AI future?</h2>
            <p>Tell us a little about yourself and we&apos;ll let you know when the next cohort opens.</p>
          </div>
          <Link href={INTEREST_HREF} className="btn btn-primary">Express interest →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
