import styles from "../../../../component/dashboard/UserPage Compo/singleproductpage/singleproductpage.module.css";
import Image from "next/image";
import NoAvatar from "../../../../../public/noavatar.png";
import { fetchProductById } from "../../../lib/data";
import { UpDateProduct } from "../../../lib/actions";

export default async function SingleProductPage({ params }) {
  const { id } = params;
  const product = await fetchProductById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img ? product.img : NoAvatar}
            alt="no avatar"
            fill
          />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action={UpDateProduct} className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
