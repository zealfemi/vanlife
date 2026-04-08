import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <>
      <div className="listed-van-pricing">
        <p>
          <span>${van.price}</span>/day
        </p>
      </div>
    </>
  );
}
