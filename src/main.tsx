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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="coupons" element={<CouponsPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

