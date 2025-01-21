import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import AdminDashBoard from "./pages/AdminDashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="admin_dashBoard" element={<AdminDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
