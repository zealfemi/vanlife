export default function ListedVans() {
  return (
    <section className="dashboard-listed-vans">
      <div className="dashboard-listed-vans-header">
        <h1>Your listed vans</h1>
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
    </section>
  );
}
