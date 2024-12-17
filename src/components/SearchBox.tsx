import { useState } from "react";
import styles from "./SearchBox.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBox({ onSearch }: { onSearch: (text: string) => void }) {
  const [text, setText] = useState("");

  return (
    <div className={styles.searchBox}>
      <FaMagnifyingGlass className={styles.searchIcon} size={17.5} />
      <input
        type="text"
        placeholder="Search for a country..."
        className={styles.searchInput}
        value={text}
        onChange={e => {
          setText(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
