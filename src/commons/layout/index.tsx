import styles from "./styles.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <div className={styles.gap}></div>
      <section className={styles.banner}></section>
      <div className={styles.gap}></div>
      <nav className={styles.navigation}></nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

