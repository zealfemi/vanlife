import { useEffect } from "react";
import "../components/server";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import vanImg from "../assets/home-hero.png";

export default function Van() {
  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className="van-details-section">
      <Link to="vans" className="van-details-breadcrumb">
        <img src={arrow} alt="arrow back" />
        <span>Back to all vans</span>
      </Link>

      <div>
        <img src={vanImg} alt="van image" className="van-image" />

        <div className="van-details">
          <span className={`small-button van-type-simple`}>van type</span>
          <h1>van name</h1>
          <h2>
            $50<span>/day</span>
          </h2>
          <p>van desc</p>
          <button className="big-button">Rent this van</button>
        </div>
      </div>
    </section>
  );
}
