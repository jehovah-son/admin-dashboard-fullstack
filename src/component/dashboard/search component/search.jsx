"use client";

import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder, initialValue }) {
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams();
    if (e.target.value) {
      params.set("q", e.target.value);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        defaultValue={initialValue}
        onChange={handleSearch}
      />
    </div>
  );
}

// export default function Search({ placeholder }) {
//   const searchParams = useSearchParams();
//   const pathName = usePathname();
//   const { replace } = useRouter();

//   const handleSearch = (e) => {
//     // with this params we can change the url using the replace method
//     const params = new URLSearchParams(searchParams);
//     // if event target and value exist we set the params  else delete the query
//     if (e.target.value) {
//       params.set("q", e.target.value);
//     } else {
//       params.delete("q");
//     }
//     replace(`${pathName}?${params}`);
//   };

//   return (
//     <div className={styles.container}>
//       <MdSearch />
//       <input
//         type="text"
//         placeholder={placeholder}
//         className={styles.input}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// }
