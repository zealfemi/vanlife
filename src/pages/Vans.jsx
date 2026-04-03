import { useState, useEffect } from "react";
import "../components/server";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansEl = vans.map((van) => {
    return (
      <div className="van-card" key={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-card-details">
          <div className="van-card-title">
            <p>{van.name}</p>
            <span className={`van-type-${van.type}`}>{van.type}</span>
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
    <section className="vans-page-section">
      <div className="vans-page-header">
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <div className="vans-filter-buttons">
            <button>simple</button>
            <button>luxury</button>
            <button>rugged</button>
          </div>

          <button className="vans-clear-filters-button">clear filters</button>
        </div>
      </div>

      <div className="vans-cards">{vansEl}</div>
    </section>
  );
}
