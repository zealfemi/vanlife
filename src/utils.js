import { redirect, Navigate } from "react-router-dom";

export async function requireAuth(request) {
  const redirectTo = new URL(request.url).pathname;

  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in first&redirectTo=${redirectTo}`,
    );
    response.body = true;
    return response;
  }
  return null;
}
