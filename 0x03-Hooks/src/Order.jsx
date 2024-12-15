import Pizza from "./Pizza";
import { useState } from "react";
export default function Order() {
  const [PizzaType, setPizzaType] = useState("pepperoni");
  const [PizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type </label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              id=""
              value={PizzaType}
            >
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big-meat">Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size </label>
            <div>
              <span>
                <input
                  checked={PizzaSize === "Small"}
                  type="radio"
                  name="pizza-size"
                  value="Small"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={PizzaSize === "Medium"}
                  type="radio"
                  name="pizza-size"
                  value="Medium"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={PizzaSize === "Large"}
                  type="radio"
                  name="pizza-size"
                  value="Large"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div>
            <Pizza
              name="Cheese"
              description="Cheese Pizza"
              image={"/public/pizzas/bbq_ckn.webp"}
            />
            <p>$13.34</p>
          </div>
        </div>
      </form>
    </div>
  );
}
