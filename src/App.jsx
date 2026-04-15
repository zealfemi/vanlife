import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// LAYOUTS
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// PAGES
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Login, {
  Loader as loginLoader,
  Action as loginFormAction,
} from "./pages/Login";

// VANS PAGE
import Vans, { Loader as vansLoader } from "./pages/vans/Vans";
import Van, { Loader as vanDetailLoader } from "./pages/vans/VanDetail";

// HOST PAGE
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans, { Loader as HostVansLoader } from "./pages/host/HostVans";
import HostVanDetail, {
  Loader as HostVanDetailLoader,
} from "./pages/host/HostVanDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";

// API ERROR
import ApiError from "./components/ApiError";

// SERVER
import "./server";

// AUTH
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginFormAction}
      />

      {/* VANS */}
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<ApiError />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<Van />}
        loader={vanDetailLoader}
        errorElement={<ApiError />}
      />

      {/* HOST DETAILS */}
      <Route
        path="host"
        element={<HostLayout />}
        loader={async ({ request }) => await requireAuth(request)}
        errorElement={<ApiError />}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />

        <Route path="vans" element={<HostVans />} loader={HostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={HostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
