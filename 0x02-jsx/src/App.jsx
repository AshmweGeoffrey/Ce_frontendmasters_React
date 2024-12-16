import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza";
const App = () => {
  return (
    <div>
      <h1>Padre's Gino - Order Now</h1>
      <Pizza name="Cheese" description="Cheese Pizza"  image ={"/public/pizzas/bbq_ckn.webp"}  />
      <Pizza name="Pepperoni" description="Pepperoni Pizza" image ={"/public/pizzas/cali_ckn.webp"} />
      <Pizza name="Hawaiian" description="Hawaiian Pizza" image ={"/public/pizzas/southw_ckn.webp"} />
      <Pizza name="Veggie" description="Veggie Pizza" image={"/public/pizzas/thai_ckn.webp"} />
      <Pizza name="Meat Lovers" description="Meat Lovers Pizza" image="/public/pizzas/big_meat.webp"/>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
