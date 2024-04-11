import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useState } from "react";
import Button from "../components/Button";
import { Link, Outlet } from "react-router-dom";

function Login() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [passWord, SetPassword] = useState("");

  return (
    <div>
      <PageNav />
      <h2>login</h2>
      {/* <Outlet /> */}
    </div>
  );
}

export default Login;
