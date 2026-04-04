import { useOutletContext } from "react-router-dom";

export default function ListedVanPhotos() {
  const { van } = useOutletContext();

  return (
    <>
      <div className="listed-van-photos">
        <img src={van.imageUrl} alt={van.name} />
      </div>
    </>
  );
}
