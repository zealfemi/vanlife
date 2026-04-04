import star from "../../assets/star.svg";
export default function Dashboard() {
  return (
    <section>
      <div className="dashboard-welcome">
        <div>
          <h1>Welcome!</h1>
          <p>
            Income last <span className="medium-text">30 days</span>
          </p>
          <h2 className="income">$2,260</h2>
        </div>

        <p className="medium-text">Details</p>
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

        <p className="medium-text">Details</p>
      </div>

      <div className="dashboard-listed-vans">
        <div className="dashboard-listed-vans-header">
          <h3>Your listed vans</h3>
          <p className="medium-text">View all</p>
        </div>

        <div className="dashboard-vans-list">
          <div className="dashboard-van">
            <div className="dashboard-van-details">
              <img src="" alt="van name" />
              <div>
                <h3>Van name</h3>
                <p>$30/day</p>
              </div>
            </div>

            <p className="medium-text">Edit</p>
          </div>
          <div className="dashboard-van">
            <div className="dashboard-van-details">
              <img src="" alt="van name" />
              <div>
                <h3>Van name</h3>
                <p>$30/day</p>
              </div>
            </div>

            <p className="medium-text">Edit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
