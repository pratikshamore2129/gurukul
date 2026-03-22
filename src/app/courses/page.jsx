import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import styles from '../../styles/CoursesPage.module.css';

const boardCourses = [
  {
    board: 'CBSE',
    intro: 'Structured coaching with strong NCERT coverage, concept clarity, and regular test practice.',
    image: 'https://plus.unsplash.com/premium_photo-1683887034339-9c05d3f1b37d?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ2MjA1OTUxfA&ixlib=rb-4.0.3',
    grades: ['8th', '9th', '10th', '11th', '12th'],
    subjects: ['Maths', 'Science', 'English', 'Social Science', 'Stream Subjects'],
  },
  {
    board: 'State Board',
    intro: 'Focused support for school curriculum, board patterns, and score-oriented preparation.',
    image: 'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-364.jpg',
    grades: ['8th', '9th', '10th', '11th', '12th'],
    subjects: ['Maths', 'Science', 'English', 'Languages', 'Commerce and Science Streams'],
  },
  {
    board: 'ICSE',
    intro: 'Detailed subject guidance with emphasis on depth, accuracy, and written presentation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    grades: ['8th', '9th', '10th', '11th', '12th'],
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
  },
  {
    board: 'IGCSE',
    intro: 'Concept-driven learning built around understanding, analysis, and consistent academic growth.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    grades: ['8th', '9th', '10th', '11th', '12th'],
    subjects: ['Mathematics', 'Sciences', 'English', 'Global Perspectives', 'Subject Extensions'],
  },
];

const highlights = [
  'Small batch sizes for personal attention',
  'Regular tests, revision plans, and doubt-solving',
  'Experienced faculty for school and board preparation',
  'Academic mentoring for grades 8th to 12th',
];

export const metadata = {
  title: 'Courses | Gurukul Eduworld',
  description: 'Explore Gurukul Eduworld courses for CBSE, State Board, ICSE, and IGCSE from 8th to 12th.',
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} data-reveal>
          <div className="container">
            <p className={styles.eyebrow}>Our Courses</p>
            <h1>Courses for CBSE, State Board, ICSE, and IGCSE</h1>
            <p className={styles.subtitle}>
              Academic coaching for 8th, 9th, 10th, 11th, and 12th with board-focused preparation,
              disciplined practice, and personal attention.
            </p>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <h2 className="section-title">Boards We Cover</h2>
                <p className={styles.lead}>
                  We offer one structured courses page covering all major boards and grades so students
                  and parents can quickly understand the academic options available at Gurukul Eduworld.
                </p>
              </div>
              <div className={styles.highlightBox}>
                <h3>Why Students Join</h3>
                <ul className={styles.highlights}>
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.boardSection} section`} data-reveal style={{ '--reveal-delay': '140ms' }}>
          <div className="container">
            <h2 className="section-title">Courses by Board</h2>
            <p className="section-subtitle">
              Every program is adapted to the board pattern while keeping fundamentals, test practice, and performance tracking consistent.
            </p>

            <div className={styles.boardGrid}>
              {boardCourses.map((item) => (
                <article key={item.board} className={styles.boardCard}>
                  <div className={styles.boardHeader}>
                    <span className={styles.boardBadge}>{item.board}</span>
                    <h3>{item.board} Courses</h3>
                  </div>
                  <div className={styles.boardImageWrap}>
                    <img src={item.image} alt={`${item.board} course`} className={styles.boardImage} />
                  </div>
                  <p className={styles.boardIntro}>{item.intro}</p>

                  <div className={styles.metaBlock}>
                    <h4>Grades</h4>
                    <div className={styles.chips}>
                      {item.grades.map((grade) => (
                        <span key={grade} className={styles.chip}>{grade}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.metaBlock}>
                    <h4>Key Subjects</h4>
                    <div className={styles.chips}>
                      {item.subjects.map((subject) => (
                        <span key={subject} className={styles.subjectChip}>{subject}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '200ms' }}>
          <div className="container">
            <div className={styles.ctaPanel}>
              <div>
                <p className={styles.eyebrow}>Admissions Open</p>
                <h2>Need help choosing the right course?</h2>
                <p>
                  Speak with our team to understand the best board, batch timing, and subject support for your child.
                </p>
              </div>
              <a href="/about#contact" className="btn-primary">Enquire Now</a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
