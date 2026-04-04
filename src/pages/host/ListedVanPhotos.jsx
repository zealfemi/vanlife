import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ListedVanPhotos() {
  const [van, setVan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);
  return (
    <>
      <div className="listed-van-photos">
        <img src={van.imageUrl} alt={van.name} />
      </div>
    </>
  );
}
