import styles from "./styles.module.css";

export default function Diaries() {
  return (
    <div className={styles.container}>
      <div className={styles.gap1}></div>
      <div className={styles.search}></div>
      <div className={styles.gap2}></div>
      <div className={styles.main}></div>
      <div className={styles.gap3}></div>
      <div className={styles.pagination}></div>
      <div className={styles.gap4}></div>
    </div>
  );
}
