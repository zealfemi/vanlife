import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUTS
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// PAGES
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";

// VANS PAGE
import Vans from "./pages/vans/Vans";
import Van from "./pages/vans/VanDetail";

// HOST PAGE
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import ListedVans from "./pages/host/ListedVans";
import ListedVanDetails from "./pages/host/ListedVanDetails";
import ListedVanDetail from "./pages/host/ListedVanDetail";
import ListedVanPricing from "./pages/host/ListedVanPricing";
import ListedVanPhotos from "./pages/host/ListedVanPhotos";

import Prac from "./Prac";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="prac" element={<Prac />} />
            <Route path="*" element={<ErrorPage />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<Van />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<ListedVans />} />

              <Route path="vans/:id" element={<ListedVanDetails />}>
                <Route index element={<ListedVanDetail />} />
                <Route path="pricing" element={<ListedVanPricing />} />
                <Route path="photos" element={<ListedVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
