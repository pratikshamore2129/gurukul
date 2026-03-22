import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Blog.module.css';

function NotesIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <rect x="16" y="10" width="32" height="44" rx="8" fill="#DBEAFE" />
      <path d="M24 22h16M24 30h16M24 38h12" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="22" fill="#DBEAFE" />
      <path d="M40 24l-6 16-16 6 6-16 16-6Z" fill="#1E40AF" />
      <circle cx="32" cy="32" r="4" fill="#F59E0B" />
    </svg>
  );
}

function MathIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <rect x="14" y="14" width="36" height="36" rx="10" fill="#DBEAFE" />
      <path d="M24 24h16M32 18v28M22 42h20" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <path d="M48 24a18 18 0 1 0 4 11" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 14v14H36" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <path d="M18 16h22a8 8 0 0 1 8 8v24H26a8 8 0 0 0-8 8V16Z" fill="#DBEAFE" />
      <path d="M18 16h22a8 8 0 0 1 8 8v24H26a8 8 0 0 0-8 8V16Z" stroke="#1E40AF" strokeWidth="3" />
      <path d="M26 24h14M26 32h14" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="22" fill="#DBEAFE" />
      <circle cx="32" cy="32" r="18" stroke="#1E40AF" strokeWidth="4" />
      <path d="M32 22v11l8 5" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = {
  title: 'Blog | Gurukul Eduworld',
  description: 'Educational tips, study strategies, and academic insights from Gurukul Eduworld.',
};

const posts = [
  { title: 'Top 10 Study Tips for Class 10 Board Exams', category: 'Exam Prep', date: 'Mar 15, 2024', icon: <NotesIcon />, image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80', excerpt: 'Preparing for board exams can feel overwhelming. Here are our top strategies that have helped thousands of students score 90%+.' },
  { title: 'How to Choose the Right Stream After Class 10', category: 'Career Guidance', date: 'Mar 8, 2024', icon: <CompassIcon />, image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', excerpt: 'Science, Commerce, or Arts? This comprehensive guide helps you make an informed decision based on your interests and strengths.' },
  { title: 'Mathematics Made Easy: Formulas You Must Know', category: 'Mathematics', date: 'Feb 28, 2024', icon: <MathIcon />, image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80', excerpt: 'A curated list of essential maths formulas for classes 9-12, organized by chapter for quick revision before exams.' },
  { title: 'The Power of Revision: Why and How to Revise Effectively', category: 'Study Skills', date: 'Feb 20, 2024', icon: <RefreshIcon />, image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80', excerpt: 'Revision is not just re-reading. Learn the science-backed spaced repetition technique that top students use.' },
  { title: 'Understanding NCERT: The Foundation of Board Exams', category: 'Exam Prep', date: 'Feb 10, 2024', icon: <BookIcon />, image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80', excerpt: 'Why NCERT books are the most important resource for board exams and how to extract maximum value from them.' },
  { title: 'Time Management for Students: A Practical Guide', category: 'Study Skills', date: 'Feb 1, 2024', icon: <ClockIcon />, image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80', excerpt: 'Learn how to create an effective study timetable that balances academics, extracurriculars, and rest for optimal performance.' },
];

const categories = ['All', 'Exam Prep', 'Study Skills', 'Mathematics', 'Career Guidance'];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} data-reveal>
          <div className="container">
            <h1>Educational Blog</h1>
            <p>Tips, strategies, and insights to help you excel academically</p>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '100ms' }}>
          <div className="container">
            <div className={styles.categories}>
              {categories.map((category) => (
                <button key={category} className={`${styles.catBtn} ${category === 'All' ? styles.active : ''}`}>
                  {category}
                </button>
              ))}
            </div>
            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.title} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={post.image} alt={post.title} className={styles.cardImagePhoto} loading="lazy" />
                    <div className={styles.cardImageOverlay}>{post.icon}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardCategory}>{post.category}</span>
                      <span className={styles.cardDate}>{post.date}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <a href="#" className={styles.readMore}>Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
