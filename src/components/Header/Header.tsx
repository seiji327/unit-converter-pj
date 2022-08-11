import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="header__link-h1">Unit-Converter</h1>
      </Link>
    </header>
  );
};

export default Header;
