import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

export default function ListedVanDetails() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);

  if (!van) {
    return <h2 style={{ padding: "var(--default-padding)" }}>Loading...</h2>;
  }

  return (
    <section className="listed-van-detail-section">
      <Link to=".." relative="path" className="van-details-breadcrumb">
        <img src={arrow} alt="arrow back" />
        <span>Back to all vans</span>
      </Link>

      <div className="listed-van-detail">
        <div className="listed-van-short-detail">
          <img src={van.imageUrl} alt={van.name} />
          <div>
            <span className={`small-button van-type-${van.type}`}>
              {van.type}
            </span>
            <div>
              <h3>{van.name}</h3>
              <h4>
                ${van.price}
                <span>/day</span>
              </h4>
            </div>
          </div>
        </div>

        <nav className="listed-van-nav nav-links">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "is-active" : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ van }} />
      </div>
    </section>
  );
}
