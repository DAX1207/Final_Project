import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function EditProduct() {
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  console.log(location.state);

  const [postResponse, setPostResponse] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    setFormData(product);
  }, []);
  const handleOnChange = (evt) => {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  const handleonsubmit = async (evt) => {
    setPostResponse("");
    evt.preventDefault;
    const id = formData.id;

    const tempData = {
      productName: formData.productName,
      brand: formData.brand,
      quantity: formData.quantity,
      image: formData.image,
      price: formData.price,
    };

    await axios
      .patch(`http://localhost:3000/products/${id}`, tempData)
      .then((response) => setPostResponse(<p>{response.data}</p>))
      .then(() => setToggleEdit(false));
  };

  useEffect(() => reset(formData), [toggleEdit]);
  const { id } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: id
      ? formData
      : {
          id: "Default",
          productName: "Default",
          brand: "Default",
          quantity: "Default",
          image: "Default",
          price: "Default",
        },
  });

  return (
    <div className="custom-form-container">
      <form onSubmit={handleSubmit(handleonsubmit)}>
        <div className="custom-form-input">
          <label htmlFor="productName">Product Name</label>
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
          <label htmlFor="brand">Brand</label>
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
          <label htmlFor="quantity">Quantity</label>
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
          <label htmlFor="image">Image Link</label>
          <input
            type="text"
            {...register("image", {
              required: "Please provide an image URL",
            })}
            id="image"
            onChange={handleOnChange}
            value={formData.image}
          />
          <p>{errors.image?.message}</p>
        </div>
        <div className="custom-form-input">
          <label htmlFor="price">Price</label>
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

        <button className="custom-form-submit-btn">Edit Product</button>
      </form>
      <div className="result-panel">
        {postResponse ? `${formData.productName} is edited` : ""}
      </div>
      <button
        className="custom-form-submit-btn back-to-inventory"
        onClick={() => navigate("/app")}
      >
        Back to Inventory
      </button>
    </div>
  );
}
