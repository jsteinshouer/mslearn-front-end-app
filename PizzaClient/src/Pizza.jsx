import { useState, useEffect } from 'react';
import PizzaList from './PizzaList';

const term = "Pizza";
// const apiBaseURL = "https://vigilant-space-broccoli-pg6wv66rww36qgw-5100.app.github.dev";
const apiBaseURL = "";

function Pizza() {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = async () => {
    // Simulate fetching data from API
    // const pizzaData = [
    //   { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and basil' },
    //   { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and pepperoni' },
    //   { id: 3, name: 'Hawaiian', description: 'Tomato sauce, mozzarella, ham, and pineapple' },
    // ];
    const response = await fetch(`${apiBaseURL}/pizzas`,{
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
        "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"
      }
    });
    const pizzaData = await response.json();

    setData(pizzaData);
    setMaxId(Math.max(...pizzaData.map(pizza => pizza.id)));
  };

  const handleCreate = async(item) => {
    // Simulate creating item on API
    const newItem = { ...item, id: data.length + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);

    fetch(`${apiBaseURL}/pizzas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    })
  };

  const handleUpdate = (item) => {
    // Simulate updating item on API
    const updatedData = data.map(pizza => pizza.id === item.id ? item : pizza);
    setData(updatedData);
    fetch(`${apiBaseURL}/pizzas/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": item.name,
            "description": item.description
        })
    })
  };

  const handleDelete = (id) => {
    // Simulate deleting item on API
    const updatedData = data.filter(pizza => pizza.id !== id);
    setData(updatedData);
  };


  return (
    <div>
      <PizzaList
        name={term}
        data={data}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Pizza;