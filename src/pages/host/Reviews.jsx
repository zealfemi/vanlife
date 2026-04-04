import star from "../../assets/star.svg";
export default function Reviews() {
  return (
    <section className="reviews-section">
      <div>
        <h1>Your reviews</h1>

        <p>
          last <span className="medium-text">30 days</span>
        </p>
      </div>

      <div>
        <h2>5.0</h2>

        <div>
          <img src={star} alt="rating star" />
          <small className="medium-text">overall rating</small>
        </div>
      </div>
    </section>
  );
}
