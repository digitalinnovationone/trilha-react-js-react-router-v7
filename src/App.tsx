import Navbar from "./components/Navbar";
import PageTitle from "./components/Header";
import { Outlet, useLocation } from "react-router";
import "./App.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Rota mudou para:", location.pathname, location);
  }, [location]);

  return (
    <div className="page">
      <Navbar />
      <div className="page__content">
        <PageTitle />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

