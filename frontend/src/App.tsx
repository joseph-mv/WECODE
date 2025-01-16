import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { useSelector, useDispatch } from "react-redux";
import  HomePage  from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import CommunityPage from "./pages/CommunityPage";
import { RootState } from "./redux/store";
import { AuthGoogle } from "./components/AuthGoogle/AuthGoogle";
import { closeAuthModal } from "./redux/reducers/uiReducer";

export const App = () => {
  const dispatch = useDispatch();
  const isAuthModalOpen = useSelector((state: RootState) => state.ui.isAuthModalOpen);

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
    <AuthGoogle isOpen={isAuthModalOpen} onClose={()=>dispatch(closeAuthModal())} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage/>} />
        <Route path="/community" element={<CommunityPage/>} />
      </Routes>
    </BrowserRouter>
  );
};