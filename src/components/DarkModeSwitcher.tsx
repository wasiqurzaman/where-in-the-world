import { useDarkMode } from "../context/DarkModeContext";
import styles from "./DarkModeSwitcher.module.css";

import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

function DarkModeSwitcher() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={styles.btnDarkMode} onClick={toggleDarkMode}>
      {!isDarkMode ? (
        <>
          <IoMoonOutline />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <IoSunnyOutline />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
}

export default DarkModeSwitcher;
