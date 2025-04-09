import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./frontend/SignUp";
import Login from "./frontend/Login";
import SelectionPage from "./frontend/SelectionPage";
import Asd from "./frontend/Asd";
import ID from "./frontend/ID";
import ProgressTrackingAsd from "./frontend/ProgressTrackingAsd";
import ProgressTrackingID from "./frontend/ProgressTrackingID";
import ProfilePage from "./frontend/Profile";
import CommunicationQuiz from "./frontend/CommunicationQuiz";
import ObjectQuiz from "./frontend/ObjectQuiz";
import ColoringActivity from "./frontend/ColoringActivity";
// @ts-ignore
import TrafficScene from "./frontend/RoadCross";
import logo from "./assets/Fun Beans Logo.png";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Logo in top right corner */}
        <div className="fixed top-4 right-4 z-50">
          <img 
            src={logo} 
            alt="Fun Beans Logo" 
            className="w-16 h-16 object-contain"
          />
        </div>
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/selectionpage" element={<PrivateRoute element={<SelectionPage />} />} />
          <Route path="/asdpage" element={<PrivateRoute element={<Asd />} />} />
          <Route path="/idpage" element={<PrivateRoute element={<ID />} />} />
          <Route path="/progress-track-asd" element={<PrivateRoute element={<ProgressTrackingAsd />} />} />
          <Route path="/progress-track-id" element={<PrivateRoute element={<ProgressTrackingID />} />} />
          <Route path="/user-profile" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="/communication-quiz" element={<PrivateRoute element={<CommunicationQuiz />} />} />
          <Route path="/object-quiz" element={<PrivateRoute element={<ObjectQuiz />} />} />
          <Route path="/road-crossing" element={<PrivateRoute element={<TrafficScene />} />} />
          <Route path="/coloring-activity" element={<PrivateRoute element={<ColoringActivity />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
