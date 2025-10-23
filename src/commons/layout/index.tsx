import styles from "./styles.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>민지의 다이어리</h1>
        </div>
      </header>
      <div className={styles.gap}></div>
      <section className={styles.banner}>
        <div className={styles.bannerImage}></div>
      </section>
      <div className={styles.gap}></div>
      <nav className={styles.navigation}>
        <div className={styles.tabContainer}>
          <div className={`${styles.tab} ${styles.tabActive}`}>
            <span className={styles.tabText}>일기보관함</span>
          </div>
          <div className={styles.tab}>
            <span className={styles.tabText}>사진보관함</span>
          </div>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.footerLogo}>민지의 다이어리</h2>
          <div className={styles.footerInfo}>
            <p className={styles.footerOwner}>대표 : {"{name}"}</p>
          </div>
          <p className={styles.footerCopyright}>
            Copyright © 2024. {"{name}"} Co., Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}
