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
import Login from "./pages/Login";

// VANS PAGE
import Vans, { Loader as vansLoader } from "./pages/vans/Vans";
import Van, { Loader as vanDetailLoader } from "./pages/vans/VanDetail";

// HOST PAGE
import Dashboard, { Loader as hostVansLoader } from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import ListedVans from "./pages/host/ListedVans";
import ListedVanDetails, {
  Loader as listedVanDetailsLoader,
} from "./pages/host/ListedVanDetails";
import ListedVanDetail from "./pages/host/ListedVanDetail";
import ListedVanPricing from "./pages/host/ListedVanPricing";
import ListedVanPhotos from "./pages/host/ListedVanPhotos";

// API ERROR
import ApiError from "./components/ApiError";

// AUTH
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={async () => {
        return null;
      }}
    >
      <Route path="*" element={<NotFound />} />
      <Route
        index
        element={<Home />}
        loader={async () => {
          return null;
        }}
      />
      <Route
        path="about"
        element={<About />}
        loader={async () => {
          return null;
        }}
      />
      <Route
        path="login"
        element={<Login />}
        loader={async () => {
          return null;
        }}
      />

      <Route
        path="vans"
        element={<Vans />}
        errorElement={<ApiError />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<Van />} loader={vanDetailLoader} />

      <Route
        path="host"
        element={<HostLayout />}
        loader={async () => {
          return await requireAuth();
        }}
      >
        <Route index element={<Dashboard />} loader={hostVansLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="vans"
          element={<ListedVans />}
          loader={async () => {
            return null;
          }}
        />

        <Route
          path="vans/:id"
          element={<ListedVanDetails />}
          loader={listedVanDetailsLoader}
        >
          <Route
            index
            element={<ListedVanDetail />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<ListedVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<ListedVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
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
