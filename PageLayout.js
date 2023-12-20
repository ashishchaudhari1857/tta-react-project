import React from 'react';
import styles from './PageLayout.module.css';

const PageLayout = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p>LOREM IPSUM</p>
          
        </div>
        <div>
        <a href="#">LINK1</a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.centerContent}>
          <p>THIS IS SOME CONTENT ALIGNED IN THE CENTER<br />
            VERTICALY AND HORIZONTALLY</p>
        </div>
        <div>
            Nothing
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT</p>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
