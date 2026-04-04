import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ListedVanDetail() {
  const [van, setVan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);

  return (
    <>
      <div className="listed-van-full-detail">
        <p>
          <span className="medium-text">Name: </span>
          {van.name}
        </p>
        <p>
          <span className="medium-text">Category: </span>
          <span style={{ textTransform: "capitalize" }}>{van.type}</span>
        </p>
        <p>
          <span className="medium-text">Description: </span>
          {van.description}
        </p>
        <p>
          <span className="medium-text">Visibility:</span>
        </p>
      </div>
    </>
  );
}
