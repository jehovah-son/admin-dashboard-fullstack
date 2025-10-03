import styles from "../../../../component/dashboard/UserPage Compo/singleuserpage/singleuserpage.module.css";
import Image from "next/image";
import NoAvatar from "../../../../../public/noavatar.png";
import { fetchUserById } from "../../../lib/data";
import { UpDateUser } from "../../../lib/actions";

export default async function SingleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img ? user.img : NoAvatar} alt="no avatar" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={UpDateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" placeholder={user.password} />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            defaultValue={user.Admin ? "true" : "false"}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={user.isActive ? "true" : "false"}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
