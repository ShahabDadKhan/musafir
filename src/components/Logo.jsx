import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link style={{ display: "flex" }} to="/">
      <img
        src="/public/logo1.png"
        alt="WorldWise logo"
        className={styles.logo}
      />
      <img
        src="/public/logo2.png"
        alt="WorldWise logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
