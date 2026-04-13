import { useState } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  Form,
  redirect,
  useActionData,
  replace,
} from "react-router-dom";

import { loginUser } from "../api";

export function Loader({ request }) {
  const url = new URL(request.url).searchParams.get("message");
  return url;
}

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const data = await loginUser({ email, password });
  localStorage.setItem("loggedIn", true);
  const res = redirect("/host", { replace: true });
  res.body = true;
  throw res;

  // return data;
}

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginMessage = useLoaderData();
  // const actionData = useActionData();
  // console.log(actionData);

  // const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(loginFormData);
  //   // loginUser(loginFormData).then((data) => console.log(data));

  //   setStatus("submitting");
  //   setError(null);
  //   loginUser(loginFormData)
  //     .then((data) => {
  //       navigate("/host", { replace: true });
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => setStatus("idle"));
  // }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>

      <div>
        {loginMessage && <h3 style={{ color: "red" }}>{loginMessage}</h3>}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>

      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button
          style={{ cursor: "pointer" }}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </Form>

      <div>
        Don't have an account? <Link to="">Create one now</Link>
      </div>
    </div>
  );
}

/*
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "b@b.com",
    password: "p123",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const loginMessage = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(loginFormData);
    // loginUser(loginFormData).then((data) => console.log(data));

    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate("/host", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>

      <div style={{ textAlign: "center" }}>
        {loginMessage && <h3 style={{ color: "red" }}>{loginMessage}</h3>}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button
          style={{ cursor: "pointer" }}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <div>
        Don't have an account? <Link to="">Create one now</Link>
      </div>
    </div>
  );
}
*/
