'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/FAQ.module.css';

const faqs = [
  {
    category: 'Admissions',
    items: [
      { q: 'How do I enroll my child at Gurukul Eduworld?', a: 'You can visit our centre in person, call us, or fill out the enquiry form on our website. Our team will guide you through the admission process, which includes a brief assessment to understand your child\'s current level.' },
      { q: 'Is there an entrance exam for admission?', a: 'We conduct a simple diagnostic test (not an entrance exam) to understand the student\'s strengths and areas of improvement. This helps us provide personalised guidance from day one.' },
      { q: 'What are the fee structures?', a: 'Fees vary by grade and subject combination. We offer monthly, quarterly, and annual payment options. Please contact us for a detailed fee schedule. We also offer sibling discounts.' },
      { q: 'Do you offer trial classes before enrollment?', a: 'Yes! We offer a free trial class for new students. This gives both the student and parents a chance to experience our teaching style and environment before committing.' },
    ]
  },
  {
    category: 'Curriculum & Classes',
    items: [
      { q: 'Which boards do you cover?', a: 'We primarily cover CBSE and Maharashtra State Board (SSC/HSC). Our faculty is well-versed with both boards\' syllabi, exam patterns, and marking schemes.' },
      { q: 'What subjects are offered for Class 11 and 12?', a: 'For Class 11 and 12, we offer Science (Physics, Chemistry, Maths, Biology), Commerce (Accountancy, Economics, Business Studies), and Arts streams. We also offer Mathematics and English for both streams.' },
      { q: 'How many students are there per batch?', a: 'We keep our batch sizes small — typically 15–20 students per batch — to ensure individual attention and interactive learning.' },
      { q: 'Are there separate batches for different performance levels?', a: 'Yes, we have foundation batches for students who need extra support and advanced batches for students targeting top ranks and merit positions.' },
    ]
  },
  {
    category: 'Results & Support',
    items: [
      { q: "What is your success rate in board exams?', a: 'We maintain a consistent 95%+ success rate. Many of our students appear in the top 10 merit lists of their respective boards each year." },
      { q: 'Do you provide study materials?', a: 'Yes, all enrolled students receive comprehensive study notes, chapter-wise question banks, previous year papers, and mock test series — all included in the fees.' },
      { q: 'Is doubt-clearing support available outside class hours?', a: 'Absolutely. Students can approach faculty for doubt resolution during designated doubt-clearing sessions. We also have a WhatsApp group for quick academic queries.' },
      { q: 'Do you provide career counselling?', a: 'Yes, especially for Class 10 and 12 students. We hold career counselling sessions to help students choose the right stream or college based on their interests and abilities.' },
    ]
  }
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.answer}>{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} data-reveal>
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about admissions, classes, and more</p>
          </div>
        </section>

        <section className="section" data-reveal style={{ '--reveal-delay': '100ms' }}>
          <div className="container">
            <div className={styles.faqWrap}>
              {faqs.map((group, i) => (
                <div key={i} className={styles.group}>
                  <h2 className={styles.groupTitle}>{group.category}</h2>
                  {group.items.map((item, j) => (
                    <AccordionItem key={j} q={item.q} a={item.a} />
                  ))}
                </div>
              ))}

              <div className={styles.cta}>
                <h3>Still have questions?</h3>
                <p>{"Our team is happy to help you. Reach out and we'll get back to you within 24 hours."}</p>
                <a href="/about#contact" className="btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
