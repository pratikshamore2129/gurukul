'use client';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

function AddressIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function HoursIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', grade: '', message: '' });
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact" data-reveal style={{ '--reveal-delay': '220ms' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Get in Touch</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          {"Ready to start your academic journey? We'd love to hear from you."}
        </p>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><AddressIcon /></div>
              <div>
                <strong>Address</strong>
                <p>123 Education Lane, Knowledge Park, Mumbai, Maharashtra - 400001</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><PhoneIcon /></div>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
                <p>+91 91234 56789</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><EmailIcon /></div>
              <div>
                <strong>Email</strong>
                <p>info@gurukuleduworld.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><HoursIcon /></div>
              <div>
                <strong>Hours</strong>
                <p>Mon-Sat: 7:00 AM - 8:00 PM</p>
                <p>Sun: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
            <div className={styles.mapEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Enquire Now</h3>
            {submitted && (
              <div className={styles.successMsg}>
                Thank you! {"We'll contact you soon."}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Interested Course</label>
                <select name="grade" value={form.grade} onChange={handleChange}>
                  <option value="">Select Course</option>
                  {['8th', '9th', '10th', '11th', '12th'].map((grade) => (
                    <option key={grade} value={grade}>{grade} Courses</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Any specific queries or subjects of interest..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
