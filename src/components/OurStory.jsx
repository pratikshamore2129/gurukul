import styles from '../styles/Home.module.css';

const milestones = [
  { year: '2010', title: 'Founded', desc: 'Gurukul Eduworld was established with 20 students and a vision to make quality education accessible.' },
  { year: '2014', title: 'Expanded', desc: 'Opened new branches and added classes for all grades 7–12 across multiple streams.' },
  { year: '2018', title: '1000+ Students', desc: 'Crossed the milestone of 1000 students with a 95% board exam success rate.' },
  { year: '2024', title: 'Digital Learning', desc: 'Launched hybrid learning programs combining classroom excellence with digital tools.' },
];

export default function OurStory() {
  return (
    <section className={`section ${styles.storySection}`} data-reveal style={{ '--reveal-delay': '180ms' }}>
      <div className="container">
        <div className={styles.storyHeader}>
          <span className={styles.badge}>Since 2010</span>
          <h2 className="section-title">Our Story of Excellence</h2>
          <p className="section-subtitle">
            Over a decade of nurturing young minds and building academic champions.
          </p>
        </div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYear}>{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
              <div className={styles.timelineDot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
