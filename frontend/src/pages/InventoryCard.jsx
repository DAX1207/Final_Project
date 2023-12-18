import { useNavigate } from "react-router-dom";

export default function InventoryCard({ list, onClick, handleProductDelete }) {
  const navigate = useNavigate();

  const editproduct = () => {
    navigate("/edit-product");
  };

  return (
    <div className="Inventory-Container">
      {list.map((l) => (
        <div key={l.id} className="Inventory-Card">
          <img src={l.image} />
          <h2>{l.productName}</h2>
          <h3>{l.brand}</h3>
          <p>{l.quantity}</p>
          <p>
            <strong>{l.price}</strong>
          </p>
          <button onClick={() => onClick(l)}>Add to cart</button>
          <div className="Edit-Delete-Container">
            <button className="Edit-Button" onClick={editproduct}>
              Edit
            </button>
            <button
              className="Remove-Button"
              onClick={() => handleProductDelete(l)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
