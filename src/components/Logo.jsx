import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <Link to="/">
      <img
        src="..\public\image\logo chorom.png"
        alt="searchPhoto logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
