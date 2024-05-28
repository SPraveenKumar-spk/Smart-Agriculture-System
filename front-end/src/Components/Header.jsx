function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          {" "}
          <h1>AgriSmart</h1>
        </div>

        <div className="navlinks">
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
