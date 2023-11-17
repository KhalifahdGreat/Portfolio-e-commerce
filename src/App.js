import styles from "./App.module.css";
import { UserSignUp } from "./components/UserSignUp";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/adminSignUp";

function App() {
  return (
    <div className={styles.container}>
      <AdminSignUp />
    </div>
  );
}

export default App;
