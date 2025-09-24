import Image from "next/image";
import styles from "./transaction.module.css";
import NoAvatar from "../../../../public/noavatar.png";
export default function Transaction() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          {/* first user */}
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* first user */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={NoAvatar}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2023</td>

            <td>$3.200</td>
          </tr>
          {/* second user */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={NoAvatar}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.200</td>
          </tr>
          {/* third user */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={NoAvatar}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <span> John Doe</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2023</td>
            <td>$3.200</td>
          </tr>
          {/* fourth user */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={NoAvatar}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
