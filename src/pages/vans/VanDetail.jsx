import { Suspense } from "react";
import "../../server";
import arrow from "../../assets/arrow.svg";
import { Link, useLocation, useLoaderData, Await } from "react-router-dom";
import { getVans } from "../../api";

export function Loader({ params }) {
  return { van: getVans(params.id) };
}

export default function VanDetail() {
  const loadedVan = useLoaderData();
  const location = useLocation();

  const filters = location.state.search ? `?${location.state.search}` : "";
  const typeFilter = location.state?.type || "all";

  function vanElement(van) {
    return (
      <div>
        <img src={van.imageUrl} alt={van.name} className="van-image" />

        <div className="van-details">
          <span className={`small-button van-type-${van.type}`}>
            {van.type}
          </span>
          <h1>{van.name}</h1>
          <h2>
            ${van.price}
            <span>/day</span>
          </h2>
          <p>{van.description}</p>

          <button className="big-button">Rent this van</button>
        </div>
      </div>
    );
  }

  return (
    <section className="van-details-section grow-section">
      <Link
        to={`..${filters}`}
        relative="path"
        className="van-details-breadcrumb"
      >
        <img src={arrow} alt="arrow back" />
        <span>Back to {typeFilter} vans</span>
      </Link>

      <Suspense fallback={<h3>Loading van...</h3>}>
        <Await resolve={loadedVan.van}>{(van) => vanElement(van)}</Await>
      </Suspense>
    </section>
  );
}
