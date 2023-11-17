import styles from "./App.module.css";
import { UserSignUp } from "./components/UserSignUp";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/adminSignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/admin" element={<AdminSignUp />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
