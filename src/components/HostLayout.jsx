import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <section className="grow-section">
      <nav className="host-page-nav nav-links">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}
