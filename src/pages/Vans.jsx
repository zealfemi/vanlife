import { useState, useEffect } from "react";
import "../server";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [filtered, setFiltered] = useState("all");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansEl = vans.map((van) => {
    const vanCard = (
      <div className="van-card" key={van.id}>
        <Link to={`/vans/${van.id}`}>
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

    if (filtered != "all" && van.type === filtered) {
      return vanCard;
    } else if (filtered === "all") {
      return vanCard;
    }
  });

  function filterVans(type) {
    setFiltered((prevFilter) => (prevFilter === type ? "all" : type));
  }

  return (
    <section className="vans-page-section">
      <div className="vans-page-header">
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <div className="vans-filter-buttons">
            <button
              onClick={() => filterVans("simple")}
              className={clsx("small-button", {
                "van-type-simple": filtered === "simple",
              })}
            >
              simple
            </button>
            <button
              onClick={() => filterVans("luxury")}
              className={clsx("small-button", {
                "van-type-luxury": filtered === "luxury",
              })}
            >
              luxury
            </button>
            <button
              onClick={() => filterVans("rugged")}
              className={clsx("small-button", {
                "van-type-rugged": filtered === "rugged",
              })}
            >
              rugged
            </button>
          </div>

          <button
            className="vans-clear-filters-button"
            onClick={() => filterVans("all")}
          >
            Clear filters
          </button>
        </div>

        <p className="filtered-by">
          {filtered != "all" && `Filtered by: ${filtered}`}
        </p>
      </div>

      <div className="vans-cards">{vansEl}</div>
    </section>
  );
}
