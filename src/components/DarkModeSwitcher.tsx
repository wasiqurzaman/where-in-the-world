import styles from "./DarkModeSwitcher.module.css";

import { IoMoonOutline } from "react-icons/io5";

function DarkModeSwitcher() {
  return (
    <button className={styles.btnDarkMode}>
      <IoMoonOutline />
      <span>Dark Mode</span>
    </button>
  );
}

export default DarkModeSwitcher;
