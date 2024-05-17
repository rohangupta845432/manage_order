import React, { useState } from "react";

const AddOrder = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddOrder(id, price, dish, table);
    console.log(id, price, dish, table);
  };
  return (
    <div>
      <form method="post" onSubmit={onSubmitHandler}>
        <label>Unique Order Id:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <label>Choose price:</label>
        <input
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Choose Dish:</label>
        <input
          type="text"
          onChange={(e) => {
            setDish(e.target.value);
          }}
        ></input>
        <label>Choose A table:</label>
        <select
          onChange={(e) => {
            setTable(e.target.value);
          }}
        >
          <option value="">Select Table</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit">Add To Bill</button>
      </form>
    </div>
  );
};
export default AddOrder;
