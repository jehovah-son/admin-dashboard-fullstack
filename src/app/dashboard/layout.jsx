import NavBar from "../../component/dashboard/navbar/navbar";
import SideBar from "../../component/dashboard/sidebar/sidebar";
import styles from "../../component/dashboard/dashboard.module.css";

export default function layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
}
