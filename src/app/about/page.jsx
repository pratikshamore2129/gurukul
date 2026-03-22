import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import styles from '../../styles/About.module.css';

function MissionIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <rect x="12" y="10" width="40" height="44" rx="8" fill="#1E40AF" opacity="0.12" />
      <path d="M22 18h20a4 4 0 0 1 4 4v24H18V22a4 4 0 0 1 4-4Z" fill="#1E40AF" />
      <path d="M24 26h16M24 33h16M24 40h10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ExcellenceIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="24" fill="#DBEAFE" />
      <circle cx="32" cy="32" r="12" fill="#1E40AF" />
      <circle cx="32" cy="32" r="5" fill="#F59E0B" />
    </svg>
  );
}

function IntegrityIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <rect x="14" y="18" width="36" height="28" rx="8" fill="#DBEAFE" />
      <path d="M23 32l6 6 12-14" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <path d="M32 12c-8.8 0-16 7.2-16 16 0 5.2 2.5 9.8 6.4 12.7 1.7 1.3 2.6 3.1 2.6 5.1V48h14v-2.2c0-2 .9-3.8 2.6-5.1A15.9 15.9 0 0 0 48 28c0-8.8-7.2-16-16-16Z" fill="#DBEAFE" />
      <path d="M32 18v10M32 28l6 6M26 54h12" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="24" fill="#DBEAFE" />
      <path d="M22 28c0-5.5 4.5-10 10-10s10 4.5 10 10v8c0 5.5-4.5 10-10 10s-10-4.5-10-10v-8Z" fill="#1E40AF" opacity="0.14" />
      <path d="M24 28c0-4.4 3.6-8 8-8s8 3.6 8 8v7c0 4.4-3.6 8-8 8s-8-3.6-8-8v-7Z" stroke="#1E40AF" strokeWidth="3" />
      <path d="M20 31h4M40 31h4M28 48h8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export const metadata = {
  title: 'About Us | Gurukul Eduworld',
  description: 'Learn about our mission, team, and values at Gurukul Eduworld.',
};

const team = [
  { name: 'Dr. Ramesh Sharma', role: 'Founder & Director', subject: 'Mathematics', exp: '20+ years', photo: '/faculty-1.jpeg' },
  { name: 'Mrs. Sunita Patel', role: 'Academic Head', subject: 'Science', exp: '15+ years', photo: '/faculty-1.jpeg' },
  { name: 'Mr. Arjun Mehta', role: 'Senior Faculty', subject: 'Physics', exp: '12+ years', photo: '/faculty-1.jpeg' },
  { name: 'Ms. Priya Joshi', role: 'Faculty', subject: 'Chemistry', exp: '10+ years', photo: '/faculty-1.jpeg' },
  { name: 'Mr. Ravi Kumar', role: 'Faculty', subject: 'English & SST', exp: '8+ years', photo: '/faculty-1.jpeg' },
  { name: 'Mrs. Anita Singh', role: 'Faculty', subject: 'Biology', exp: '11+ years', photo: '/faculty-1.jpeg' },
];

const values = [
  { icon: <ExcellenceIcon />, title: 'Excellence', desc: 'We set high standards and strive for the best outcomes for every student.' },
  { icon: <IntegrityIcon />, title: 'Integrity', desc: 'Honest, transparent, and ethical in all our academic and administrative practices.' },
  { icon: <InnovationIcon />, title: 'Innovation', desc: 'Modern teaching methods combined with proven academic strategies.' },
  { icon: <CareIcon />, title: 'Care', desc: 'Personal attention and emotional support to every student in our family.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} data-reveal>
          <div className="container">
            <h1>About Gurukul Eduworld</h1>
            <p>Our mission, our team, our values - all in service of your success.</p>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '16px' }}>
                  At Gurukul Eduworld, we believe every child deserves access to quality education that
                  builds not just academic knowledge, but critical thinking, confidence, and character.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  Founded in 2010, we have been guiding students from grades 7 through 12 across all
                  streams - Science, Commerce, and Arts - helping them excel in board exams and competitive
                  entrance tests.
                </p>
              </div>
              <div className={styles.missionImageBox}>
                <img src="/founder.jpg" alt="Founder of Gurukul Eduworld" className={styles.missionPhoto} />
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.valuesSection}`} data-reveal style={{ '--reveal-delay': '140ms' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Our Core Values</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>What drives us every single day</p>
            <div className={styles.valuesGrid}>
              {values.map((value) => (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '200ms' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Meet Our Faculty</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>Experienced educators dedicated to your growth</p>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>
                    <img src={member.photo} alt={member.name} className={styles.teamAvatarImage} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamSubject}>{member.subject}</p>
                  <p className={styles.teamExp}>Experience: {member.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
