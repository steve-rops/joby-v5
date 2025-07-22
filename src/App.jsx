import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { PagesLayout } from "./pages/PagesLayout";
import { RequireUser } from "./data/user/RequireUser";
import { Dashboard } from "./dashboard/Dashboard";
import { Login } from "./auth/login/Login";
import { DashboardLayout } from "./dashboard/DashboardLayout";
import { Liked } from "./dashboard/liked/Liked";
import { Map } from "./dashboard/map/Map";
import { Search } from "./dashboard/search/Search";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<PagesLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route
            element={
              <RequireUser>
                <DashboardLayout />
              </RequireUser>
            }
          >
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="search" element={<Search />} />
              <Route path="liked" element={<Liked />} />
              <Route path="map" element={<Map />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
