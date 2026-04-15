import { Suspense } from "react";
import { Link, useLoaderData, Await } from "react-router-dom";
import star from "../../assets/star.svg";

import "../../server";

export default function Dashboard() {
  const loadedHostVans = useLoaderData();

  function hostVansElement(hostVans) {
    const listedVansEl = hostVans.map((van) => {
      return (
        <div className="dashboard-van" key={van.id}>
          <div className="dashboard-van-details">
            <img src={van.imageUrl} alt={van.name} />
            <div>
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>

          <p className="medium-text">Edit</p>
        </div>
      );
    });
    return <div className="dashboard-vans-list">{listedVansEl}</div>;
  }

  return (
    <section>
      <div className="dashboard-welcome">
        <div>
          <h1 className="host-h1">Welcome!</h1>
          <p>
            Income last <span className="medium-text">30 days</span>
          </p>
          <h2 className="income">$2,260</h2>
        </div>

        <p className="medium-text">
          <Link to="income" style={{ color: "black", textDecoration: "none" }}>
            Details
          </Link>
        </p>
      </div>

      <div className="dashboard-review-score">
        <div>
          <h3>Review score</h3>

          <div>
            <img src={star} alt="rating star" />
            <p>
              <span className="medium-text">5.0</span>/5
            </p>
          </div>
        </div>

        <p className="medium-text">
          <Link to="reviews" style={{ color: "black", textDecoration: "none" }}>
            Details
          </Link>
        </p>
      </div>

      <div className="dashboard-listed-vans">
        <div className="dashboard-listed-vans-header">
          <h3>Your listed vans</h3>
          <p className="medium-text">
            <Link to="vans" style={{ color: "black", textDecoration: "none" }}>
              View all
            </Link>
          </p>
        </div>

        <Suspense fallback={<h3>Loading vans...</h3>}>
          <Await resolve={loadedHostVans.hostVans}>
            {(hostVans) => hostVansElement(hostVans)}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
