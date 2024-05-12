import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import menu from "../images/menu.png";
import { useState } from "react";

export function NavBar() {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
    }

    return (
        <nav className={styles.navbar}>
            <h1>SUPKNOWLEDGE</h1>
            <div>
                <ul className={`${styles.navlinks} ${isHidden ? "" : styles.showed}`}>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/search">Recherche avancée</Link></li>
                    <li><Link to="/contact">Nous contacter</Link></li>
                    <li><p>Recherche : <input type="text"  placeholder="Nom d'une oeuvre..."/></p></li>
                </ul>
            </div>
            <img className={`${styles.menuicon}`} src={menu} alt="menu hamburger" onClick={handleClick} />
        </nav>
    );
}
