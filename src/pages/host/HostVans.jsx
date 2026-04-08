import { Link, useLoaderData } from "react-router-dom";
import "../../server";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function Loader() {
  await requireAuth();
  return getHostVans();
}

export default function ListedVans() {
  const listedVans = useLoaderData();

  const listedVansEl = listedVans.map((van) => {
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

  return (
    <section className="dashboard-listed-vans">
      <div className="dashboard-listed-vans-header">
        <h1>Your listed vans</h1>
      </div>

      <div className="dashboard-vans-list">{listedVansEl}</div>
    </section>
  );
}
