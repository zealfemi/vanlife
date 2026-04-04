import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import Van from "./pages/vans/VanDetail";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import ListedVans from "./pages/host/ListedVans";
import Reviews from "./pages/host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<Van />} />
            <Route path="*" element={<Home />} />
            <Route path="/host" element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/vans" element={<ListedVans />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
