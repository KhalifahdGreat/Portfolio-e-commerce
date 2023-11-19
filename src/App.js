import { UserSignUp } from "./components/UserSignUp";
import { HomePage } from "./components/HomePage";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/adminSignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
      mutations: { retry: false },
    },
  });

  const [amount, setAmount] = useState(0);
  return (
    <AppContext.Provider value={{ amount, setAmount }}>
      <QueryClientProvider client={client} v>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<UserSignUp />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/admin' element={<AdminSignUp />} />
            <Route path='/product' element={<Products />} />
            <Route path='/login' element={<UserSignUp />} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
