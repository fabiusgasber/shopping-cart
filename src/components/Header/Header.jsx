import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

const Header = ({ items = [], handleChange, deleteItem }) => {

  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link id={styles.logoContainer} to="/">
        <img id={styles.logo} src="/logo.png" alt="Shop Logo (opens homepage)" />
        <h1>SuperStore</h1>
      </Link>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.menuLink}>
            <Link to="/" id={location.pathname === "/" ? styles.activeLink : ""}>Home</Link>
          </li>
          <li className={styles.menuLink} >
            <Link to="/shop" id={location.pathname === "/shop" || location.pathname.includes("product") ? styles.activeLink : ""}>Shop</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.asideMenu}>
        <ul className={styles.ul}>
          <li>
            <Modal handleChange={handleChange} deleteItem={deleteItem} items={items} initialShow={false} title="Cart" />
          </li>
          <li>
            <Link to="#" className={styles.asideLink}>
              <img className="icons" alt="search (opens homepage)" src="/search.png"/>
            </Link>
          </li>
          <li>
            <Link to="#" className={"primaryBtn" + " " + styles.asideLink}>Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  items: PropTypes.array,
  handleChange: PropTypes.func,
  deleteItem: PropTypes.func,
}

export default Header;
