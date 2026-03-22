'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const slides = [
  {
    title: 'Empowering Future Leaders',
    subtitle: 'Expert coaching for grades 7-12. Build strong foundations, achieve extraordinary results.',
    image: 'https://plus.unsplash.com/premium_photo-1683887034339-9c05d3f1b37d?mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&crop=faces%2Cedges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ2MjA1OTUxfA&ixlib=rb-4.0.3',
    alt: 'Students learning in a modern academic environment',
  },
  {
    title: 'Excellence in Every Subject',
    subtitle: 'Science, Maths, Commerce and Arts with board-focused guidance and consistent academic support.',
    image: 'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-364.jpg',
    alt: 'Academic dashboard and classroom progress illustration',
  },
  {
    title: 'Your Success, Our Mission',
    subtitle: 'Thousands of students have achieved top marks with Gurukul Eduworld. Join them today.',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1RVI67.img?w=1280&h=720&m=4&q=68',
    alt: 'Student achievement and academic progress illustration',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      <div className={styles.imageLayer}>
        <img
          src={slide.image}
          alt={slide.alt}
          className={styles.heroImage}
          loading={current === 0 ? 'eager' : 'lazy'}
        />
      </div>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{slide.title}</h1>
        <p className={styles.subtitle}>{slide.subtitle}</p>
        <div className={styles.actions}>
          <Link href="/courses" className={styles.btnWhite}>View Courses</Link>
          <Link href="/about#contact" className={styles.btnOutlineWhite}>Contact Us</Link>
        </div>
        <div className={styles.dots}>
          {slides.map((item, index) => (
            <button
              key={item.image}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
