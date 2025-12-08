import React, { useEffect, useState } from "react";
import HelloMessage from "./components/HelloMessage";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5235/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return (
    <div className="App">
      <h1>Final C# API Project Frontend</h1>
      <HelloMessage message={message} />
    </div>
  );
}

export default App;