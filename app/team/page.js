import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Meet the Team — TIYE',
  description:
    'Meet the seven-person team behind TIYE, working to empower young people across Africa through digital skills, AI literacy, and responsible AI.',
};

function TpSocial() {
  return (
    <div className="tp-social">
      <a href="#" aria-label="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M8 10v6M8 7.5v.01M12 16v-3.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </a>
      <a href="#" aria-label="Email">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
      </a>
    </div>
  );
}

function TeamCard({ img, alt, role, roleColor, name }) {
  return (
    <div className="team-page-card">
      <div className="tp-photo">
        <div className="img-ph ratio-4x5">
          <Image fill sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw" src={img} alt={alt} />
        </div>
      </div>
      <div className="tp-body">
        <span className="tp-role" style={roleColor ? { color: roleColor } : undefined}>{role}</span>
        <h4>{name}</h4>
        <TpSocial />
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          {/* <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/about">About</Link><span>/</span><span>Team</span></div> */}
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our People</span>
          <h1 style={{ marginTop: '16px', maxWidth: '16ch' }}>The people behind TIYE.</h1>
          <p className="lede">We are a small focused focused team working to make sure every young person in Africa has the digital skills, AI literacy, and opportunity to thrive.</p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="wrap team-group">
          <span className="team-group-label">Leadership</span>
          <div className="team-page-grid">
            <TeamCard img="/img/victor.png" alt="Victor Adeleye, TIYE President" role="President" name="Victor Adeleye" />
            <TeamCard img="/img/seunbayo.png" alt="Programmes Director" role="Executive Director" roleColor="var(--green)" name="Adebayo Oluwaseun" />
          </div>
        </div>
      </section>

      {/* PROGRAMME & OPERATIONS TEAM */}
      <section className="section-tight bg-white" style={{ borderTop: '1px solid rgba(26,26,46,.08)', borderBottom: '1px solid rgba(26,26,46,.08)' }}>
        <div className="wrap team-group" style={{ marginBottom: 0 }}>
          <span className="team-group-label">Programme &amp; Operations Team</span>
          <div className="team-page-grid">
            <TeamCard img="/img/Tosin's Protrait.png" alt="Digital Skills Lead" role="Programs Manager" roleColor="var(--orange)" name="Oluwatosin Iyiola" />
            <TeamCard img="/img/Joyce.Adeyemi.jpg" alt="AI Literacy Lead" role="Communications Manager" roleColor="var(--blue)" name="Joyce Adeyemi" />
            <TeamCard img="/img/temitayo.png" alt="Partnerships & Communications" role="Associate Programs Manager" roleColor="var(--green)" name="Halira Temitayo" />
          </div>
      </div>
      </section>

      {/* JOIN THE TEAM */}
      <section className="section-tight">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>Careers &amp; Volunteering</span>
            <h3 style={{ marginTop: '10px' }}>Want to work with us?</h3>
            <p style={{ marginTop: '8px', maxWidth: '52ch' }}>If you are looking to volunteer, partner, or bring TIYE&apos;s programmes to your school or organisation, our team would love to hear from you.</p>
          </div>
          <Link href="/#involved" className="btn btn-blue">See how to get involved →</Link>
        </div>
      </section>

      {/* DONATE */}
      {/* <section className="section-tight donate" id="donate-team">
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
