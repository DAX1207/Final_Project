import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });

  const [postResponse, setPostResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: "Default",
      productName: "Default",
      brand: "Default",
      quantity: "Default",
      image: "Default",
      price: "Default",
    },
  });

  useEffect(() => reset(formData), []);

  const handleOnChange = (evt) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        id: crypto.randomUUID(),
        [fieldName]: fieldValue,
      };
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault;
    setPostResponse("");

    await axios
      .post("http://localhost:3000/submitProduct", formData)
      .then((response) => setPostResponse(<p>{response.data}</p>));
  };

  return (
    <div className="custom-form-container">
      <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="custom-form-input">
          <h3>Add Product</h3>
          <label htmlFor="productName">Product Name </label>
          <input
            type="text"
            {...register("productName", {
              required: "Please provide a product name",
            })}
            id="productName"
            onChange={handleOnChange}
            value={formData.productName}
          />
          <p>{errors.productName?.message}</p>
        </div>
        <div className="custom-form-input">
          <label htmlFor="brand">Brand </label>
          <input
            type="text"
            {...register("brand", {
              required: "Please provide a brand name",
            })}
            id="brand"
            onChange={handleOnChange}
            value={formData.brand}
          />
          <p>{errors.brand?.message}</p>
        </div>
        <div className="custom-form-input">
          <label htmlFor="quantity">Quantity </label>
          <input
            type="text"
            {...register("quantity", {
              required: "Please provide a quantity",
            })}
            id="quantity"
            onChange={handleOnChange}
            value={formData.quantity}
          />
          <p>{errors.quantity?.message}</p>
        </div>
        <div className="custom-form-input">
          <label htmlFor="image">Image Link </label>
          <input
            type="text"
            {...register("image", {
              required: "Please provide a image URL",
            })}
            id="image"
            onChange={handleOnChange}
            value={formData.image}
          />
          <p>{errors.image?.message}</p>
        </div>
        <div className="custom-form-input">
          <label htmlFor="price">Price </label>
          <input
            type="text"
            {...register("price", {
              required: "Please provide a price",
            })}
            id="price"
            onChange={handleOnChange}
            value={formData.price}
          />
          <p>{errors.price?.message}</p>
        </div>
        <button className="custom-form-submit-btn">Add Product </button>
      </form>
      <div className="result-panel">{postResponse}</div>
      <br />
      <button
        className="custom-form-submit-btn back-to-inventory"
        onClick={() => navigate("/app")}
      >
        Back to Inventory
      </button>
    </div>
  );
}
