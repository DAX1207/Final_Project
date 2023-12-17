export default function buy({ cartList }) {
  <div className="CartList-Container">
    <div>
      <h2>Your Cart</h2>
      <p>No. of Items: {cartList.length}</p>
    </div>

    {cartList.map((d) => (
      <div key={d.id} className="Buy-Card">
        <div className="Buy-Card-Info">
          <p>{d.productName}</p>
          <p>{d.price}</p>
        </div>
      </div>
    ))}

    <div className="Buy-Button">
      <p>
        total :
        {cartList
          .map((item) => parseFloat(item.price.replace("$", "")))
          .reduce((prev, next) => prev + next)
          .toFixed(2)}
      </p>
      <button id="Buy-Button" onClick={buy(cartList)}>
        <span>Buy</span>
      </button>
    </div>
  </div>;
}
