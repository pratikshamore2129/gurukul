import Link from 'next/link';
import styles from '../styles/Breadcrumb.module.css';

export default function Breadcrumb({ items, theme = 'default' }) {
  return (
    <nav
      className={`${styles.wrap} ${theme === 'light' ? styles.light : ''}`}
      aria-label="Breadcrumb"
    >
      <div className="container">
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className={styles.item}>
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.current} aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span className={styles.separator}>/</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
