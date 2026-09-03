import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/img/Tiye short full logo.png" alt="TIYE logo" width={100} height={35} />
            </Link>
            <p>Empowering youth through technology digital skills, AI literacy, and responsible AI adoption across Africa.</p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li><Link href="/about">About TIYE</Link></li>
              <li><Link href="/programmes">Our Programmes</Link></li>
              <li><Link href="/impact">Our Impact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Get Involved</h5>
            <ul>
              <li><Link href="/#involved">Volunteer</Link></li>
              <li><a href="mailto:hello@tiyeafrica.org">Partner With Us</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@tiyeafrica.org">hello@tiyeafrica.org</a></li>
              <li><a href="https://x.com/tiyeafrica">Twitter</a></li>
              <li><a href="https://www.instagram.com/tiyeafrica">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/tiyeafrica/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Technology Initiative for Youth Empowerment (TIYE). All rights reserved.</span>
          <span>Digital Skills · AI Literacy · Responsible AI</span>
        </div>
      </div>
    </footer>
  );
}
