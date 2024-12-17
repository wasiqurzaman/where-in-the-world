import DarkModeSwitcher from "./DarkModeSwitcher";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <span className={styles.logoText}>Where in the world?</span>
        <DarkModeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
