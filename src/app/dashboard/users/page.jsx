import Search from "../../../component/dashboard/search component/search";
import styles from "../../../component/dashboard/UserPage Compo/user.module.css";
import Link from "next/link";
import Image from "next/image";
import NoAvatar from "../../../../public/noavatar.png";
import Pagination from "../../../component/dashboard/pagination/pagination";
import { fetchUser } from "../../lib/data";

export default async function UserPage({ searchParams }) {
  const q = searchParams?.q || "";
  //default is going to be 1 if there is no page in the url is going to be 1
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUser(q, page);

  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." initialValue={q} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img ? user.img : NoAvatar}
                    alt="user"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>

              <td>{user.email}</td>
              <td>{user.createdAt?.toDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
