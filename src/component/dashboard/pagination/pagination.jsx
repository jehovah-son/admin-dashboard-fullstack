"use client";
import styles from "../pagination/pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2;

  const hasPrevious = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;

  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", parseInt(page) - 1);
    } else {
      params.set("page", parseInt(page) + 1);
    }

    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrevious}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}
