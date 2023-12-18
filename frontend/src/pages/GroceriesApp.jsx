import InventoryCard from "./InventoryCard";
import CartList from "./CartList";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function GroceriesApp() {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    handleFindDB();
  }, [postResponse]);

  async function handleFindDB() {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    setProducts(products);
  }

  const handleAddToCart = (item) => {
    setCartList((prevList) => {
      console.log(cartList);
      return [...prevList, { ...item, id: crypto.randomUUID() }];
    });
  };

  const handleEmptyCart = () => {
    setCartList([]);
  };

  const handleRemoveItem = (id) => {
    setCartList((prevList) => {
      return prevList.filter((i) => i.id !== id);
    });
  };

  const handleProductDelete = async (product) => {
    const id = product._id;
    await axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => setPostResponse(<p>{response.data}</p>));
  };

  const logout = () => {
    Cookies.remove("jwt-cookie");
    navigate("/");
  };

  const addproduct = () => {
    navigate("/add-product");
  };
  return (
    <>
      <h1>Groceries App</h1>

      <button onClick={logout}>Log Out</button>
      <button onClick={addproduct}>Add Product</button>

      {postResponse}
      <div className="GroceriesApp-Container">
        <InventoryCard
          list={products}
          onClick={handleAddToCart}
          // handleToggleEdit={handleToggleEdit}
          handleProductDelete={handleProductDelete}
        />
        <CartList
          cartList={cartList}
          onClickEmpty={handleEmptyCart}
          onClickRemove={handleRemoveItem}
        />
      </div>
    </>
  );
}
