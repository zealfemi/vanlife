import { useRouteError } from "react-router-dom";

export default function ApiError() {
  const error = useRouteError();

  return (
    <section className="vans-page-section grow-section">
      <h2>There was an error: {error.message}!</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
}
