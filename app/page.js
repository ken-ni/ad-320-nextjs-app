import Landing from './landing.js';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing/>
    </main>
  );
}