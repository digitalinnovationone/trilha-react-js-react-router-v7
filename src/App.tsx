import Navbar from "./components/Navbar";
import "./App.css";
import PageTitle from "./components/Header";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="page__content">
        <PageTitle />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
