"use client";
import styles from "../navbar/navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.icons}>
          <div className={styles.item}>
            <MdPublic size={20} />
          </div>
          <div className={styles.item}>
            <MdNotifications size={20} />
          </div>
          <div className={styles.item}>
            <MdOutlineChat size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
