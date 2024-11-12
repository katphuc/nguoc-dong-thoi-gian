import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./HeaderComponents/HeaderComponents";
import SideBar from "./SideBarComponents/SideBarComponents";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        {/* Sidebar cố định */}
        <SideBar />

        {/* Main Content */}
        <div className="main-content">
          <HomePage />
        </div>
      </div>
    </Router>
  );
}

export default App;
