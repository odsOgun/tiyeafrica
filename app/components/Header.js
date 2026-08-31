'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

// Inline styles that mirror the original js/main.js mobile-menu behaviour, so the
// existing CSS (which only hides .nav-links under 960px) does not need changing.
const OPEN_MENU_STYLE = {
  display: 'flex',
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: '#FAF9F5',
  flexDirection: 'column',
  padding: '20px 32px',
  gap: '16px',
  borderBottom: '1px solid rgba(26,26,46,.08)',
};

export default function Header() {
  const pathname = usePathname();
  // null = let the stylesheet decide (default responsive behaviour)
  const [menuOpen, setMenuOpen] = useState(null);

  const isActive = (href) => {
    if (href === '/programmes') return pathname.startsWith('/programmes');
    return pathname === href;
  };

  const navStyle =
    menuOpen === null ? undefined : menuOpen ? OPEN_MENU_STYLE : { display: 'none' };

  const links = [
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/programmes', label: 'Programmes' },
    // { href: '/impact', label: 'Impact' },
  ];

  return (
    <header>
      <nav className="nav">
        <Link href="/" className="logo">
          <img src="/img/Tiye short full logo.png" alt="TIYE logo"  width={100}/>
        </Link>
        <ul className="nav-links" style={navStyle}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? 'active' : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link href="/#involved">Get Involved</Link>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-cta">
          <Link href="/#donate" className="btn btn-primary">
            Donate
          </Link>
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
