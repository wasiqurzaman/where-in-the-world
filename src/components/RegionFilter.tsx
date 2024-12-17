import { useState } from "react";
import styles from "./RegionFilter.module.css";

function RegionFilter({ onFilter }: { onFilter: (filter: string) => void }) {
  const [filter, setFilter] = useState("");

  return (
    <select
      className={styles.regionFilter}
      value={filter}
      onChange={e => {
        console.log(e.target.value);
        setFilter(e.target.value);
        onFilter(e.target.value);
      }}
    >
      <option value="" className={styles.options}>
        Filter by Region
      </option>
      <option value="africa" className={styles.options}>
        Africa
      </option>
      <option value="americas" className={styles.options}>
        Americas
      </option>
      <option value="asia" className={styles.options}>
        Asia
      </option>
      <option value="europe" className={styles.options}>
        Europe
      </option>
      <option value="oceania" className={styles.options}>
        Oceania
      </option>
    </select>
  );
}

export default RegionFilter;
