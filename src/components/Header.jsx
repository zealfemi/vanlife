import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header-title">
          <Link to="">#VANLIFE</Link>
        </div>
        <div className="nav-links">
          <Link to="/host">host</Link>
          <Link to="/about">about</Link>
          <Link to="/vans">vans</Link>
        </div>
      </nav>
    </header>
  );
}
