// import styles from "./CreateAcount.module.css";
// function CreateAcount() {
//   return <div>New acount</div>;
// }

// export default CreateAcount;
import styles from "./Login.module.css";
import PageNav from "./PageNav";
import { useState } from "react";
import Button from "./Button";
import { Link, Outlet, useNavigate } from "react-router-dom";

function CreateAcount() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [passWord, SetPassword] = useState("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>Create</h3>
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
        <Button type="send">Send</Button>
      </form>
    </div>
  );
}

export default CreateAcount;
