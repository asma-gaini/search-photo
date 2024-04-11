import styles from "./Login.module.css";
import PageNav from "./PageNav";
import { useState } from "react";
import Button from "./Button";
import { Link, Outlet } from "react-router-dom";

function LoginForm() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [passWord, SetPassword] = useState("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>Login</h3>
        <div className={styles.row}>
          <label htmlFor="username">🧑‍💼Username: </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => SetUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">📧Email: </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="passWord">🔑Password: </label>
          <input
            type="password"
            id="passWord"
            placeholder="passWord"
            onChange={(e) => SetPassword(e.target.value)}
            value={passWord}
          />
        </div>
        <div className={styles.link}>
          <Link to="/login/create">Creat new account</Link>
          <a>Forget password?</a>
        </div>
        <Button type="send">Send</Button>
      </form>
    </div>
  );
}

export default LoginForm;
