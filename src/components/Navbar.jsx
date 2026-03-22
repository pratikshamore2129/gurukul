'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import { getWhatsAppUrl } from '../lib/siteConfig';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.82c0 1.74.45 3.44 1.31 4.94L2 22l5.39-1.41a9.8 9.8 0 0 0 4.63 1.18h.01c5.41 0 9.83-4.4 9.83-9.82 0-2.62-1.03-5.08-2.81-6.94Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.2.84.86-3.12-.2-.32a8.1 8.1 0 0 1-1.25-4.33c0-4.5 3.68-8.16 8.22-8.16 2.18 0 4.22.84 5.76 2.38a8.06 8.06 0 0 1 2.39 5.74c0 4.5-3.69 8.18-8.13 8.18Zm4.47-6.1c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.57 4.08 3.6.57.24 1.02.39 1.37.5.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = getWhatsAppUrl();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoImageWrap}>
            <Image
              src="/logo (1).png"
              alt="Gurukul Eduworld logo"
              width={250}
              height={60}
              className={styles.logoImage}
            />
          </div>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/" className={pathname === '/' ? styles.activeLink : ''}>Home</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? styles.activeLink : ''}>About</Link></li>
          <li><Link href="/courses" className={pathname === '/courses' ? styles.activeLink : ''}>Courses</Link></li>
          <li><Link href="/blog" className={pathname === '/blog' ? styles.activeLink : ''}>Blog</Link></li>
          <li><Link href="/faq" className={pathname === '/faq' ? styles.activeLink : ''}>FAQ</Link></li>
        </ul>

        <div className={styles.actions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <Link href="/about#contact" className="btn-primary">Join Now</Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={pathname === '/' ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/courses" className={pathname === '/courses' ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/blog" className={pathname === '/blog' ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/faq" className={pathname === '/faq' ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>FAQ</Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            <span className={styles.mobileWhatsApp}>
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </span>
          </a>
          <Link href="/about#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Join Now</Link>
        </div>
      )}
    </nav>
  );
}
