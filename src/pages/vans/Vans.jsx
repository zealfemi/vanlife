import { useState, useEffect } from "react";
import "../../server";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import clsx from "clsx";

export default function Vans() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const filtered = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
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
