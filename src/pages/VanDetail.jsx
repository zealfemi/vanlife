import { useState, useEffect } from "react";
import "../server";
import arrow from "../assets/arrow.svg";
import { Link, useParams } from "react-router-dom";
import "../server";

export default function Van() {
  const params = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params]);

  return (
    <section className="van-details-section grow-section">
      <Link to="/vans" className="van-details-breadcrumb">
        <img src={arrow} alt="arrow back" />
        <span>Back to all vans</span>
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
