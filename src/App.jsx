import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [combinedData, setCombinedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseR1 = await fetch("http://localhost:3000/r1");
      const responseR2 = await fetch("http://localhost:3000/r2");
      const responseR3 = await fetch("http://localhost:3000/r3");

      const dataR1 = await responseR1.json();
      const dataR2 = await responseR2.json();
      const dataR3 = await responseR3.json();

      setCombinedData({ dataR1, dataR2, dataR3 });

      console.log(dataR1, dataR2, dataR3);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
