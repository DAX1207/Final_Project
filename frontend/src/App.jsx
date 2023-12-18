import "./App.css";
import CreateUser from "./pages/createUser";
import GroceriesApp from "./pages/GroceriesApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/loginUser";
import PrivateRoutes from "../utilities/PrivateRoutes";
import NotAuthorized from "./pages/Notauthorized";
import BuyPage from "./pages/buyPage";
import AddProduct from "./pages/addproduct";
import EditProduct from "./pages/editProduct";

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
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="/Buy-Page" element={<BuyPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
