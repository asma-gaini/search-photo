import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul>
        <li>
          <NavLink to="category">Category</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
