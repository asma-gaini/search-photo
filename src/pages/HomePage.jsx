import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
import Search from "../components/Search";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <main className={styles.homepage}>
      <PageNav />
      <Search />
      <div className={styles.container}>
        <p>Hello friends!</p>
        <p>
          This is a site for finding and searching photos, and you can search
          for your favorite photos here and click on any category😉. I am glad
          that you chose our site😍🥰
        </p>
        <form className={styles.form}>
          <label htmlFor="search">
            <img src="..\public\image\search1.png" alt="searchLabel" />
          </label>
          <input
            id="search"
            placeholder="search category photo"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
    </main>
  );
}

export default HomePage;
