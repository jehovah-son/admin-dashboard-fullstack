import Image from "next/image";
import styles from "../../../component/dashboard/ProductPage Compo/product.module.css";
import Link from "next/link";
import NoProduct from "../../../../public/noproduct.jpg";
import Search from "../../../component/dashboard/search component/search";
import Pagination from "../../../component/dashboard/pagination/pagination";
import { fetchProduct } from "../../lib/data";
import { DeleteProduct } from "../../lib/actions";

export default async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  //default is going to be 1 if there is no page in the url is going to be 1
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProduct(q, page);

  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/product/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img ? product.img : NoProduct}
                    alt="user"
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>

              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toDateString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/product/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={DeleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} page={page} />
    </div>
  );
}
