import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserAuthProvider } from "./pages/UserAuthContext";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import AuthCard from "./pages/AuthCard";
// import Registerpage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard1';
import ChatBot from './pages/ChatBot';
import AppointmentBooking from './pages/Appointment';
import MedicalCarePage from './pages/Doctorlist';
import ProfilePage from './pages/Profilepa';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🟢 Routes with Navbar + Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/doctors"
          element={
            <>
              <Navbar />
              <Doctors />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/Patient"
          element={
            <>
              <Navbar />
              <ProfilePage />
              <Footer />
            </>
          }
        />

         <Route
          path="/authcard"
          element={
            <>
              <Navbar />
              <AuthCard />
              <Footer />
            </>
          }
        />

         <Route
          path="/chatbot"
          element={
            <>
              <Navbar />
              <ChatBot />
              <Footer />
            </>
          }
        />

        <Route
          path="/doctorlist"
          element={
            <>
              <Navbar />
              <MedicalCarePage />
              <Footer />
            </>
          }
        />

         <Route
          path="/Appointment"
          element={
            <>
              <Navbar />
              <AppointmentBooking />
              <Footer />
            </>
          }
        />

        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/registerpage"
          element={
            <>
              <Navbar />
              <Registerpage />
              <Footer />
            </>
          }
        /> */}

        {/* 🔴 Dashboard without Navbar or Footer */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


