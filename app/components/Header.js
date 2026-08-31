'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

// Inline styles that mirror the original js/main.js mobile-menu behaviour
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

  const [menuOpen, setMenuOpen] = useState(null);

  const isActive = (href) => {
    if (href === '/programmes') return pathname.startsWith('/programmes');
    return pathname === href;
  };

  // Close the mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navStyle =
    menuOpen === null
      ? undefined
      : menuOpen
        ? OPEN_MENU_STYLE
        : { display: 'none' };

  const links = [
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/programmes', label: 'Programmes' },
    // { href: '/impact', label: 'Impact' },
  ];

  return (
    <header>
      <nav className="nav">
        <Link href="/" className="logo" onClick={closeMenu}>
          <img
            src="/img/Tiye short full logo.png"
            alt="TIYE logo"
            width={100}
          />
        </Link>

        <ul className="nav-links" style={navStyle}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? 'active' : undefined}
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* <li>
            <Link href="/#involved" onClick={closeMenu}>
              Get Involved
            </Link>
          </li> */}

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <Link
            href="/#donate"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Donate
          </Link>

          <button
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen === true}
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