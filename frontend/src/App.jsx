import "./App.css";
import CreateUser from "./pages/createUser";
import GroceriesApp from "./pages/GroceriesApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/loginUser";
import PrivateRoutes from "../utilities/PrivateRoutes";
import NotAuthorized from "./pages/Notauthorized";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/app" element={<GroceriesApp />} />
          </Route>

          <Route path="/" element={<LoginUser />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="not-authorized" element={<NotAuthorized/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
