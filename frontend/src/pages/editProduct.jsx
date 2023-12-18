import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function EditProduct() {
    const [searchParams] = useSearchParams();
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

    async function handleFindDB() {
        const id = searchParams.get("id");
        const response = await fetch(`http://localhost:3000/product/${id}`);
        console.log("res", response);
        const product = await response.json();
        setFormData({
            id: product[0].id,
            productName: product[0].productName,
            brand: product[0].brand,
            quantity: product[0].quantity,
            image: product[0].image,
            price: product[0].price,
        });
    }

    useEffect(() => {
        handleFindDB();
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: formData.id
            ? formData
            : {
                id: " ",
                productName: " ",
                brand: " ",
                quantity:" " ,
                image: " ",
                price: " ",
            },
    });

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
        const id = searchParams.get("id");
        await axios
            .patch(`http://localhost:3000/products/${id}`, formData)
            .then((response) => setPostResponse(<p>{response.data}</p>))
    };

    return (
        <div className="custom-form-container">
            <form action="" onSubmit={handleSubmit(handleOnSubmit)}>
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
                        required: "Please provide a image URL",
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
            <div className="result-panel">{ postResponse ? `${formData.productName} is edited` : ""}</div>
            <button className="custom-form-submit-btn back-to-inventory" onClick={() => navigate("/main")}>
                Back to Inventory
            </button>
        </div>
    );
}
