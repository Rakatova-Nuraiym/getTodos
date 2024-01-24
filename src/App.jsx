import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  // const [userId, setUserId] = useState(1);

  const [getTodo, setGettodo] = useState([]);

  const getTodods = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );

      const responseData = await response.json();
      setGettodo(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodods();
  }, []);

  return (
    <>
      <h1>todo</h1>
      {getTodo.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
          </div>
        );
      })}
    </>
  );
};

export default App;
