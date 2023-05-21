import { useState, useEffect } from "react";
import "./App.css";

import { useFetch } from "./useFetch";

const useStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1); // Using the prev value we avoid the re render of the useEffect
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Because we are usign the prev value, we dont need to add the count as a dependency

  return count;
};

function App() {
  const [url, setUrl] = useState(null);
  const count = useStopwatch();
  const { data } = useFetch({ url, onSuccess: () => console.log("success") });

  return (
    <div className="App">
      <div>Hello</div>
      <div>Count: {count}</div>
      {data?.name === null ? <div>{JSON.stringify(data)}</div> :  <div>{JSON.stringify(data?.name)}</div>}
      <div>
        <button onClick={() => setUrl("/data1.json")}>Team 1</button>
        <button onClick={() => setUrl("/data2.json")}>Team 2</button>
      </div>
    </div>
  );
}

export default App;