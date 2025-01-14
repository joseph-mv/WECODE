import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/DashBoard/DashBoard";

export const App = () => {
  useEffect(() => {
      
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once
    easing: 'ease-in-out', // Easing function for animations
  });
  }, [])

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};