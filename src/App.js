import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/singin" element={<Signin />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/profile" element={<Signup />} />
        <Route path="/forgetpassword" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
