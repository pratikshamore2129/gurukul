import styles from '../styles/Home.module.css';

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.52l-5.88 3.1 1.12-6.56L2.48 9.42l6.58-.96L12 2.5Z" />
    </svg>
  );
}

const testimonials = [
  { name: 'Ananya Sharma', grade: 'Class 12', text: 'Gurukul Eduworld transformed my understanding of Physics and Maths. I scored 94% in boards!', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
  { name: 'Rohan Patel', grade: 'Class 10', text: 'The teachers are incredibly supportive and always available for doubts. Best institute ever!', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
  { name: 'Priya Mehta', grade: 'Class 11', text: 'Regular tests and personal attention helped me improve from 65% to 89%. Highly recommended!', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' },
  { name: 'Arjun Singh', grade: 'Class 9', text: 'The study material and mock tests are top-notch. My confidence has grown tremendously.', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Sneha Joshi', grade: 'Class 12', text: 'Got into my dream engineering college thanks to the structured preparation at Gurukul Eduworld.', photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80' },
  { name: 'Vikram Rao', grade: 'Class 8', text: 'Even at Class 8, the foundation they build is exceptional. My son loves going to class!', photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80' },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonialSection}`} data-reveal style={{ '--reveal-delay': '120ms' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>What Students Say</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          Real stories from real students who transformed their academic journey
        </p>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={`${testimonial.name}-${testimonial.grade}`} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className={styles.testimonialText}>
                "{testimonial.text}"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>
                  <img src={testimonial.photo} alt={testimonial.name} className={styles.avatarImage} loading="lazy" />
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
