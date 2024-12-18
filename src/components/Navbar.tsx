import { Link } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.link}>
          <span className={styles.logoText}>Where in the world?</span>
        </Link>
        <DarkModeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
