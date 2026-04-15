import { Suspense } from "react";
import { Link, NavLink, Outlet, useLoaderData, Await } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

import "../../server";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function Loader({ params, request }) {
  await requireAuth(request);
  return { van: getVan(params.id) };
}

export default function HostVanDetail() {
  const loadedHostVan = useLoaderData();

  function hostVanElement(van) {
    return (
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
    );
  }

  return (
    <section className="listed-van-detail-section">
      <Link to=".." relative="path" className="van-details-breadcrumb">
        <img src={arrow} alt="arrow back" />
        <span>Back to all vans</span>
      </Link>

      <Suspense fallback={<h3>Loading van...</h3>}>
        <Await resolve={loadedHostVan.van}>
          {(van) => hostVanElement(van)}
        </Await>
      </Suspense>
    </section>
  );
}
