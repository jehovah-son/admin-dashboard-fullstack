import styles from "../../../../component/dashboard/ProductPage Compo/adduser.module.css";
export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" required />

        {/* IsAdmin */}
        <select name="iAdmin" id="isAdmin" selected>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {/* IsACtive */}
        <select name="iAdmin" id="isAdmin" selected>
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          placeholder="Address"
          name="address"
          rows="10"
          id="address"
        ></textarea>

        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
}
