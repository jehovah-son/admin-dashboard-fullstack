import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Max Dev</div>
      <div className={styles.text}>Copyright © 2023</div>
    </div>
  );
}
