import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [userId, setUserId] = useState(1);

  const getTodods = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${userId}`
      );

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodods();
  }, [userId]);

  return (
    <>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
    </>
  );
};

export default App;
