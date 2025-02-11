import Pizza from "./Pizza";
import { useEffect, useState } from "react";
import Cart from "./Cart";
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Order() {
  const [PizzaTypes, setPizzaTypes] = useState([]);
  const [PizzaType, setPizzaType] = useState("The Barbecue Chicken Pizza");
  const [PizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  let price, selectedPizza;
  if (!loading) {
    selectedPizza = PizzaTypes.find((pizza) => PizzaType === pizza.name);
    price = intl.format(
      selectedPizza?.sizes ? selectedPizza.sizes[PizzaSize] : 0,
    );
  }
  async function fetchPizzaTypes() {
    const response = await fetch("/api/pizzas");
    const data = await response.json();
    setPizzaTypes(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchPizzaTypes();
  }, []);
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { name: PizzaType, size: PizzaSize }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type </label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              id=""
              value={PizzaType}
            >
              {PizzaTypes.map((pizza) => (
                <option key={pizza.name} value={pizza.name}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size </label>
            <div>
              <span>
                <input
                  checked={PizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={PizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={PizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div>
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            selectedPizza && (
              <div className="order-pizza">
                <Pizza
                  name={selectedPizza.name}
                  description={selectedPizza.description}
                  image={selectedPizza.image}
                />
                <p>{price}</p>
              </div>
            )
          )}
        </div>
      </form>
      <div>{loading ? <h2>LOADING...</h2> : <Cart cart={cart} />}</div>
    </div>
  );
}
