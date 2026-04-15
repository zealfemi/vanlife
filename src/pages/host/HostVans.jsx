import { Suspense } from "react";
import { Link, useLoaderData, Await } from "react-router-dom";
import "../../server";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function Loader({ request }) {
  await requireAuth(request);
  return { hostVans: getHostVans() };
}

export default function ListedVans() {
  const loadedHostVans = useLoaderData();

  function hostVansElement(hostVans) {
    const listedVansEl = hostVans.map((van) => {
      return (
        <Link
          to={van.id}
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

    return <div className="dashboard-vans-list">{listedVansEl}</div>;
  }

  return (
    <section className="dashboard-listed-vans">
      <div className="dashboard-listed-vans-header">
        <h1>Your listed vans</h1>
      </div>

      <Suspense fallback={<h3>Loading vans...</h3>}>
        <Await resolve={loadedHostVans.hostVans}>
          {(hostVans) => hostVansElement(hostVans)}
        </Await>
      </Suspense>
    </section>
  );
}
