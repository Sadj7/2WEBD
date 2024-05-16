import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import menu from "../images/menu.png";
import { useState } from "react";

export function NavBar() {
  const [isHidden, setIsHidden] = useState(true);
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  const handleChange = (name: string) => {
    setSearch(name);
  };

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className={styles.navbar}>
      <h1>SUPKNOWLEDGE</h1>
      <div>
        <ul className={`${styles.navlinks} ${isHidden ? "" : styles.showed}`}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/deepsearch">Recherche avancée</Link>
          </li>
          <li>
            <Link to="/contact">Nous contacter</Link>
          </li>
          <li>
            <p>
              Recherche :
              <input
                type="text"
                placeholder="Nom d'une oeuvre..."
                onChange={(e) => handleChange(e.target.value)}
              />
              <Link to={`/search/${search}`}>
                <button
                  className={styles.SearchButton}
                  onClick={handleSearch}
                  disabled={search === ""}
                >
                  🔍
                </button>
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <img
        className={`${styles.menuicon}`}
        src={menu}
        alt="menu hamburger"
        onClick={handleClick}
      />
    </nav>
  );
}
