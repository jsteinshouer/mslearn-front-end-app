import { useState, useEffect } from 'react';
import PizzaList from './PizzaList';

const term = "Pizza";

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
    const response = await fetch("/pizzas");
    const pizzaData = await response.json();

    setData(pizzaData);
    setMaxId(Math.max(...pizzaData.map(pizza => pizza.id)));
  };

  const handleCreate = async(item) => {
    // Simulate creating item on API
    const newItem = { ...item, id: data.length + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);

    fetch("/pizzas", {
        method: "POST",
        body: JSON.stringify(newItem)
    })
  };

  const handleUpdate = (item) => {
    // Simulate updating item on API
    const updatedData = data.map(pizza => pizza.id === item.id ? item : pizza);
    setData(updatedData);
    fetch(`/pizzas/${item.id}`, {
        method: "POST",
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