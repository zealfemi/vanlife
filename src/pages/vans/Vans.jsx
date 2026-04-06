import { useState, useEffect } from "react";
import "../../server";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { getVans } from "../../api";

export function loader() {
  return "Van data is here";
}

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const filtered = searchParams.get("type");

  useEffect(() => {
    async function loadGetVans() {
      setLoading(true);

      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setApiError(err);
      } finally {
        setLoading(false);
      }
    }

    loadGetVans();
  }, []);

  const filteredType = filtered
    ? vans.filter((van) => van.type.toLowerCase() === filtered)
    : vans;

  const vansEl = filteredType.map((van) => {
    return (
      <div className="van-card" key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: filtered }}
        >
          <div className="van-card-image">
            <img src={van.imageUrl} alt={van.name} />
            <span className={`small-button van-type-${van.type}`}>
              {van.type}
            </span>
          </div>
        </Link>
        <div className="van-card-details">
          <div className="van-card-title">
            <p>{van.name}</p>
          </div>
          <div className="van-card-pricing">
            <p>${van.price}</p>
            <span>/day</span>
          </div>
        </div>
      </div>
    );
  });

  if (loading) {
    return (
      <section className="vans-page-section grow-section">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (apiError != null) {
    return (
      <section className="vans-page-section grow-section">
        <h2>There was an error: {apiError.message}</h2>
      </section>
    );
  }

  return (
    <section className="vans-page-section grow-section">
      <div className="vans-page-header">
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <div className="vans-filter-buttons">
            <button
              onClick={() => {
                filtered === "simple"
                  ? setSearchParams({})
                  : setSearchParams({ type: "simple" });
              }}
              className={clsx("small-button", {
                "van-type-simple": filtered === "simple",
              })}
            >
              simple
            </button>
            <button
              onClick={() => {
                filtered === "luxury"
                  ? setSearchParams({})
                  : setSearchParams({ type: "luxury" });
              }}
              className={clsx("small-button", {
                "van-type-luxury": filtered === "luxury",
              })}
            >
              luxury
            </button>
            <button
              onClick={() => {
                filtered === "rugged"
                  ? setSearchParams({})
                  : setSearchParams({ type: "rugged" });
              }}
              className={clsx("small-button", {
                "van-type-rugged": filtered === "rugged",
              })}
            >
              rugged
            </button>
          </div>

          {filtered && (
            <button
              onClick={() => {
                setSearchParams({});
              }}
              className="vans-clear-filters-button"
            >
              Clear filters
            </button>
          )}
        </div>

        <p className="filtered-by">
          {filtered != null && `Filtered by: ${filtered}`}
        </p>
      </div>

      <div className="vans-cards">{vansEl}</div>
    </section>
  );
}
