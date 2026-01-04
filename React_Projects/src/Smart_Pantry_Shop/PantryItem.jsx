import { useRef, useState } from "react";
import "../Smart_Pantry_Shop/PantryItem.css";

const Pantry_item = ({ SendInventoryItem, OrderItemDetails }) => {
  const IncreaseItem = (id, availableQt) => {
    if ((quantity[id] || 0) >= availableQt) return; // if the condation is true then return

    // ..quantity keep all the quanity same and updated on the add quanity
    setQuantity({
      ...quantity,
      [id]: (quantity[id] || 0) + 1,
    });
  };

  const DecreaseItem = (id) => {
    setQuantity({
      ...quantity,
      [id]: Math.max((quantity[id] || 0) - 1, 0),
    });
  };

  const [quantity, setQuantity] = useState({});
  return (
    <div className="row d-flex flex-wrap justify-content-center mt-4">
      {SendInventoryItem.map((item) => (
        <div className="col-12 col-sm-6 col-md-4 mb-3" key={item.id}>
          <div className="card">
            <div className="card-body">
              <img src={item.img}></img>
              <h5 className="card-title">Product : {item.name}</h5>

              <div className="d-flex justify-content-between">
                <p className="card-text">Quantity Left: {item.quantity}</p>
                <p className="card-text">Price: ₹ {item.price}</p>
              </div>
              {/* Take Order */}
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button
                  className="btn  btn-danger me-2"
                  onClick={() => DecreaseItem(item.id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0"
                  value={quantity[item.id] || 0}
                  readOnly
                ></input>
                <button
                  className="btn btn-primary ms-2"
                  onClick={() => IncreaseItem(item.id, item.quantity)}
                  disabled={
                    item.quantity === 0 || quantity[item.id] === item.quantity
                  }
                >
                  +
                </button>
              </div>
              {/* Take Order Button*/}
              <div>
                <button
                  className="btn btn-success mt-2 w-100"
                  disabled={!quantity[item.id]}
                  onClick={() => {
                    OrderItemDetails(
                      item.id,
                      quantity[item.id],
                      item.name,
                    );
                    setQuantity({ ...quantity, [item.id]: 0 }); // 👈 reset input
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Pantry_item;
