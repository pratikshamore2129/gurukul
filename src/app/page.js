import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Testimonials from '../components/Testimonials';
import OurStory from '../components/OurStory';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Gurukul Eduworld | Premier Coaching for Grades 7-12',
  description: 'Expert coaching for 7th to 12th standard students. Join Gurukul Eduworld today.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />

        <section className={`section ${styles.aboutStrip}`} data-reveal style={{ '--reveal-delay': '60ms' }}>
          <div className="container">
            <div className={styles.aboutGrid}>
              <div className={styles.aboutVisual}>
                <div className={styles.aboutImagePrimary}>
                  <img
                    src="/about.jpg"
                    alt="Students learning together in class"
                    className={styles.aboutPhoto}
                  />
                </div>
                <div className={styles.aboutImageSecondary}>
                  <img
                    src="/faculty-1.jpeg"
                    alt="Faculty guiding students in a classroom"
                    className={styles.aboutPhoto}
                  />
                </div>
              </div>

              <div className={styles.aboutText}>
                <span className={styles.aboutBadge}>About Us</span>
                <h2>Who are we?</h2>
                <p>
                  Gurukul.Eduworld Coaching Classes established in 2016 in Kharghar Sec 35 is the oldest classes in the neighbourhood.
                  We have an experience of more than 8.5 years. Till now Gurukul.Eduworld has helped more than 1000 students in
                  Kharghar to achieve their academic goals.
                </p>
                <p>
                  The results that Gurukul.Eduworld has produced speaks about our hardwork and dedication towards our students. We
                  not only provide academic coaching but also help students to choose their career. The infrastructure we provide for
                  our students is unmatchable within our neighborhood competitors.
                </p>
                <p>
                  We also provide free counselling sessions for our students to deal with current issues such as gadgets and social
                  media addiction, student-parent relationships, and the negative impact of social media. We have tie-up with the
                  best child counsellor in Kharghar.
                </p>
                <p>
                  We provide best teaching professionals who are masters in their subjects along with good experience in their field.
                  Gurukul.Eduworld follows the philosophy that other than academic goals of gurukulites we try to help them for
                  their all round development by regular counseling, motivation and guidance.
                </p>

                <div className={styles.aboutPoints}>
                  <div className={styles.aboutPoint}>Over 8.5 years of experience, helping more than 1000 students achieve academic success.</div>
                  <div className={styles.aboutPoint}>Unmatched infrastructure and free counselling sessions on social issues.</div>
                  <div className={styles.aboutPoint}>Collaboration with top child counsellors and experienced teaching professionals.</div>
                  <div className={styles.aboutPoint}>Biometric System for Attendance Marking.</div>
                </div>

                <Link href="/about" className="btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <OurStory />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
