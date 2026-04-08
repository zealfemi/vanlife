import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="error-page">
      <h1>Sorry, the page you were looking for was not found!</h1>
      <Link to=".." className="big-button">
        Return to home
      </Link>
    </section>
  );
}
