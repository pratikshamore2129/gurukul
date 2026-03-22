import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const copyrightYear = 2026;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <div className={styles.logoWrap}>
            <div className={styles.logoIcon}>GE</div>
            <div>
              <strong>Gurukul Eduworld</strong>
              <span>Excellence in Education</span>
            </div>
          </div>
          <p className={styles.bio}>
            Empowering students of grades 8-12 with expert coaching, structured curriculum,
            and personal attention since 2010.
          </p>
          <div className={styles.socials}>
            {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
              <a key={social} href="#" className={styles.social}>{social}</a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/about#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Courses</h4>
          <ul>
            <li><Link href="/courses">All Courses</Link></li>
            <li><Link href="/courses">CBSE</Link></li>
            <li><Link href="/courses">State Board</Link></li>
            <li><Link href="/courses">ICSE</Link></li>
            <li><Link href="/courses">IGCSE</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact Us</h4>
          <p>123 Education Lane, Mumbai, MH 400001</p>
          <p>+91 98765 43210</p>
          <p>info@gurukuleduworld.com</p>
          <p>Mon-Sat: 7 AM - 8 PM</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>(c) {copyrightYear} Gurukul Eduworld. All rights reserved.</p>
      </div>
    </footer>
  );
}
