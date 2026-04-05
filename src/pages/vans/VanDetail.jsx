import { useState, useEffect } from "react";
import "../../server";
import arrow from "../../assets/arrow.svg";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();

  const filters = location.state.search ? `?${location.state.search}` : "";
  const typeFilter = location.state?.type || "all";

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params]);

  if (!van) {
    return <section className="van-details-section grow-section"></section>;
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

      {van ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}
