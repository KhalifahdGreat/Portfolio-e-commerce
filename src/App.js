import { UserSignUp } from "./components/UserSignUp";
import { HomePage } from "./components/HomePage";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSignUp from "./components/adminSignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
      mutations: { retry: false },
    },
  });
  return (
    <QueryClientProvider client={client}>
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
  );
}

export default App;
