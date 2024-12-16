import styles from './AnimatedHeading.module.css';

export default function AnimatedHeading({ title, titleClass }) {
  return (
    <div className={`${titleClass}`}>
      <h1 className={styles.text}>{title}</h1>
    </div>
  );
}
