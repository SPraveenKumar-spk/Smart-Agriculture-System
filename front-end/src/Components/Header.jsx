import styles from "../Styles/Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          {" "}
          <h1>AgriSmart</h1>
        </div>

        <div className={styles.navlinks}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
