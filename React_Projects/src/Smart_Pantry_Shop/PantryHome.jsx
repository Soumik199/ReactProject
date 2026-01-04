import Pantry_item from "./PantryItem";
import AppleImage from "../assets/Apple.png";
import BananaImage from "../assets/Banana.png";
import CarrotImage from "../assets/Carrot.png";
import DatesImage from "../assets/Dates.png";
import EggImage from "../assets/egg.png";
import ChickenImage from "../assets/chicken.png";
import { useState } from "react";
const PantryHome = () => {
  const InventoryItem = [
    {
      id: 1,
      name: "Apple",
      price: 60,
      quantity: 50,
      img: AppleImage,
    },
    {
      id: 2,
      name: "Banana",
      price: 50,
      quantity: 35,
      img: BananaImage,
    },
    {
      id: 3,
      name: "Carrot",
      price: 30,
      quantity: 50,
      img: CarrotImage,
    },
    {
      id: 4,
      name: "Dates",
      price: 50,
      quantity: 90,
      img: DatesImage,
    },
    {
      id: 5,
      name: "Egg",
      price: 40,
      quantity: 70,
      img: EggImage,
    },
    {
      id: 6,
      name: "Chicken",
      price: 100,
      quantity: 10,
      img: ChickenImage,
    },
  ];

  let [PantryBalance, setPantryBalance] = useState(250);
  let [InventoryItemState, setInventoryItemState] = useState(InventoryItem);
  const OrderItem = (id, quanityorder, name) => {
    let ItemId = id;
    let QuanityOrder = quanityorder;
    let ItemName = name;
    const item = InventoryItemState.find((item) => item.id === ItemId);
    if (!item) {
      alert("Item not found in inventory");
      return;
    }
    if (item.quantity < QuanityOrder) {
      alert("Not enough quantity available");
      return;
    }
    const totalCost = item.price * QuanityOrder;
    if (totalCost > PantryBalance) {
      alert("Insufficient pantry balance");
      return;
    }
    // Update the inventory state with new quantity
    const updatedInventory = InventoryItemState.map((invItem) =>
      invItem.id === ItemId
        ? { ...invItem, quantity: invItem.quantity - QuanityOrder }
        : invItem
    );
    const newBalance = PantryBalance - totalCost;
    setInventoryItemState(updatedInventory);
    setPantryBalance(newBalance);
    alert(
      `Order placed: ${QuanityOrder} x ${ItemName} for ₹${totalCost}. Remaining balance: ₹${newBalance}`
    );
  };

  return (
    <div>
      <header>
        <h1>Welcome to Smart Pantry Shop</h1>
        <h3 id="balance">Your Pantry Balance: ₹ {PantryBalance}</h3>
        <p>Manage your pantry items efficiently!</p>
      </header>
      <div className="container">
        <h2 className="mt-4">Pantry Items</h2>
        <div className="cards">
          <Pantry_item
            SendInventoryItem={InventoryItemState}
            OrderItemDetails={OrderItem}
          ></Pantry_item>
        </div>
      </div>
    </div>
  );
};
export default PantryHome;
