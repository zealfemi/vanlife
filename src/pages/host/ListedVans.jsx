import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../server";

export default function ListedVans() {
  const [listedVans, setListedVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setListedVans(data.vans));
  }, []);

  const listedVansEl = listedVans.map((van) => {
    return (
      <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="dashboard-van" key={van.id}>
          <div className="dashboard-van-details">
            <img src={van.imageUrl} alt={van.name} />
            <div>
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="dashboard-listed-vans">
      <div className="dashboard-listed-vans-header">
        <h1>Your listed vans</h1>
      </div>

      <div className="dashboard-vans-list">
        {listedVans.length > 0 ? listedVansEl : <h2>Loading...</h2>}
      </div>
    </section>
  );
}
