import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./HeaderComponents/HeaderComponents";
import SideBar from "./SideBarComponents/SideBarComponents";
import HomePage from "./pages/HomePage/HomePage";
import HistoryGame from "./pages/HistoryGame/HistoryGame";
import QuizPage from "./pages/QuizPage/QuizPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Store from "./pages/Store/Store";
import ArtPage from "./pages/ArtPage/ArtPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        {/* Sidebar cố định */}
        <SideBar />

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hoc-lich-su" element={<HistoryGame />} />
            <Route path="/hoi-va-dap" element={<QuizPage />} />
            <Route path="/thong-tin-ca-nhan" element={<UserProfile />} />
            <Route path="/cua-hang" element={<Store />} />
            <Route path="/nghe-thuat-viet-nam" element={<ArtPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
