import styles from "../../../../component/dashboard/UserPage Compo/singleuserpage/singleuserpage.module.css";
import Image from "next/image";
import NoAvatar from "../../../../../public/noavatar.png";
import { fetchUserById } from "../../../lib/data";

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
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="John Doe" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="+234" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="Lagos" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
