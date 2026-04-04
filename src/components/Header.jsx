import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header-title">
          <Link to="">#VANLIFE</Link>
        </div>
        <div className="nav-links">
          <NavLink
            to="host"
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            host
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            about
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
