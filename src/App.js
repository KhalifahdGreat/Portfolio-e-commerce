import { UserSignUp } from "./components/UserSignUp";
import { HomePage } from "./components/HomePage";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/adminSignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import AdminPage from "./components/adminPage";
=======
import { useState, createContext } from "react";
import { useToggle } from "./useToggle";
export const AppContext = createContext();
>>>>>>> c297a740612e0e335d8024535ff49fd4a4a5494d
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
      mutations: { retry: false },
    },
  });

  const [amount, setAmount] = useState(0);
  const [state, toggle] = useToggle();
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/admin" element={<AdminSignUp />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/login" element={<UserSignUp />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
