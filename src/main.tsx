import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import CouponsPage from "./pages/Coupons/index.tsx";
import DashboardPage from "./pages/Dashboard/index.tsx";
import MessagesPage from "./pages/Messages/index.tsx";
import NotificationsPage from "./pages/Notifications/index.tsx";
import SettingsPage from "./pages/Settings/index.tsx";
import HomePage from "./pages/Home/index.tsx";
import OrdersReport from "./components/Dashboard/OrdersReport/index.tsx";
import CustomersReport from "./components/Dashboard/CustomersReport/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="admin/store">
            <Route path="coupons" element={<CouponsPage />} />
            <Route path="messages" element={<MessagesPage />} />
          </Route>
          <Route path="dashboard" element={<DashboardPage />}>
            <Route index element={<OrdersReport />} />
            <Route path="customers" element={<CustomersReport />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

