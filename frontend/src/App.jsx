import "./App.css";
import GroceriesApp from "./pages/GroceriesApp";
import loginUser from "./pages/loginUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<GroceriesApp />} />
          <Route path="/" element={<loginUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
