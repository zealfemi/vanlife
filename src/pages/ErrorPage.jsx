import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="grow-section error-page">
      <h1>Sorry, the page you were looking for was not found!</h1>
      <Link to="" className="big-button">
        Back to home
      </Link>
    </section>
  );
}
