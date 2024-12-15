import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import Pizza from "./Pizza";
const App = () => {
  return (
    <div>
      <h1>Padre's Gino - Order Now</h1>
      <Order />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
