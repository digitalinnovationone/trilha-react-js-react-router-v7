import Navbar from "./components/Navbar";
import PageTitle from "./components/Header";
import { Outlet } from "react-router";
import "./App.css";

function App() {
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

