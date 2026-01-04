import "./FoodItem.css";
import FoodItem from "./FoodItem";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
const HealtyFood = () => {
  const Menuitem = [
    {
      id: 1,
      name: "Salad",
      calories: 280,
      category: "Starter",
    },
    {
      id: 2,
      name: "Mochar Chop",
      calories: 320,
      category: "Starter",
    },
    {
      id: 3,
      name: "Nun",
      calories: 500,
      category: "Main",
    },
    {
      id: 4,
      name: "Mug Dal ",
      calories: 650,
      category: "Main",
    },
    {
      id: 5,
      name: "Chingri Malai Curry ",
      calories: 480,
      category: "Main",
    },
  ];
  let [FoodItems, setFoodItems] = useState(Menuitem);
  let [MenuInputValue, MenusetInputfield] = useState("");
  let [CaloriesInputValue, CaloriessetInputfield] = useState("");
  let [CategoryInputValue, CategorysetInputfield] = useState("");

  const addItem = () => {
    let Formdata = {
      id: FoodItems.length + 1,
      name: MenuInputValue,
      calories: CaloriesInputValue,
      category: CategoryInputValue,
    };
    setFoodItems([...FoodItems, Formdata]);
    MenusetInputfield("");
    CaloriessetInputfield("");
    CategorysetInputfield("");
  };

  const DeleteItem = (id) => {
    setFoodItems(FoodItems.filter((item) => item.id !== id));
    alert("Are you sure you want to delete this item?");
  };

  const EditItem = (id, newName, newCalories, newCategory) => {
    const UpdatedList = FoodItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: newName !== null ? newName : item.name,
          calories: newCalories !== null ? newCalories : item.calories,
          category: newCategory !== null ? newCategory : item.category,
        };
      } else {
        return item;
      }
    });
    setFoodItems(UpdatedList);
  };

  return (
    <>
      <div className="container">
        <h1 className="FoodItem">
          <GiFoodTruck />
          Bengali Biye Bari Menu....
          <GiFoodTruck />
        </h1>
        <div className="Inputfield">
          <input
            type="text"
            placeholder="Add Bengali Menu Item ...."
            className="form-control"
            value={MenuInputValue}
            onChange={(e) => MenusetInputfield(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add Calories Amt ...."
            className="form-control"
            value={CaloriesInputValue}
            onChange={(e) => CaloriessetInputfield(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add Food Category ...."
            className="form-control"
            value={CategoryInputValue}
            onChange={(e) => CategorysetInputfield(e.target.value)}
          />
          <button className="btn btn-success AddButton " onClick={addItem}>
            <div>
              <IoAddCircleOutline />
            </div>
            Add Item
          </button>
        </div>
        <div className="DisplayItem">
          <FoodItem
            Menu={FoodItems}
            onDeleteClick={DeleteItem}
            OnEditClick={EditItem}
          ></FoodItem>
        </div>
      </div>
    </>
  );
};

export default HealtyFood;
