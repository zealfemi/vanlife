import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { van } = useOutletContext();

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
          <span className="medium-text">Visibility: </span> Public
        </p>
      </div>
    </>
  );
}
