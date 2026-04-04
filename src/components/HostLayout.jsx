import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <section className="grow-section">
      <nav className="host-page-nav">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/vans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </section>
  );
}
