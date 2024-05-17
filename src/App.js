import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddOrder from "./components/AddOrder";

function App() {
  const dataArr = [];

  const [orderArr, setOrderArr] = useState(dataArr);

  const addOrder = (id, price, dish, table) => {
    setOrderArr((prevData) => {
      return [...prevData, { id, price, dish, table }];
    });

    localStorage.setItem(id, JSON.stringify({ id, price, dish, table }));
  };
  const onDeleteHandle = (id) => {
    const newArr = orderArr.filter;
    setOrderArr((prevOrderArr) => {
      return prevOrderArr.filter((data) => {
        return data.id != id;
      });
    });

    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <AddOrder onAddOrder={addOrder} />
      <h2>Table 1</h2>
      <ul>
        {orderArr
          .filter((data) => {
            return data.table === "table1";
          })
          .map((data) => {
            return (
              <li>
                {`${data.price}-${data.dish}-${data.table}`}{" "}
                <button
                  className="danger"
                  onClick={() => {
                    onDeleteHandle(data.id);
                  }}
                >
                  Delete Order
                </button>
              </li>
            );
          })}
      </ul>
      <h2>Table 2</h2>
      <ul>
        {orderArr
          .filter((data) => {
            return data.table === "table2";
          })
          .map((data) => {
            return (
              <li>
                {`${data.price}-${data.dish}-${data.table}`}{" "}
                <button
                  className="danger"
                  onClick={() => {
                    onDeleteHandle(data.id);
                  }}
                >
                  Delete Order
                </button>
              </li>
            );
          })}
      </ul>
      <h2>Table 3</h2>
      <ul>
        {orderArr
          .filter((data) => {
            return data.table === "table3";
          })
          .map((data) => {
            return (
              <li>
                {`${data.price}-${data.dish}-${data.table}`}
                <button
                  className="danger"
                  onClick={() => {
                    onDeleteHandle(data.id);
                  }}
                >
                  Delete Order
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
