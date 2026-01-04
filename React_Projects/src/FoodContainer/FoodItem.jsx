import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { FaBalanceScaleRight } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { LiaMenorahSolid } from "react-icons/lia";
const FoodItem = ({ Menu, onDeleteClick, OnEditClick }) => {
  console.log(Menu);
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col">
            <span className="spanright"><LiaMenorahSolid /></span>
            ID</th>
          <th scope="col">
            <span className="spanright"><MdOutlineRestaurantMenu /></span>
            
            Item Name </th>
          <th scope="col">
            <span className="spanright">
              <FaBalanceScaleRight />
            </span>
            Calories
          </th>
          <th scope="col">
            <span className="spanright">
              <TbCategory />
            </span>
            Category
          </th>
          <th scope="col">
           <span> <BsPersonGear /> </span> 
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {Menu.map((item) => (
          <tr key={item.id}>
            <td> {item.id}</td>
            <td>{item.name}</td>
            <td>{item.calories}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={(event) => onDeleteClick(item.id, event)}
              >
                <MdOutlineDeleteSweep />
                Delete
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={(event) => {
                  const newName = prompt("Enter new name:", item.name);
                  const newCalories = prompt(
                    "Enter new calories:",
                    item.calories
                  );
                  const newCategory = prompt(
                    "Enter new category:",
                    item.category
                  );
                  OnEditClick(
                    item.id,
                    newName,
                    newCalories,
                    newCategory,
                    event
                  );
                }}
              >
                <MdEditNote />
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodItem;
